\# Serverless Image/Video Processing



\## Project Overview



This project demonstrates a serverless image processing pipeline using AWS managed services.



When an image is uploaded to Amazon S3, an S3 event triggers AWS Lambda. Lambda uses Amazon Rekognition to detect labels in the image, stores the processing result in S3, and sends an email notification through Amazon SNS.



AWS Step Functions is also used to orchestrate the Lambda processing workflow.



\## AWS Region



Asia Pacific (Mumbai) — `ap-south-1`



\## AWS Services Used



\- Amazon S3

\- AWS Lambda

\- Amazon Rekognition

\- Amazon SNS

\- AWS Step Functions

\- AWS IAM

\- Amazon CloudWatch Logs



\## Architecture



```text

User

&#x20; |

&#x20; v

Amazon S3

(input/)

&#x20; |

&#x20; | S3 Event

&#x20; v

AWS Lambda

swaroop-image-processor

&#x20; |

&#x20; +--------------------+

&#x20; |                    |

&#x20; v                    v

Amazon Rekognition   Amazon S3

Label Detection      processed/

&#x20; |                    |

&#x20; +---------+----------+

&#x20;           |

&#x20;           v

&#x20;       Amazon SNS

&#x20;           |

&#x20;           v

&#x20;       Email Notification





AWS Step Functions

&#x20;       |

&#x20;       v

AWS Lambda

&#x20;       |

&#x20;       v

Amazon Rekognition

&#x20;       |

&#x20;       v

Amazon S3







S3 Bucket

Bucket name:

swaroop-serverless-media-2026

Folder structure:

swaroop-serverless-media-2026/

├── input/

└── processed/



Images are uploaded to the input/ folder.

Processing results are stored in the processed/ folder.

Lambda Function

Function name:

swaroop-image-processor

Runtime:

Python 3.14

Handler:

lambda\_function.lambda\_handler

The Lambda function:

1\. Receives the S3 event.

2\. Identifies the uploaded image.

3\. Reads the image information from S3.

4\. Sends the image to Amazon Rekognition.

5\. Detects labels and confidence values.

6\. Creates a JSON processing result.

7\. Stores the result in the processed/ folder.

8\. Publishes an SNS notification.

IAM Permissions

The Lambda execution role contains the following permissions:

\- AWSLambdaBasicExecutionRole

\- S3 read/write permissions for the project bucket

\- rekognition:DetectLabels

\- sns:Publish

Least-privilege permissions were used for the S3 access.

Amazon Rekognition

Amazon Rekognition is used to identify objects and labels in uploaded images.

Example detected labels from testing:

\- Car — 99.13%

\- Vehicle — 99.13%

\- Wheel — 97.57%

\- Tire — 94.85%

\- Headlight — 86.32%

\- Person — 86.24%

Amazon SNS

SNS topic:

swaroop-image-processing-notifications

An email subscription was created and confirmed.

After successful processing, Lambda publishes a notification containing:

\- Image filename

\- S3 input location

\- S3 processed output location

\- Detected labels

\- Confidence values

AWS Step Functions

State machine:

swaroop-image-processing-workflow

Type:

Standard

The state machine contains a ProcessImage task that invokes the Lambda function.

The Step Functions execution was successfully tested using an S3-style event input.

Processing Result

Example output:

{

&#x20; "original\_file": "input/bike1.jpg",

&#x20; "file\_name": "bike1.jpg",

&#x20; "file\_size\_bytes": 74052,

&#x20; "labels\_detected": \[

&#x20;   {

&#x20;     "name": "Motorcycle",

&#x20;     "confidence": 99.0

&#x20;   }

&#x20; ],

&#x20; "status": "processed"

}



The actual detected labels depend on the uploaded image.

Testing

Test 1 — S3 and Lambda

An image was uploaded to:

input/test-image.jpg

Lambda successfully created:

processed/test-image.jpg.processed

Test 2 — Rekognition

An image containing a car was uploaded.

Amazon Rekognition successfully detected multiple labels with high confidence.

Test 3 — SNS

A new image was uploaded and successfully processed.

An SNS email notification was received after processing.

Test 4 — Step Functions

The Step Functions state machine successfully invoked:

swaroop-image-processor

The execution completed with:

Succeeded

The workflow also produced the expected processed S3 object.

Screenshots

All project screenshots are available in the screenshots/ directory.

screenshots/

├── 01-s3-bucket-and-folders.png

├── 02-first-processed-file-created.png

├── 03-basic-processing-json-result.png

├── 04-rekognition-label-detection.png

├── 05-sns-topic-created.png

├── 06-sns-email-subscription-confirmed.png

├── 07-lambda-role-permissions.png

├── 08-processed-objects-after-sns-test.png

├── 09-step-functions-workflow-designer.png

├── 10-step-functions-execution-success.png

└── 11-final-processed-files.png



Skills Demonstrated

\- Serverless architecture

\- Event-driven architecture

\- Amazon S3

\- AWS Lambda

\- Amazon Rekognition

\- Amazon SNS

\- AWS Step Functions

\- IAM least-privilege permissions

\- JSON event processing

\- Python

\- CloudWatch logging

\- AWS workflow orchestration

Conclusion

This project demonstrates an event-driven serverless image processing solution using AWS managed services.

The project successfully processes images uploaded to Amazon S3, performs label detection using Amazon Rekognition, stores processing results in S3, sends SNS email notifications, and demonstrates workflow orchestration using AWS Step Functions.

