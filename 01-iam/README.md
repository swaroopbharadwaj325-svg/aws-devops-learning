\# AWS IAM



\## What is IAM?



IAM stands for Identity and Access Management.



AWS IAM is used to securely control access to AWS resources.



IAM helps us answer two questions:



1\. Who can access AWS?

2\. What can they do?



\---



\## Main Components of IAM



IAM has four important components:



\- Users

\- Groups

\- Roles

\- Policies



\### IAM User



An IAM User represents an individual identity that requires AWS access.



Example:



Developer → IAM User



\### IAM Group



An IAM Group is a collection of IAM users.



Example:



Developers Group

\- User 1

\- User 2

\- User 3



Permissions can be attached to the group and users receive those permissions.



\### IAM Role



An IAM Role provides permissions that can be assumed by trusted entities.



Example:



EC2 → IAM Role → S3



An EC2 instance can use an IAM role to access S3 without storing AWS access keys on the server.



\### IAM Policy



An IAM Policy defines what actions are allowed or denied.



Policies are generally written in JSON.



\---



\## Authentication vs Authorization



\### Authentication



Authentication answers:



"Who are you?"



Examples:



\- Username and password

\- MFA

\- Access credentials



\### Authorization



Authorization answers:



"What are you allowed to do?"



Example:



A user may be allowed to:



\- Read S3 objects

\- Start EC2 instances



But may not be allowed to:



\- Delete S3 buckets



\---



\## Principle of Least Privilege



The Principle of Least Privilege means giving a user, application, or service only the permissions required to perform its job.



Example:



If a user only needs to read an S3 bucket, we should not give the user Administrator permissions.



\---



\## IAM Important Points



\- IAM is a global AWS service.

\- IAM controls access to AWS resources.

\- Users represent identities.

\- Groups contain users.

\- Roles provide assumable permissions.

\- Policies define permissions.

\- MFA improves account security.

\- Root user should not be used for everyday AWS operations.

\- Follow the Principle of Least Privilege.



\---



\## Hands-on Practice



I will document my IAM practical exercises here as I learn:



\- Creating IAM users

\- Creating IAM groups

\- Attaching policies

\- Creating IAM roles

\- Understanding IAM policy JSON

\- Testing permissions

\- Using MFA

\- Understanding least privilege



\---



\## Interview Questions



\### 1. What is IAM?



IAM is an AWS service used to securely manage identities and control access to AWS resources.



\### 2. What are the main components of IAM?



Users, Groups, Roles, and Policies.



\### 3. What is the difference between authentication and authorization?



Authentication verifies who you are, while authorization determines what you are allowed to do.



\### 4. What is the Principle of Least Privilege?



It means providing only the minimum permissions required to perform a task.









\## Screenshots



\### 1. Create IAM Group

!\[Create IAM Group](screenshots/01-iam-create-group.png)



\### 2. IAM User Review

!\[IAM User Review](screenshots/01-iam-user-review.png)



\### 3. IAM User

!\[IAM User](screenshots/iam-user.png)



\### 4. IAM Dashboard

!\[IAM Dashboard](screenshots/iam\_dashboard.png)

