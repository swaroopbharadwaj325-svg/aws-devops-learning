# Automated Backup and Recovery System on AWS

## 📌 Project Overview

This project demonstrates an automated backup and recovery system for an Amazon EC2 instance using Amazon EBS Snapshots, AWS Lambda, EventBridge Scheduler, and IAM.

The project covers both **manual backup/recovery** and **automated backup/recovery**.

The main objective is to protect data stored on an EC2 instance by automatically creating EBS snapshots and demonstrating how data can be recovered after accidental deletion.

---

## 🏗️ AWS Architecture

```text
                         ┌──────────────────────┐
                         │ EventBridge Scheduler │
                         │   AWSBackupSchedule   │
                         └──────────┬───────────┘
                                    │
                                    │ Scheduled Trigger
                                    ▼
                         ┌──────────────────────┐
                         │    AWS Lambda        │
                         │   AWSBackupLambda    │
                         └──────────┬───────────┘
                                    │
                                    │ Create Snapshot
                                    ▼
┌──────────────────────┐    ┌──────────────────────┐
│      EC2 Instance    │───▶│      Amazon EBS      │
│  Backup-Recovery-EC2 │    │     8 GiB gp3        │
└──────────────────────┘    └──────────┬───────────┘
                                       │
                                       │ Snapshot
                                       ▼
                              ┌──────────────────┐
                              │   EBS Snapshot   │
                              │ Automated Backup │
                              └────────┬─────────┘
                                       │
                                       │ Restore
                                       ▼
                              ┌──────────────────┐
                              │ Recovery Volume  │
                              │   Attach + Mount │
                              └──────────────────┘
☁️ AWS Services Used
Service	Purpose
Amazon EC2	Hosts the Linux environment and test data
Amazon EBS	Provides persistent block storage
EBS Snapshots	Creates point-in-time backups
AWS Lambda	Automates EBS snapshot creation
EventBridge Scheduler	Invokes Lambda on a recurring schedule
AWS IAM	Provides permissions to Lambda
CloudWatch Logs	Stores Lambda execution logs
🌎 AWS Region
Region: us-east-1
Region Name: N. Virginia
Availability Zone: us-east-1c
🖥️ EC2 Configuration
Instance Name: Backup-Recovery-EC2
Instance Type: t3.micro
Operating System: Amazon Linux 2023
Availability Zone: us-east-1c

The EC2 instance was used as the source system for creating and recovering backup data.

💾 EBS Configuration
Volume Type: gp3
Volume Size: 8 GiB
IOPS: 3000
Throughput: 125 MiB/s
Availability Zone: us-east-1c

The EBS volume contains the test data used throughout the backup and recovery process.

🔹 Phase 1 — Manual Backup and Recovery
Step 1 — Create Test Data

A test directory was created on the EC2 instance:

sudo mkdir -p /backup-test

A test file was created:

echo "AWS Backup Recovery Project - Original Data" | sudo tee /backup-test/important-data.txt

The file was verified using:

cat /backup-test/important-data.txt
Step 2 — Create Manual EBS Snapshot

A manual snapshot was created from the original EBS volume.

Snapshot Name: Backup-Recovery-Initial
Snapshot ID: snap-092bc57fbccf975f1
Volume Size: 8 GiB
Status: Completed
Step 3 — Simulate Data Loss

The original test file was deleted:

sudo rm /backup-test/important-data.txt

The file was then checked:

cat /backup-test/important-data.txt

The result confirmed that the file was no longer available.

Step 4 — Restore Data from Snapshot

A new EBS volume was created from the manual snapshot.

The recovery volume was attached to the EC2 instance and identified using:

lsblk

Because the restored filesystem had the same XFS UUID as the source filesystem, it was mounted using:

sudo mount -o ro,nouuid /dev/nvme1n1p1 /mnt/recovery

The recovered file was verified:

ls -l /mnt/recovery/backup-test/

cat /mnt/recovery/backup-test/important-data.txt

Output:

AWS Backup Recovery Project - Original Data

This confirmed successful manual recovery.

🔹 Phase 2 — Automated Backup
Step 5 — Create IAM Role

An IAM role was created for the Lambda function:

Role Name: AWSBackupLambdaRole

Policies used:

AmazonEC2FullAccess
AWSLambdaBasicExecutionRole

The role allows Lambda to interact with EC2/EBS and write execution logs.

Note: Broad permissions were used for this beginner learning project. In a production environment, the role should be restricted using least-privilege permissions.

Step 6 — Create AWS Lambda Function

Lambda function:

Function Name: AWSBackupLambda
Runtime: Python 3.14
Architecture: x86_64
Region: us-east-1

The function uses Python and boto3 to create an EBS snapshot.

Lambda Code
import boto3
from datetime import datetime, timezone

ec2 = boto3.client("ec2")

VOLUME_ID = "vol-02d79b1515cb244d7"


def lambda_handler(event, context):

    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d-%H-%M-%S")

    response = ec2.create_snapshot(
        VolumeId=VOLUME_ID,
        Description=f"Automated backup - {timestamp}",
        TagSpecifications=[
            {
                "ResourceType": "snapshot",
                "Tags": [
                    {
                        "Key": "Name",
                        "Value": "Automated-Backup"
                    },
                    {
                        "Key": "Project",
                        "Value": "AWS-Backup-Recovery"
                    }
                ]
            }
        ]
    )

    snapshot_id = response["SnapshotId"]

    print(f"Created snapshot: {snapshot_id}")

    return {
        "statusCode": 200,
        "snapshotId": snapshot_id
    }
🔹 Phase 3 — Schedule Automated Backups
Step 7 — EventBridge Scheduler

An EventBridge Scheduler trigger was configured:

Schedule Name: AWSBackupSchedule
Schedule Type: Recurring
Schedule Expression: rate(5 minutes)
Flexible Time Window: Off

The scheduler invokes:

AWSBackupLambda

The Lambda function then creates a new EBS snapshot.

Step 8 — Verify Automated Snapshots

Multiple automated snapshots were successfully generated.

Example automated snapshots included:

snap-0d4ce978d9dda5232
snap-0799cbd45cc4b133e
snap-01a6596f7fcdfb88
snap-0734f2115e1eb969
snap-0c5c171f7428386e9
snap-0ff690041fa4b699e
snap-096ba7409a01b586d
snap-0f0572e08146b02ac
snap-07e6d17520d64fceb

The snapshots reached:

Status: Completed
Progress: 100%

This demonstrated that the scheduled Lambda automation was working successfully.

🔹 Phase 4 — Automated Recovery
Step 9 — Create Recovery Volume

A later automated snapshot was selected:

Snapshot ID: snap-00a89753fcabedd2e

A recovery EBS volume was created from the snapshot:

Volume Name: Final-Automated-Recovery-2
Size: 8 GiB
Type: gp3
Availability Zone: us-east-1c
Step 10 — Attach Recovery Volume

The recovery volume was attached to:

Backup-Recovery-EC2

Linux identified the volume as:

/dev/nvme4n1

The partition was:

/dev/nvme4n1p1
Step 11 — Mount Recovery Volume

A recovery directory was created:

sudo mkdir -p /mnt/final-recovery-2

The recovered filesystem was mounted read-only:

sudo mount -o ro,nouuid /dev/nvme4n1p1 /mnt/final-recovery-2
Step 12 — Verify Recovered Data

The recovery directory was checked:

ls -l /mnt/final-recovery-2/backup-test/

Recovered files:

automated-test.txt
final-recovery-test.txt

The final test file was read:

cat /mnt/final-recovery-2/backup-test/final-recovery-test.txt

Output:

Automated Backup Recovery Test - FINAL

This confirmed that the final test data was successfully recovered from the automated EBS snapshot.

📸 Screenshots
1. EC2 Instance

2. Original EBS Volume

3. SSH Connection

4. Original Test Data

5. Manual Snapshot

6. Simulated Data Loss

7. Restored Volume

8. Manual Recovery Verification

9. IAM Role

10. Lambda Function

11. EventBridge Scheduler

12. Automated Snapshots

13. Snapshot History

14. Final Recovery Volume

15. Final Recovery Verification

🔧 Troubleshooting
1. EC2 Instance Connect Failed

Browser-based EC2 Instance Connect initially failed to establish an SSH connection.

SSH was successfully established from Windows CMD using the EC2 key pair:

ssh -i "keypair.pem" ec2-user@<EC2-Public-IP>
2. XFS UUID Conflict

The restored EBS volumes contained the same XFS filesystem UUID as the original filesystem.

The recovery volume was therefore not formatted.

Instead, it was mounted safely using:

sudo mount -o ro,nouuid /dev/<device> /mnt/recovery
3. Snapshot Timing

One automated snapshot was created before the required test data existed on the source volume.

Therefore, the expected file was not present in that snapshot.

A later snapshot created after the test data was written was selected for the final recovery.

This demonstrated the importance of selecting an appropriate recovery point.

4. Device Naming

AWS console device names such as:

/dev/sdf

may appear as NVMe devices inside Amazon Linux.

The correct device was identified using:

lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT,SERIAL
💰 Cost Considerations

This project was designed as a small learning project using:

EC2: t3.micro
EBS: 8 GiB gp3
Snapshots: Small test volume
Lambda: Short execution
EventBridge Scheduler: Testing schedule

Resources should be deleted or stopped after testing to avoid unnecessary charges.

🧹 Cleanup

After completing the project:

Stop or terminate the EC2 instance.
Unmount recovery volumes.
Detach recovery volumes.
Delete temporary EBS recovery volumes.
Delete unnecessary EBS snapshots.
Delete the EventBridge Scheduler.
Delete the Lambda function if no longer required.
Delete the dedicated IAM role if no longer required.
Check for any accidentally created volumes and remove them.

The project documentation and screenshots can be retained in GitHub after AWS resources are removed.

🎯 Project Outcome

The project successfully demonstrated:

EC2 administration
EBS volume management
EBS snapshots
Manual backup and recovery
Automated backup
AWS Lambda automation
EventBridge scheduling
IAM permissions
Linux storage management
XFS filesystem recovery
Data-loss simulation
Automated recovery verification

The final recovery successfully restored:

final-recovery-test.txt

with the contents:

Automated Backup Recovery Test - FINAL
💼 Interview Explanation

I built an automated backup and recovery system on AWS using EC2, EBS, Lambda, EventBridge Scheduler and IAM. I first created an EBS snapshot manually and used it to recover deleted test data. Then I automated snapshot creation using a Python Lambda function and EventBridge Scheduler. Finally, I created a recovery volume from an automated snapshot, attached it to the EC2 instance, mounted the XFS filesystem in read-only mode, and successfully verified the recovered data.

📚 Key AWS Concepts Learned
EC2
EBS
EBS Snapshots
IAM Roles
Lambda
Boto3
EventBridge Scheduler
CloudWatch Logs
Linux lsblk
XFS
Backup & Recovery
Data Loss Recovery
Automation
👨‍💻 Project Status

Status: Completed ✅

AWS Region: us-east-1

Project Type: AWS Cloud / Backup & Recovery / Automation

Level: Beginner → Intermediate
