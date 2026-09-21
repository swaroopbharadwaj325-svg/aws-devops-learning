# Static Website Hosting Using Amazon S3

## Project Overview

This project demonstrates how to host a static website using Amazon S3.

The website consists of simple HTML pages that are uploaded to an Amazon S3 bucket and served using the S3 static website hosting feature.

The project uses Amazon S3 as the primary AWS service and demonstrates bucket configuration, static website hosting, public access configuration, bucket policy, website testing, and error-page handling.

---

## AWS Service Used

- Amazon S3

### AWS Region

`ap-south-1` – Asia Pacific (Mumbai)

---

## Project Objectives

The main objectives of this project are:

- Learn how Amazon S3 works as object storage.
- Create and configure an S3 bucket.
- Upload static website files to S3.
- Enable static website hosting.
- Configure access for website visitors.
- Configure an S3 bucket policy.
- Test the hosted website.
- Configure and test a custom error page.

---

## Architecture

```text
                User / Web Browser
                       |
                       v
             Amazon S3 Website Endpoint
                       |
                       v
             S3 Static Website Bucket
                  /            \
                 /              \
                v                v
          index.html        error.html




AWS Configuration
Configuration	Value
AWS Service	Amazon S3
Region	ap-south-1
Bucket	swaroop-static-website-2026
Index Document	index.html
Error Document	error.html
Hosting Type	Static Website Hosting
Implementation
1. Create S3 Bucket

Created an Amazon S3 bucket:

swaroop-static-website-2026

The bucket was created in the Mumbai AWS Region:

ap-south-1

2. Create Website Files

Two HTML files were created for the website.

index.html

The main webpage displays:

Welcome message
Project name
AWS region
S3 hosting information
error.html

The error page is displayed when a requested page does not exist.

The files are available in the website/ folder.

3. Upload Website Files

The following files were uploaded to the S3 bucket:

index.html
error.html

4. Enable Static Website Hosting

Static website hosting was enabled from:

S3
→ Bucket
→ Properties
→ Static website hosting

Configuration:

Index document: index.html
Error document: error.html

5. Configure Public Access

Public access was configured so that users can access the static website through the S3 website endpoint.

The Block Public Access settings were adjusted for this learning project.

This confirms that the S3 static website configuration was successful.


A page that does not exist was requested from the website endpoint.

Example:

/nonexistent.html

S3 displayed the configured error.html page.

Website Workflow
Create S3 Bucket
       |
       v
Create HTML Files
       |
       v
Upload Files to S3
       |
       v
Enable Static Website Hosting
       |
       v
Configure Public Access
       |
       v
Configure Bucket Policy
       |
       v
Open Website Endpoint
       |
       v
Test Website
Testing
Test	Expected Result	Status
S3 bucket creation	Bucket created	Successful
File upload	HTML files visible	Successful
Static website hosting	Hosting enabled	Successful
Public access	Website accessible	Successful
Bucket policy	Objects readable	Successful
Homepage	index.html displayed	Successful
Invalid page	error.html displayed	Successful
Security Considerations
Public access was enabled only for this static website demonstration.
Sensitive or private information should not be stored in the bucket.
AWS credentials must never be stored in website files.
S3 public access should be carefully reviewed before using it in a production environment.
Access permissions should follow the minimum required permissions.
Cost Considerations

This project uses only Amazon S3 and contains a very small number of website files.

No EC2 instance, Lambda function, database, or other continuously running AWS resource was required.

The project was designed to minimize AWS resource consumption.

After completing the project, the bucket and its objects can be deleted if they are no longer required.

What I Learned

Through this project, I learned:

How to create an Amazon S3 bucket.
How to upload files to S3.
How S3 static website hosting works.
How to configure an index document.
How to configure an error document.
How S3 bucket policies work.
How to configure public access.
How to test an S3-hosted website.
How to organize an AWS project on GitHub.
Future Enhancements

The project can be enhanced by:

Adding CSS styling.
Adding JavaScript functionality.
Creating multiple website pages.
Using Amazon CloudFront.
Adding a custom domain.
Improving website security.
Adding additional website features.
Project Structure
07-static-website-s3/
│
├── README.md
│
├── website/
│   ├── index.html
│   └── error.html
│
└── screenshots/
    ├── 01-bucket-created.png
    ├── 02-files-uploaded.png
    ├── 03-static-website-hosting.png
    ├── 04-public-access.png
    ├── 05-bucket-policy.png
    ├── 06-website-working.png
    └── 07-error-page.png
Conclusion

This project demonstrates how Amazon S3 can be used to host a static website.

The project successfully created an S3 bucket, uploaded HTML files, enabled static website hosting, configured public access, created a bucket policy, and tested both the homepage and custom error page.

This project provided practical experience with Amazon S3 and demonstrated one of its common use cases in AWS cloud computing.

Project Details

Project: Static Website Hosting Using Amazon S3

AWS Service: Amazon S3

AWS Region: ap-south-1 – Mumbai

Bucket: swaroop-static-website-2026

Index Document: index.html

Error Document: error.html8. Test the Error Page

Public access should be used carefully. Do not store sensitive or private information in a publicly accessible bucket.
Welcome to My AWS Static Website


6. Configure Bucket Policy

A bucket policy was configured to allow public read access to the website objects.

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForWebsite",
The website successfully displayed:
      "Effect": "Allow",
      "Principal": "*",

      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::swaroop-static-website-2026/*"
    }
  ]
}

The policy allows website visitors to retrieve the HTML objects from the bucket.

7. Test the Website
# Static Website Hosting Using Amazon S3

## Project Overview

This project demonstrates how to host a static website using Amazon S3.

A simple HTML website is uploaded to an Amazon S3 bucket and served through the S3 static website hosting feature.

The project demonstrates the complete process of creating an S3 bucket, uploading website files, enabling static website hosting, configuring public access, creating a bucket policy, and testing the website.

---

## AWS Service Used

- Amazon S3

### AWS Region

`ap-south-1` – Asia Pacific (Mumbai)

---

## Project Objectives

- Create an Amazon S3 bucket.
- Upload static website files to S3.
- Enable S3 static website hosting.
- Configure public access for website files.
- Create an S3 bucket policy.
- Configure an index document.
- Configure a custom error document.
- Test the hosted website.
- Understand how Amazon S3 can be used for static website hosting.

---

## Architecture

```text
             User / Web Browser
                    |
                    v
          S3 Website Endpoint
                    |
                    v
        Amazon S3 Static Website
              /           \
             /             \
            v               v
       index.html       error.html











AWS Configuration
Configuration	Value
AWS Service	Amazon S3
Region	ap-south-1
Bucket	swaroop-static-website-2026
Index Document	index.html
Error Document	error.html
Hosting Type	Static Website Hosting
Implementation
1. Create S3 Bucket

Created an Amazon S3 bucket:

swaroop-static-website-2026

The bucket was created in the Mumbai AWS Region:

ap-south-1

2. Create Website Files

Two HTML files were created for the website.

index.html

The main webpage displays:

Welcome message
Project name
AWS region
S3 hosting information
error.html

The error page is displayed when a requested page does not exist.

The files are available in the website/ folder.

3. Upload Website Files

The following files were uploaded to the S3 bucket:

index.html
error.html

4. Enable Static Website Hosting

Static website hosting was enabled from:

S3 → Bucket → Properties → Static website hosting

Configuration:

Index document: index.html
Error document: error.html

5. Configure Public Access

Public access was configured so that users can access the static website through the S3 website endpoint.

The Block Public Access settings were adjusted for this learning project.

Public access should be used carefully. Do not store sensitive or private information in a publicly accessible bucket.

6. Configure Bucket Policy

A bucket policy was configured to allow public read access to the website objects.

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForWebsite",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::swaroop-static-website-2026/*"
    }
  ]
}

The policy allows website visitors to retrieve the HTML objects from the bucket.

7. Test the Website

The S3 website endpoint was opened in a web browser.

The website successfully displayed:

Welcome to My AWS Static Website

This confirms that the S3 static website configuration was successful.

8. Test the Error Page

A page that does not exist was requested from the website endpoint.

Example:

/nonexistent.html

S3 displayed the configured error.html page.

Website Workflow
Create S3 Bucket
       |
       v
Create HTML Files
       |
       v
Upload Files to S3
       |
       v
Enable Static Website Hosting
       |
       v
Configure Public Access
       |
       v
Configure Bucket Policy
       |
       v
Open Website Endpoint
       |
       v
Test Website
Testing
Test	Expected Result	Status
S3 bucket creation	Bucket created	Successful
File upload	HTML files visible	Successful
Static website hosting	Hosting enabled	Successful
Public access	Website accessible	Successful

Invalid page	error.html displayed	Successful

Security Considerations

Public access was enabled only for this static website demonstration.

Sensitive or private information should not be stored in the bucket.
AWS credentials must never be stored in website files.
S3 public access should be carefully reviewed before using it in a production environment.
Access permissions should follow the minimum required permissions.
Cost Considerations

This project uses only Amazon S3 and contains a very small number of website files.

No EC2 instance, Lambda function, database, or other continuously running AWS resource was required.

The project was designed to minimize AWS resource consumption.

After completing the project, the bucket and its objects can be deleted if they are no longer required.

What I Learned

Through this project, I learned:

How to create an Amazon S3 bucket.
How to upload files to S3.
How S3 static website hosting works.
How to configure an index document.
How to configure an error document.
How S3 bucket policies work.
How to configure public access.
How to test an S3-hosted website.
How to organize an AWS project on GitHub.
Future Enhancements

The project can be enhanced by:

Adding CSS styling.
Adding JavaScript functionality.
Creating multiple website pages.
Using Amazon CloudFront.
Adding a custom domain.
Improving website security.
Adding additional website features.
Project Structure
07-static-website-s3/
│
├── README.md
│
├── website/
│   ├── index.html
│   └── error.html
│
└── screenshots/
    ├── 01-bucket-created.png
    ├── 02-files-uploaded.png
    ├── 03-static-website-hosting.png
    ├── 04-public-access.png
    ├── 05-bucket-policy.png
    ├── 06-website-working.png
    └── 07-error-page.png
Conclusion

This project demonstrates how Amazon S3 can be used to host a static website.

The project successfully created an S3 bucket, uploaded HTML files, enabled static website hosting, configured public access, created a bucket policy, and tested both the homepage and custom error page.

This project provided practical experience with Amazon S3 and demonstrated one of its common use cases in AWS cloud computing.

Project Details

Project: Static Website Hosting Using Amazon S3

AWS Service: Amazon S3

AWS Region: ap-south-1 – Mumbai

Bucket: swaroop-static-website-2026

Index Document: index.html

Error Document: error.html

Author

Name: Swaroop

Course: AWS / Cloud Computing

GitHub: AWS DevOps Learning

