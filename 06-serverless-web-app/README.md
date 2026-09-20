# Serverless Web Application on AWS

## Project Overview

A serverless web application built using AWS managed services.

The application allows users to authenticate, request a secure file upload URL, upload files to Amazon S3, and store file metadata in Amazon DynamoDB.

This project demonstrates how multiple AWS serverless services can work together to build a secure and scalable application.

## AWS Services Used

- Amazon S3
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- Amazon Cognito
- AWS IAM

## Architecture

```text
                    User
                      |
                      v
              Amazon Cognito
                      |
                Authentication
                      |
                      v
              Frontend Application
                      |
                Authorization
                      |
                      v
              Amazon API Gateway
                      |
                 JWT Authorizer
                      |
                      v
                 AWS Lambda
                 /         \
                /           \
               v             v
        Amazon S3       DynamoDB
       File Storage     File Metadata
