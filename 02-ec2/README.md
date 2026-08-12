# EC2 - Amazon Elastic Compute Cloud

## Overview

Amazon EC2 (Elastic Compute Cloud) is an AWS service that provides resizable virtual servers in the cloud.

## EC2 Instance Configuration

- Instance Name: DevOps-EC2-01
- AMI: Amazon Linux 2023
- Instance Type: t3.micro
- Availability Zone: ap-south-1b
- Storage: 8 GiB gp3
- Public IP: Enabled
- Security Group: DevOps-EC2-SG

## Security Group

| Type | Protocol | Port | Source |
|---|---|---:|---|
| SSH | TCP | 22 | My IP |
| HTTP | TCP | 80 | Anywhere IPv4 |

SSH is restricted to my IP address, while HTTP is allowed from the internet so the web server can be accessed.

## Connecting to EC2

The instance was accessed using EC2 Instance Connect.

## Installing Apache

Apache HTTP Server was installed using:

```bash
sudo dnf update -y
sudo dnf install httpd -y

Apache was enabled and started using:

sudo systemctl enable httpd
sudo systemctl start httpd

Apache status was verified using:

sudo systemctl status httpd
Deploying HTML Website

The website was created at:

/var/www/html/index.html

The HTML file was created using:

sudo nano /var/www/html/index.html

After creating the webpage, Apache was restarted:

sudo systemctl restart httpd

The website was accessed through the EC2 public IP using HTTP.