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
- [ ] Create frontend
- [ ] Create DynamoDB table
- [ ] Create Lambda function
- [ ] Create API Gateway
- [ ] Configure Cognito
- [ ] Integrate services
- [ ] Test application
- [ ] Document final architecture

## S3 Bucket

**Bucket Name:** `swaroop-serverless-app-2026`

**Region:** `ap-south-1`

## Project Structure

```text
06-serverless-web-app/
├── README.md
├── frontend/
└── screenshots/