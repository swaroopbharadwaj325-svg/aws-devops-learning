const cognitoDomain =
    "https://ap-south-1b3ngzn5th.auth.ap-south-1.amazoncognito.com";

const clientId = "2foajbbhf7gflu7givlvv22bm1";

const redirectUri = "http://localhost:3000";

const apiUrl =
    "https://ufjr7kg61a.execute-api.ap-south-1.amazonaws.com/files";


// ===============================
// PKCE Helpers
// ===============================

function base64UrlEncode(bytes) {
    return btoa(String.fromCharCode(...bytes))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}


async function generatePKCE() {

    const randomBytes = crypto.getRandomValues(new Uint8Array(32));

    const verifier = base64UrlEncode(randomBytes);

    const hash = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(verifier)
    );

    const challenge = base64UrlEncode(
        new Uint8Array(hash)
    );

    sessionStorage.setItem("pkce_verifier", verifier);

    return challenge;
}


// ===============================
// Cognito Login
// ===============================

document.getElementById("loginButton").addEventListener("click", async function () {

    const challenge = await generatePKCE();

    const loginUrl =
        `${cognitoDomain}/oauth2/authorize` +
        `?client_id=${clientId}` +
        `&response_type=code` +
        `&scope=email+openid+phone` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&code_challenge_method=S256` +
        `&code_challenge=${encodeURIComponent(challenge)}`;

    window.location.href = loginUrl;
});


// ===============================
// Exchange Cognito Code for Token
// ===============================

async function handleCognitoCallback() {

    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");

    if (!code) {
        return;
    }

    const verifier = sessionStorage.getItem("pkce_verifier");

    if (!verifier) {
        throw new Error("PKCE verifier not found.");
    }

    const tokenResponse = await fetch(
        `${cognitoDomain}/oauth2/token`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                client_id: clientId,
                code: code,
                redirect_uri: redirectUri,
                code_verifier: verifier
            })
        }
    );

    if (!tokenResponse.ok) {
        const errorText = await tokenResponse.text();
        console.error("Token error:", errorText);
        throw new Error("Cognito token exchange failed.");
    }

    const tokens = await tokenResponse.json();

    sessionStorage.setItem(
        "access_token",
        tokens.access_token
    );

    sessionStorage.removeItem("pkce_verifier");

    // Remove ?code=... from browser URL
    window.history.replaceState(
        {},
        document.title,
        redirectUri
    );

    document.getElementById("status").textContent =
        "Logged in successfully. You can upload a file.";
}


// ===============================
// File Upload
// ===============================

document.getElementById("uploadButton").addEventListener("click", async function () {

    const fileInput = document.getElementById("fileInput");
    const status = document.getElementById("status");

    if (!fileInput.files.length) {
        status.textContent = "Please select a file first.";
        return;
    }

    const accessToken =
        sessionStorage.getItem("access_token");

    if (!accessToken) {
        status.textContent =
            "Please login with Cognito first.";
        return;
    }

    const file = fileInput.files[0];

    const fileId = Date.now().toString();

    try {

        status.textContent =
            "Calling API Gateway...";

        const response = await fetch(
            apiUrl,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization":
                        `Bearer ${accessToken}`
                },

                body: JSON.stringify({
                    file_id: fileId,
                    file_name: file.name,
                    uploaded_by: "swaroop"
                })
            }
        );

        console.log(
            "API status:",
            response.status
        );

        if (!response.ok) {

            const errorText =
                await response.text();

            console.error(
                "API error:",
                errorText
            );

            throw new Error(
                "API request failed: HTTP " +
                response.status
            );
        }

        const result =
            await response.json();

        console.log(
            "API response received"
        );

        console.log(
            "S3 key:",
            result.s3_key
        );

        status.textContent =
            "Uploading file to S3...";


        // Upload directly to S3
        const uploadResponse =
            await fetch(
                result.upload_url,
                {
                    method: "PUT",
                    body: file
                }
            );


        console.log(
            "S3 status:",
            uploadResponse.status
        );


        if (!uploadResponse.ok) {

            throw new Error(
                "S3 upload failed: HTTP " +
                uploadResponse.status
            );
        }


        status.textContent =
            "Upload successful! File: " +
            file.name;


    } catch (error) {

        console.error(
            "UPLOAD ERROR:",
            error
        );

        status.textContent =
            "Upload failed: " +
            error.message;
    }
});


// ===============================
// Start Application
// ===============================

handleCognitoCallback()
    .catch(error => {

        console.error(
            "Cognito error:",
            error
        );

        document.getElementById("status").textContent =
            error.message;
    });