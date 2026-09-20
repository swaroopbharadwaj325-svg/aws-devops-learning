# Serverless Web Application on AWS

## Project Overview

A serverless web application built using AWS managed services.

The application will allow users to authenticate, upload files, and store file metadata using AWS serverless services.

## AWS Services Used

- Amazon S3
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Amazon Cognito

## Architecture

User  
↓  
Amazon Cognito  
↓  
Amazon S3 / API Gateway  
↓  
AWS Lambda  
↓  
Amazon DynamoDB

## Project Goals

- Host the frontend using Amazon S3
- Implement user authentication using Amazon Cognito
- Create serverless backend APIs using API Gateway and Lambda
- Store uploaded files in Amazon S3
- Store file metadata in DynamoDB
- Understand serverless AWS architecture

## AWS Region

**Asia Pacific (Mumbai)**

Region: `ap-south-1`

## Current Progress

- [x] Created S3 bucket
- [x] Created frontend
- [x] Created DynamoDB table
- [x] Created Lambda function
- [x] Created API Gateway
- [x] Configured Cognito
- [x] Configured JWT authorization
- [x] Integrated services
- [x] Tested authentication
- [x] Tested file upload
- [x] Verified S3 object
- [x] Verified DynamoDB metadata
- [x] Documented final architecture



## Application Flow

1. User opens the frontend application.
2. User logs in using Amazon Cognito.
3. Cognito authenticates the user.
4. The frontend sends the authentication token to API Gateway.
5. API Gateway validates the JWT token.
6. API Gateway invokes AWS Lambda.
7. Lambda generates a pre-signed S3 upload URL.
8. Lambda stores file metadata in DynamoDB.
9. The frontend uploads the file directly to Amazon S3.
10. The uploaded file and metadata are verified.

## Security

- Amazon Cognito is used for authentication.
- API Gateway uses a JWT authorizer.
- The `/files` API requires authentication.
- The S3 bucket remains private.
- Files are uploaded using temporary pre-signed URLs.
- Lambda uses IAM permissions for the required AWS resources.

## S3 Bucket

**Bucket Name:** `swaroop-serverless-app-2026`

**Region:** `ap-south-1`

## Project Structure

```text
06-serverless-web-app/
├── README.md
├── frontend/
└── screenshots/