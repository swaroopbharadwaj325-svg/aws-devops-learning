\# Auto Scaling - AWS EC2



\## Overview



Amazon EC2 Auto Scaling automatically launches or terminates EC2 instances based on application demand.



In this project, an Auto Scaling Group (ASG) was created and integrated with an Application Load Balancer.



\## Architecture



Internet

&#x20;  |

&#x20;  v

Application Load Balancer

&#x20;  |

&#x20;  v

Target Group

&#x20;  |

&#x20;  +----------------+

&#x20;  |                |

&#x20;  v                v

EC2 Instance 1   EC2 Instance 2

&#x20;  ^                ^

&#x20;  |                |

&#x20;  +------- ASG ----+



\## Auto Scaling Group Configuration



\- Auto Scaling Group Name: LB-Auto-Scaling-Group

\- Launch Template: LB-ASG-Launch-Template

\- Instance Type: t3.micro

\- VPC: vpc-087de0e688bef5120

\- Availability Zones:

&#x20; - ap-south-1a

&#x20; - ap-south-1b

\- Desired Capacity: 2

\- Minimum Capacity: 2

\- Maximum Capacity: 4

\- Purchase Option: 100% On-Demand



\## Launch Template



The launch template contains the configuration required to launch EC2 instances.



Launch Template:



LB-ASG-Launch-Template



It is used by the Auto Scaling Group to automatically create new EC2 instances.



\## Load Balancer Integration



The Auto Scaling Group was attached to the existing Application Load Balancer.



Load Balancer:



LB-Application-Load-Balancer



Target Group:



LB-Target-Group



Traffic flow:



Internet

&#x20;  |

&#x20;  v

Application Load Balancer

&#x20;  |

&#x20;  v

LB-Target-Group

&#x20;  |

&#x20;  v

EC2 instances managed by Auto Scaling Group



\## Health Checks



The Auto Scaling Group uses:



\- EC2 health checks

\- Elastic Load Balancing health checks



Health check grace period:



300 seconds



If an instance becomes unhealthy, Auto Scaling can replace it.



\## Target Tracking Scaling Policy



A dynamic scaling policy was created using target tracking.



Policy Name:



CPU-Target-Tracking-50



Metric:



Average CPU Utilization



Target:



50%



Instance Warmup:



300 seconds



Scale In:



Enabled



\## How Automatic Scaling Works



When CPU utilization increases:



CPU increases

&#x20;   |

&#x20;   v

CloudWatch monitors CPU

&#x20;   |

&#x20;   v

Target tracking policy detects increased utilization

&#x20;   |

&#x20;   v

Auto Scaling launches another EC2 instance

&#x20;   |

&#x20;   v

Load Balancer sends traffic to healthy instances



The Auto Scaling Group can increase the number of instances up to the maximum capacity of 4.



When CPU utilization decreases, Auto Scaling can terminate unnecessary instances, but it will not normally go below the minimum capacity of 2.



\## Final Configuration



| Setting | Value |

|---|---|

| ASG Name | LB-Auto-Scaling-Group |

| Launch Template | LB-ASG-Launch-Template |

| Instance Type | t3.micro |

| Desired Capacity | 2 |

| Minimum Capacity | 2 |

| Maximum Capacity | 4 |

| Load Balancer | LB-Application-Load-Balancer |

| Target Group | LB-Target-Group |

| Health Checks | EC2 + ELB |

| Target CPU | 50% |

| Warmup | 300 seconds |

| Scale In | Enabled |



\## Practical Result



The Auto Scaling Group successfully launched 2 EC2 instances automatically.



Both instances became healthy behind the Application Load Balancer.



The browser displayed the web page served by the automatically launched EC2 instance.



\## Screenshots



\### Launch Template



!\[Launch Template](screenshots/04-asg-launch-template.png)



\### Auto Scaling Group Created



!\[Auto Scaling Group](screenshots/04-asg-created.png)



\### Target Tracking Scaling Policy



!\[Scaling Policy](screenshots/04-asg-scaling-policy.png)

