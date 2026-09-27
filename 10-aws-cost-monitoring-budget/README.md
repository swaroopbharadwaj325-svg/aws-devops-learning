# AWS Cost Monitoring & Budget Alerts

## 📌 Project Overview

This project demonstrates how to monitor AWS cloud spending using **AWS Budgets** and **AWS Cost Explorer**.

A monthly AWS budget was created with a defined spending limit and email notifications were configured for different cost thresholds.

The project also uses AWS Cost Explorer to analyze AWS spending by service.

---

## 🎯 Project Objectives

- Monitor AWS account spending
- Create a monthly AWS cost budget
- Configure cost threshold alerts
- Receive email notifications when spending approaches the budget
- Monitor forecasted AWS costs
- Analyze AWS spending using Cost Explorer
- Understand AWS cost management and budgeting

---

## ☁️ AWS Services Used

- **AWS Budgets**
- **AWS Cost Explorer**
- **AWS Billing and Cost Management**

---

## 🏗️ Architecture

```text
              AWS Account
                   |
                   v
       AWS Billing & Cost Management
                   |
          +--------+--------+
          |                 |
          v                 v
    AWS Budgets        Cost Explorer
          |                 |
          v                 v
   Monthly Budget       Cost Analysis
       $5.00            By Service
          |
     +----+----+
     |         |
     v         v
   85%       100%
  Actual    Forecasted
     |         |
     +----+----+
          |
          v
    Email Notification




    ⚙️ Project Configuration
Monthly Budget
Configuration	Value
Budget Name	AWS-Monthly-Cost-Budget
Budget Type	Cost Budget
Budget Amount	$5.00
Period	Monthly
Start Date	September 2026
Currency	USD
🔔 Budget Alerts

Three alerts were configured.

Alert 1 — Actual Cost
Threshold: 85%
Amount: $4.25
Trigger: Actual cost
Notification: Email
Alert 2 — Forecasted Cost
Threshold: 100%
Amount: $5.00
Trigger: Forecasted cost
Notification: Email
Alert 3 — Actual Cost
Threshold: 100%
Amount: $5.00
Trigger: Actual cost
Notification: Email

No automatic budget actions were configured. This prevents AWS resources such as EC2 instances from being automatically stopped.

📊 Cost Monitoring

AWS Cost Explorer was used to analyze account-level AWS costs.

Cost Explorer Configuration
Time Range: Last 6 months
Granularity: Monthly
Group By: Service
Cost Type: Unblended Cost

Cost Explorer provides visibility into spending across AWS services.

📸 Screenshots
1. Budget Created

The AWS monthly cost budget was successfully created with a budget limit of $5.00.

2. Budget Alerts

Three cost alerts were configured for actual and forecasted spending.

3. Email Notifications

Email notifications were configured for all three budget alerts.

4. Cost Explorer

AWS Cost Explorer was used to analyze monthly AWS costs grouped by service.

🔄 How It Works
Create an AWS monthly cost budget.
Set the monthly budget limit to $5.
Configure an 85% actual-cost alert.
Configure a 100% forecasted-cost alert.
Configure a 100% actual-cost alert.
Add email notifications.
Use Cost Explorer to analyze AWS spending.
Monitor the budget throughout the billing period.
🧪 Project Result

The AWS cost monitoring system was successfully configured.

Current budget configuration:

Budget: $5.00/month
Current spending: $1.27
Current budget usage: 25.42%
Forecasted spending: $1.61
Forecasted budget usage: 32.16%
Budget health: Healthy

All configured alert thresholds were currently not exceeded.

💡 Key Learnings
Understanding AWS Billing and Cost Management
Creating AWS Budgets
Configuring actual-cost alerts
Configuring forecasted-cost alerts
Setting up email notifications
Using AWS Cost Explorer
Monitoring AWS service-level spending
Understanding budget thresholds
Understanding the difference between actual and forecasted costs
Practicing AWS cost-control techniques