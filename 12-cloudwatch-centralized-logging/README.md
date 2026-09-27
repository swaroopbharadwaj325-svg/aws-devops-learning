# Centralized Logging with Amazon CloudWatch

## Project Overview

This project demonstrates centralized application logging and monitoring using **AWS Lambda and Amazon CloudWatch**.

A Lambda function generates application logs that are sent to a custom CloudWatch Log Group. A CloudWatch Logs metric filter identifies specific log events and converts them into a custom CloudWatch metric. A CloudWatch Alarm then monitors the metric and changes state when the defined threshold is reached.

This project demonstrates a basic AWS observability and monitoring workflow.

---

## Architecture

```text
                    AWS Lambda
                        |
                        v
              CloudWatch Log Group
        /aws/devops/centralized-logs
                        |
                        v
                  Log Stream
                        |
                        v
                Metric Filter
          ProcessingRequestFilter
                        |
                        v
              Custom CloudWatch Metric
           ProcessingRequestCount
                        |
                        v
             CloudWatch Alarm
 CentralizedLogging-ProcessingRequest-Alarm


 AWS Services Used
AWS Lambda
Amazon CloudWatch Logs
CloudWatch Log Groups
CloudWatch Log Streams
CloudWatch Metric Filters
CloudWatch Custom Metrics
CloudWatch Alarms
AWS Region

Region: ap-south-1

Region Name: Asia Pacific (Mumbai)

Resources Created
1. Lambda Function

Function Name:

centralized-logging-demo

Runtime:

Python 3.14

The Lambda function generates application log messages for testing centralized logging.

2. CloudWatch Log Group

Log Group:

/aws/devops/centralized-logs

Log Class:

Standard

Retention:

1 day
3. CloudWatch Metric Filter

Filter Name:

ProcessingRequestFilter

Filter Pattern:

"Processing request"

The filter searches the centralized log group for log events containing the phrase:

Processing request

Each matching event increases the custom metric by 1.

4. Custom CloudWatch Metric

Metric Namespace:

DevOps/CentralizedLogging

Metric Name:

ProcessingRequestCount

Statistic:

Sum

Period:

1 minute
5. CloudWatch Alarm

Alarm Name:

CentralizedLogging-ProcessingRequest-Alarm

Condition:

ProcessingRequestCount >= 1

Evaluation:

1 datapoint within 1 minute

The alarm successfully entered the In alarm state after the Lambda function generated a matching log event.

Lambda Function Code
import json
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):

    logger.info("Application started successfully")
    logger.info("Centralized logging project is running")
    logger.info("Processing request")

    return {
        "statusCode": 200,
        "body": json.dumps("Centralized logging test successful")
    }
Implementation Steps
Step 1 — Create CloudWatch Log Group

Created the custom CloudWatch Log Group:

/aws/devops/centralized-logs

Configured:

Standard log class
1-day retention
Deletion protection disabled
Step 2 — Create Lambda Function

Created the Lambda function:

centralized-logging-demo

using Python 3.14.

Step 3 — Configure Lambda Logging

Configured Lambda to send its execution logs to:

/aws/devops/centralized-logs

instead of using the default Lambda log group.

Step 4 — Generate Application Logs

The Lambda function was invoked successfully and generated the following log messages:

Application started successfully
Centralized logging project is running
Processing request
Step 5 — Verify CloudWatch Logs

The generated logs were successfully received by the centralized CloudWatch Log Group.

A CloudWatch Log Stream was automatically created for the Lambda execution.

Step 6 — Create Metric Filter

Created the metric filter:

ProcessingRequestFilter

with the filter pattern:

"Processing request"

The filter identifies matching application log events.

Step 7 — Create Custom Metric

Created the custom CloudWatch metric:

DevOps/CentralizedLogging

Metric:

ProcessingRequestCount

Each matching log event increments the metric by 1.

Step 8 — Create CloudWatch Alarm

Created:

CentralizedLogging-ProcessingRequest-Alarm

The alarm condition is:

ProcessingRequestCount >= 1

for:

1 datapoint within 1 minute
Step 9 — Test the Monitoring Workflow

The Lambda function was invoked again to generate a matching log event.

The metric was updated and the CloudWatch alarm successfully transitioned to:

In alarm

This verified the complete logging, metric, and monitoring workflow.

Project Outcome

This project demonstrates how AWS application logs can be centralized, filtered, converted into metrics, and monitored using CloudWatch alarms.

Key concepts demonstrated
Centralized logging
CloudWatch Log Groups
CloudWatch Log Streams
Lambda application logging
Log filtering
Custom CloudWatch metrics
Metric filters
CloudWatch alarms
AWS monitoring and observability
Screenshots
1. CloudWatch Log Group

2. Lambda Test Successful

3. CloudWatch Log Events

4. CloudWatch Metric Filter

5. CloudWatch Alarm

Skills Demonstrated
AWS Lambda
Amazon CloudWatch
CloudWatch Logs
Log Groups
Log Streams
Metric Filters
Custom Metrics
CloudWatch Alarms
AWS Monitoring
AWS Observability
Basic Serverless Architecture