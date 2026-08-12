\# Application Load Balancer - AWS



\## Overview



An Application Load Balancer (ALB) distributes incoming HTTP traffic across multiple EC2 instances.



\## Project Architecture



Internet

&#x20;   |

&#x20;   v

Application Load Balancer

&#x20;   |

&#x20;   v

Target Group

&#x20;   |-----------|

&#x20;   v           v

LB-EC2-01   LB-EC2-02

Server 1    Server 2



\## EC2 Instances



\### LB-EC2-01



\- Web server: Apache

\- Web page: Welcome to Server 1



\### LB-EC2-02



\- Web server: Apache

\- Web page: Welcome to Server 2



\## Target Group



\- Name: LB-Target-Group

\- Target type: Instance

\- Protocol: HTTP

\- Port: 80

\- Health check protocol: HTTP

\- Health check path: /



Both EC2 instances were registered as targets.



\## Target Health



\- LB-EC2-01: Healthy

\- LB-EC2-02: Healthy



\## Application Load Balancer



\- Name: LB-Application-Load-Balancer

\- Type: Application

\- Scheme: Internet-facing

\- IP address type: IPv4

\- Listener: HTTP : 80

\- Availability Zones:

&#x20; - ap-south-1a

&#x20; - ap-south-1b

\- Default action: Forward to LB-Target-Group



\## Testing



The Application Load Balancer DNS name was opened in a web browser.



The website was successfully accessed through the Load Balancer.



Both EC2 instances were healthy and registered in the target group.



\## Key Learning



\- Application Load Balancer distributes incoming traffic.

\- Target Groups contain backend EC2 instances.

\- Health checks determine whether targets are healthy.

\- Listeners receive incoming traffic.

\- The ALB DNS name provides the entry point for users.

\- If one target becomes unhealthy, the ALB can route traffic to the healthy target.

