# Secure File Sharing Using Amazon S3

## 📌 Project Overview

This project demonstrates how to securely store and manage files using Amazon S3 with AWS IAM least-privilege access.

A private S3 bucket was created in the Mumbai AWS Region (`ap-south-1`). Public access was blocked, and a custom IAM policy was created to provide controlled access to files stored in the bucket.

---

## 🎯 Project Objectives

- Create a private S3 bucket
- Secure the bucket using Block Public Access
- Upload files to Amazon S3
- Create a custom IAM policy
- Implement least-privilege access
- Create an IAM group and user
- Allow controlled S3 file operations
- Understand secure cloud file-sharing concepts

---

## ☁️ AWS Services Used

- Amazon S3
- AWS IAM

---

## 🏗️ Architecture

```text
                    AWS Account
                         |
                         v
                  IAM User
                         |
                         v
                SecureFileSharingUsers
                         |
                         v
              SecureFileSharingPolicy
                         |
             +-----------+-----------+
             |           |           |
             v           v           v
        ListBucket   GetObject   PutObject
                         |
                         v
                Amazon S3 Bucket
                         |
                         v
                  shared-files/
                         |
                         v
                sample-document.txt




                txt
🪣 S3 Bucket Configuration
Configuration	Value
Bucket Name	swaroop-secure-file-sharing-2026
Region	ap-south-1 — Mumbai
Public Access	Blocked
Versioning	Disabled
Encryption	SSE-S3
Storage Class	S3 Standard
📁 File Structure

The following test file was uploaded:

swaroop-secure-file-sharing-2026
└── shared-files/
    └── sample-document.txt
🔐 IAM Configuration
IAM Group
SecureFileSharingUsers
IAM User
secure-file-sharing-user

The user was added to the SecureFileSharingUsers group.

The group was assigned the custom managed policy:

SecureFileSharingPolicy
🔑 Least-Privilege IAM Policy

The custom policy allows only the required S3 operations.

Bucket-level permission
s3:ListBucket
Object-level permissions
s3:GetObject
s3:PutObject
s3:DeleteObject

The permissions are restricted to the project bucket and the shared-files objects.

The user was not granted:

AdministratorAccess
AmazonS3FullAccess

This demonstrates the principle of least privilege.

🔄 How the Project Works
A private S3 bucket is created.
Block Public Access is kept enabled.
A shared-files folder is created.
A test document is uploaded.
A custom IAM policy is created.
The policy grants limited S3 permissions.
An IAM group is created.
The IAM user is added to the group.
The IAM policy is attached through the group.
Authorized access can be controlled through IAM.
🔒 Security Features
Block Public Access

The S3 bucket does not allow public access.

IAM Least Privilege

The IAM user receives only the S3 permissions required for this project.

Server-Side Encryption

S3-managed encryption (SSE-S3) is enabled for the uploaded object.

No Administrator Access

The project IAM user does not receive administrative permissions.

📸 Screenshots
1. S3 Bucket Created

Private S3 bucket created in the Mumbai region with Block Public Access enabled.

2. File Uploaded

The sample-document.txt file was uploaded inside the shared-files folder.

3. IAM Policy

Custom SecureFileSharingPolicy providing controlled S3 permissions.

4. IAM User Permissions

The secure-file-sharing-user receives the custom policy through the SecureFileSharingUsers group.

🧪 Project Result

The secure file-sharing environment was successfully configured.

The project demonstrates:

Private S3 storage
Public access protection
IAM-based access control
Least-privilege permissions
Secure object storage
AWS-managed encryption
💡 Key Learnings
Amazon S3 bucket security
Block Public Access
S3 object management
IAM users and groups
IAM policies
Least-privilege access
Bucket-level vs object-level permissions
S3 server-side encryption
Secure cloud file-sharing concepts