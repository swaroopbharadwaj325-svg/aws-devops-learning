\# Data Lake Implementation using AWS Glue and Athena



\## Project Overview



This project demonstrates how to build a simple data lake on Amazon S3, catalog the data using AWS Glue, and analyze the data using Amazon Athena.



The project uses a CSV dataset containing customer order information. AWS Glue automatically discovers the schema and creates a table in the Glue Data Catalog. Athena is then used to run SQL queries against the data stored in Amazon S3.



\## AWS Services Used



\- Amazon S3

\- AWS Glue

\- AWS Glue Data Catalog

\- Amazon Athena

\- AWS IAM



\## Architecture



```text

CSV Dataset

&#x20;    |

&#x20;    v

Amazon S3

(raw-data/)

&#x20;    |

&#x20;    v

AWS Glue Crawler

&#x20;    |

&#x20;    v

Glue Data Catalog

(raw\_data table)

&#x20;    |

&#x20;    v

Amazon Athena

&#x20;    |

&#x20;    v

SQL Analysis \& Results













AWS Region



Asia Pacific (Mumbai) — ap-south-1



S3 Configuration



Bucket:



swaroop-data-lake-2026



Folders:



raw-data/

processed-data/

athena-results/



The orders.csv dataset was uploaded to the raw-data/ folder.



Sample Dataset



The dataset contains the following columns:



order\_id

customer\_name

product

amount

city

AWS Glue Configuration

Glue Database



swaroop\_data\_lake



Glue Crawler



swaroop-data-lake-crawler



IAM Role



AWSGlueServiceRole-SwaroopDataLake



The crawler scans:



s3://swaroop-data-lake-2026/raw-data/



The crawler successfully discovered the CSV schema and created the raw\_data table in the Glue Data Catalog.



Glue Table Schema

Column	Data Type

order\_id	bigint

customer\_name	string

product	string

amount	bigint

city	string

Amazon Athena



Athena was configured to store query results in:



s3://swaroop-data-lake-2026/athena-results/



Query 1 — View all orders

SELECT \*

FROM raw\_data;



The query successfully returned all 5 records.



Query 2 — Calculate total sales

SELECT SUM(amount) AS total\_sales

FROM raw\_data;



Result:



103000



Query 3 — Sales by city

SELECT city, SUM(amount) AS total\_sales

FROM raw\_data

GROUP BY city

ORDER BY total\_sales DESC;

Results

City	Total Sales

Mumbai	55000

Bengaluru	25000

Hyderabad	15000

Chennai	5000

Pune	3000

Screenshots

1\. S3 Bucket and Folders



2\. Orders CSV Uploaded



3\. Glue Database Created



4\. Glue Crawler Created



5\. Glue Crawler Completed



6\. Glue Table Schema



7\. Athena Query Editor



8\. Athena SELECT Results



9\. Athena Total Sales Query



10\. Athena GROUP BY Query



11\. Athena Sales by City Results



Skills Demonstrated

Amazon S3 data lake fundamentals

AWS Glue Crawlers

AWS Glue Data Catalog

IAM role configuration

Amazon Athena

SQL data analysis

S3 data organization

Serverless data querying

Basic data lake architecture

Project Outcome



Successfully implemented a basic AWS data lake using Amazon S3 and AWS Glue, and analyzed the stored data using Amazon Athena.



The project demonstrates the complete flow:



S3 → Glue Crawler → Glue Data Catalog → Athena → SQL Analytics

