\# Automated EC2 EBS Snapshot Backup Using AWS Lambda



\## 📌 Project Overview



This project demonstrates how to automate \*\*Amazon EBS volume backups\*\* using AWS Lambda and Amazon EventBridge Scheduler.



The solution automatically creates EBS snapshots of an EC2 instance's root volume on a scheduled basis, reducing the need for manual backup operations.



\## 🏗️ Architecture



```text

&#x20;                   Amazon EventBridge Scheduler

&#x20;                             │

&#x20;                             │ Every 1 day

&#x20;                             ↓

&#x20;                   AWS Lambda Function

&#x20;                   EC2-EBS-Auto-Backup

&#x20;                             │

&#x20;                             │ Boto3

&#x20;                             ↓

&#x20;                    Amazon EC2 / EBS

&#x20;                             │

&#x20;                             ↓

&#x20;                      EBS Snapshot

&#x20;                             │

&#x20;                             ↓

&#x20;                      Backup Created

```



\## ☁️ AWS Services Used



\* Amazon EC2

\* Amazon EBS

\* AWS Lambda

\* Amazon EventBridge Scheduler

\* AWS IAM

\* Amazon CloudWatch Logs



\## 🎯 Project Objectives



\* Create an EC2 instance with an EBS volume.

\* Create an IAM role for Lambda.

\* Develop a Python Lambda function using Boto3.

\* Automatically create EBS snapshots.

\* Schedule automated backups using EventBridge Scheduler.

\* Monitor Lambda execution through CloudWatch Logs.

\* Verify successful snapshot creation.



\## ⚙️ Configuration



\### EC2 Instance



| Parameter        | Value                   |

| ---------------- | ----------------------- |

| Instance Name    | `Backup-Automation-EC2` |

| Instance ID      | `i-0579fc84f81e47263`   |

| Instance Type    | `t3.micro`              |

| Region           | `ap-south-1`            |

| Operating System | Amazon Linux 2023       |



\### EBS Volume



| Parameter   | Value                   |

| ----------- | ----------------------- |

| Volume ID   | `vol-09b80d1be849b2f01` |

| Device      | `/dev/xvda`             |

| Size        | 8 GiB                   |

| Volume Type | gp3                     |

| Encryption  | Not encrypted           |



\### Lambda Function



| Parameter     | Value                 |

| ------------- | --------------------- |

| Function Name | `EC2-EBS-Auto-Backup` |

| Runtime       | Python 3.14           |

| Architecture  | ARM64                 |

| Region        | `ap-south-1`          |



\### IAM Role



```text

EC2-Backup-Lambda-Role

```



The role was configured to allow Lambda to interact with Amazon EC2 and create EBS snapshots.



\### EventBridge Scheduler



```text

Schedule Name: EC2-EBS-Daily-Backup

Schedule Type: Rate-based

Schedule: rate(1 day)

Flexible Time Window: Off

Target: EC2-EBS-Auto-Backup

```



\## 🐍 Lambda Function



The Lambda function uses the AWS SDK for Python (Boto3) to create an EBS snapshot.



```python

import boto3

from datetime import datetime, timezone



ec2 = boto3.client("ec2")



VOLUME\_ID = "vol-09b80d1be849b2f01"





def lambda\_handler(event, context):



&#x20;   timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d-%H-%M-%S")



&#x20;   snapshot = ec2.create\_snapshot(

&#x20;       VolumeId=VOLUME\_ID,

&#x20;       Description=f"Automated EBS backup - {timestamp}"

&#x20;   )



&#x20;   snapshot\_id = snapshot\["SnapshotId"]



&#x20;   print(f"Snapshot created successfully: {snapshot\_id}")

&#x20;   print(f"Source volume: {VOLUME\_ID}")



&#x20;   return {

&#x20;       "statusCode": 200,

&#x20;       "snapshot\_id": snapshot\_id,

&#x20;       "volume\_id": VOLUME\_ID

&#x20;   }

```



\## 🔄 Workflow



1\. EventBridge Scheduler triggers the Lambda function according to the configured schedule.

2\. Lambda receives the invocation.

3\. Boto3 connects to the Amazon EC2 service.

4\. Lambda identifies the configured EBS volume.

5\. `create\_snapshot()` creates a new EBS snapshot.

6\. Lambda prints the snapshot ID to CloudWatch Logs.

7\. The snapshot becomes available in the EC2 Snapshots console.



\## 🧪 Testing



The Lambda function was first tested manually using the Lambda console.



\### Manual Test Result



The Lambda execution completed successfully.



```text

Execution status: Succeeded

```



The function successfully created EBS snapshots from the configured volume.



\## ✅ Automation Verification



After configuring EventBridge Scheduler with a temporary 5-minute schedule, multiple snapshots were successfully created automatically.



Example snapshots:



```text

snap-0f571b53a8704596a

snap-0d3d106c9726e6c39

```



Both snapshots reached:



```text

Status: Completed

Progress: 100%

```



After successful verification, the schedule was changed from the temporary 5-minute test interval to:



```text

rate(1 day)

```



\## 📸 Screenshots



\### 01. EC2 Instance Created



!\[EC2 Instance](screenshots/01-ec2-instance-created.png)



\### 02. EBS Volume Attached



!\[EBS Volume](screenshots/02-ebs-volume-attached.png)



\### 03. IAM Role Created



!\[IAM Role](screenshots/03-iam-role-created.png)



\### 04. Lambda Function Created



!\[Lambda Function](screenshots/04-lambda-function-created.png)



\### 05. Lambda Backup Code



!\[Lambda Code](screenshots/05-lambda-ebs-backup-code.png)



\### 06. Lambda Manual Test Success



!\[Lambda Test](screenshots/06-lambda-manual-test-success.png)



\### 07. EBS Snapshot Created



!\[EBS Snapshot](screenshots/07-ebs-snapshot-created.png)



\### 08. EventBridge Scheduler



!\[EventBridge Scheduler](screenshots/08-eventbridge-scheduler-created.png)



\### 09. Daily Backup Schedule



!\[Daily Schedule](screenshots/09-eventbridge-daily-schedule.png)



\### 10. Automated Snapshots Verified



!\[Automated Snapshots](screenshots/10-automated-snapshots-verified.png)



\## 🔐 Security Considerations



For this learning project, `AmazonEC2FullAccess` was used to simplify the initial setup.



In a production environment, the Lambda execution role should follow the \*\*principle of least privilege\*\* and only allow the EC2 actions required to create and manage the required snapshots.



The scheduler uses a separate IAM execution role to invoke the Lambda function.



\## 💰 Cost Considerations



EBS snapshots are stored incrementally, but snapshot storage still incurs charges based on the amount of data stored.



For a practice environment:



\* Avoid unnecessary snapshots.

\* Use an appropriate retention policy.

\* Delete test resources when they are no longer required.

\* Avoid running a high-frequency schedule unnecessarily.



The 5-minute schedule used during testing was changed to a daily schedule after successful verification.



\## 📚 Key Concepts Learned



\* Amazon EC2

\* Amazon EBS

\* EBS Snapshots

\* AWS Lambda

\* Python

\* Boto3

\* IAM Roles

\* EventBridge Scheduler

\* CloudWatch Logs

\* Automated Backup

\* Scheduled Automation

\* AWS Cost Management

\* IAM Least Privilege



\## 🎤 Interview Explanation



> I built an automated EC2 EBS backup solution using AWS Lambda and EventBridge Scheduler. I created an EC2 instance with an EBS volume and configured an IAM role for Lambda. The Lambda function uses Python and Boto3 to create an EBS snapshot of the volume. EventBridge Scheduler invokes the Lambda function automatically on a daily schedule. I initially tested the automation using a 5-minute schedule, verified that snapshots were created successfully, and then changed the schedule to run once per day. CloudWatch Logs were used to verify Lambda execution.



\## 🚀 Future Improvements



The current implementation uses a fixed EBS Volume ID. Possible improvements include:



\* Automatically discover volumes using EC2 tags.

\* Add tags to created snapshots.

\* Implement snapshot retention and automatic cleanup.

\* Use a least-privilege IAM policy.

\* Add SNS notifications for backup success or failure.

\* Add CloudWatch alarms.

\* Encrypt snapshots using AWS KMS.



\---



\*\*Project Status:\*\* ✅ Core automation completed



\*\*AWS Region:\*\* `ap-south-1` — Mumbai



\*\*Portfolio:\*\* AWS / Cloud Computing / Automation



