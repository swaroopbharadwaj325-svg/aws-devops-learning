\# Amazon S3 Practical Steps



\## 1. Create S3 Bucket



\### Steps



1\. Open \*\*AWS Console\*\*.

2\. Search for \*\*S3\*\*.

3\. Click \*\*Create bucket\*\*.

4\. Enter a globally unique bucket name:



```text

swaroop-aws-devops-s3-practical-2026

```



5\. Select the AWS Region:



```text

Asia Pacific (Mumbai) - ap-south-1

```



6\. Keep \*\*Object Ownership\*\* as:



```text

Bucket owner enforced

```



7\. Keep \*\*Block all public access enabled\*\* initially.

8\. Keep \*\*Bucket Versioning disabled\*\* initially.

9\. Keep default encryption as \*\*SSE-S3\*\*.

10\. Keep \*\*Object Lock disabled\*\*.

11\. Click \*\*Create bucket\*\*.



\---



\# 2. Upload an Object



\### Steps



1\. Open the created S3 bucket.

2\. Click \*\*Upload\*\*.

3\. Click \*\*Add files\*\*.

4\. Select:



```text

s3-test.txt

```



5\. Keep the default upload settings.

6\. Click \*\*Upload\*\*.

7\. Verify that `s3-test.txt` appears inside the bucket.



\### Result



```text

Bucket

└── s3-test.txt

```



\---



\# 3. Download an Object



\### Steps



1\. Open the S3 bucket.

2\. Select `s3-test.txt`.

3\. Click \*\*Download\*\*.

4\. Open the downloaded file.

5\. Verify that the original content is present.



\---



\# 4. Create an S3 Folder



\### Steps



1\. Open the bucket.

2\. Go to \*\*Objects\*\*.

3\. Click \*\*Create folder\*\*.

4\. Enter:



```text

documents

```



5\. Leave encryption settings as default.

6\. Click \*\*Create folder\*\*.



\### Result



```text

Bucket

├── s3-test.txt

└── documents/

```



\---



\# 5. Upload Object Inside Folder



\### Steps



1\. Open the `documents` folder.

2\. Click \*\*Upload\*\*.

3\. Create/select:



```text

report.txt

```



4\. Upload the file.

5\. Verify that the file appears inside the folder.



\### Result



```text

Bucket

├── s3-test.txt

└── documents/

&#x20;   └── report.txt

```



Object key:



```text

documents/report.txt

```



\---



\# 6. Check S3 Object URL and S3 URI



\### Steps



1\. Open `s3-test.txt`.

2\. Check the object details.

3\. Copy the \*\*S3 URI\*\*.

4\. Copy the \*\*Object URL\*\*.



\### S3 URI format



```text

s3://bucket-name/object-key

```



Example:



```text

s3://swaroop-aws-devops-s3-practical-2026/s3-test.txt

```



\### Object URL format



```text

https://bucket-name.s3.region.amazonaws.com/object-key

```



\---



\# 7. Check S3 Permissions



\### Steps



1\. Open the bucket.

2\. Go to \*\*Permissions\*\*.

3\. Check \*\*Block public access\*\*.

4\. Initially verify that:



```text

Block all public access = ON

```



5\. Check the \*\*Bucket policy\*\* section.



At this stage, the bucket was kept private.



\---



\# 8. Enable S3 Versioning



\### Steps



1\. Open the bucket.

2\. Go to \*\*Properties\*\*.

3\. Find \*\*Bucket Versioning\*\*.

4\. Click \*\*Edit\*\*.

5\. Select \*\*Enable\*\*.

6\. Click \*\*Save changes\*\*.



\### Result



```text

Bucket Versioning = Enabled

```



\---



\# 9. Test S3 Versioning



\### Steps



1\. Open the `documents` folder.

2\. Create/upload the first version of:



```text

report.txt

```



3\. Modify the contents of `report.txt`.

4\. Upload the same file again.

5\. S3 creates another version.

6\. Enable \*\*Show versions\*\*.

7\. Verify that multiple versions are available.



\### Result



```text

report.txt

├── Version 1

└── Version 2

```



\---



\# 10. Test Delete Marker



\### Steps



1\. Keep \*\*Show versions\*\* enabled.

2\. Select `report.txt`.

3\. Delete the current object.

4\. S3 creates a \*\*Delete Marker\*\*.

5\. Verify that previous versions still exist.



\### Result



```text

report.txt

├── Version 1

├── Version 2

└── Delete Marker

```



\---



\# 11. Recover Deleted Object



\### Steps



1\. Keep \*\*Show versions\*\* enabled.

2\. Find the \*\*Delete Marker\*\*.

3\. Select only the Delete Marker.

4\. Delete the Delete Marker.

5\. Turn \*\*Show versions\*\* off.

6\. Verify that `report.txt` is visible again.



\### Result



The previous version of `report.txt` was restored.



\---



\# 12. Check S3 Storage Classes



\### Steps



1\. Open an object.

2\. Check its \*\*Storage Class\*\*.

3\. Verify that the uploaded objects are using:



```text

S3 Standard

```



\### Storage classes studied



\* S3 Standard

\* S3 Intelligent-Tiering

\* S3 Standard-IA

\* S3 One Zone-IA

\* S3 Glacier Instant Retrieval

\* S3 Glacier Flexible Retrieval

\* S3 Glacier Deep Archive



No unnecessary storage class change was made to avoid additional charges.



\---



\# 13. Create Static Website HTML File



Created:



```text

index.html

```



Content:



```html

<!DOCTYPE html>

<html>

<head>

&#x20;   <title>Swaroop AWS DevOps</title>

</head>

<body>



&#x20;   <h1>Welcome to My S3 Website</h1>



&#x20;   <p>This website is hosted using Amazon S3.</p>



&#x20;   <p>AWS DevOps Practical by Swaroop</p>



</body>

</html>

```



\---



\# 14. Upload index.html



\### Steps



1\. Open the S3 bucket.

2\. Click \*\*Upload\*\*.

3\. Click \*\*Add files\*\*.

4\. Select:



```text

index.html

```



5\. Click \*\*Upload\*\*.

6\. Verify that `index.html` appears in the bucket root.



\### Bucket structure



```text

Bucket

├── index.html

├── s3-test.txt

└── documents/

&#x20;   └── report.txt

```



\---



\# 15. Enable Static Website Hosting



\### Steps



1\. Open the bucket.

2\. Go to \*\*Properties\*\*.

3\. Find \*\*Static website hosting\*\*.

4\. Click \*\*Edit\*\*.

5\. Select \*\*Enable\*\*.

6\. Select:



```text

Host a static website

```



7\. Enter the index document:



```text

index.html

```



8\. Click \*\*Save changes\*\*.

9\. Copy/open the \*\*Bucket website endpoint\*\*.



Initially, public access was blocked.



\---



\# 16. Disable Block Public Access for Website



\### Steps



1\. Go to the bucket.

2\. Open \*\*Permissions\*\*.

3\. Find \*\*Block public access\*\*.

4\. Click \*\*Edit\*\*.

5\. Uncheck \*\*Block all public access\*\*.

6\. Confirm the change.

7\. Click \*\*Save changes\*\*.



\### Important



This was done only because this bucket is being used for the \*\*S3 static website practical\*\*.



Do not use this configuration for sensitive/private data.



\---



\# 17. Add Bucket Policy



\### Steps



1\. Go to \*\*Permissions\*\*.

2\. Find \*\*Bucket policy\*\*.

3\. Click \*\*Edit\*\*.

4\. Add the following policy:



```json

{

&#x20; "Version": "2012-10-17",

&#x20; "Statement": \[

&#x20;   {

&#x20;     "Sid": "PublicReadForWebsite",

&#x20;     "Effect": "Allow",

&#x20;     "Principal": "\*",

&#x20;     "Action": "s3:GetObject",

&#x20;     "Resource": "arn:aws:s3:::swaroop-aws-devops-s3-practical-2026/\*"

&#x20;   }

&#x20; ]

}

```



5\. Click \*\*Save changes\*\*.



\### Policy meaning



```text

Principal: \*

```



Anyone can access.



```text

Action: s3:GetObject

```



Allows reading objects.



```text

Resource: bucket/\*

```



Applies to objects inside the bucket.



\---



\# 18. Test Static Website



\### Steps



1\. Go to \*\*Properties\*\*.

2\. Find \*\*Static website hosting\*\*.

3\. Copy/open the \*\*Bucket website endpoint\*\*.

4\. Open the endpoint in a browser.



\### Result



The website successfully displayed:



```text

Welcome to My S3 Website

This website is hosted using Amazon S3.

AWS DevOps Practical by Swaroop

```



\---



\# 19. Final Practical Architecture



```text

&#x20;                User Browser

&#x20;                     |

&#x20;                     v

&#x20;           S3 Website Endpoint

&#x20;                     |

&#x20;                     v

&#x20;                S3 Bucket

&#x20;                     |

&#x20;         +-----------+-----------+

&#x20;         |           |           |

&#x20;         v           v           v

&#x20;     index.html  s3-test.txt  documents/

&#x20;                                 |

&#x20;                                 v

&#x20;                             report.txt

```



\---



\# 20. Practical Completed



\* \[x] Created S3 bucket

\* \[x] Uploaded object

\* \[x] Downloaded object

\* \[x] Created folder

\* \[x] Uploaded object inside folder

\* \[x] Checked S3 URI

\* \[x] Checked Object URL

\* \[x] Checked permissions

\* \[x] Enabled Versioning

\* \[x] Created multiple versions

\* \[x] Tested Delete Marker

\* \[x] Restored object

\* \[x] Studied Storage Classes

\* \[x] Created `index.html`

\* \[x] Enabled Static Website Hosting

\* \[x] Disabled Block Public Access for website

\* \[x] Added Bucket Policy

\* \[x] Tested website successfully



