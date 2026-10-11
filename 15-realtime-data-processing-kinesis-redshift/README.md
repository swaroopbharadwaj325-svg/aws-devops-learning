

\# Project 15: Real-Time Data Processing with Kinesis and Redshift



\## Project Overview

This project demonstrates an IoT real-time data processing workflow using Python. A local simulation generates sensor events, stores them in JSON Lines format, and analyzes temperature and humidity data.



\*\*Note:\*\* Amazon Kinesis Data Streams and Amazon Redshift integration are pending. The current implementation runs locally without creating AWS resources.



\## Technologies Used

\- Python

\- AWS CLI

\- Boto3

\- Amazon Kinesis Data Streams (planned)

\- Amazon Redshift (planned)

\- JSON Lines



\## Project Structure

```text

15-realtime-data-processing-kinesis-redshift/

├── producer.py

├── local\_consumer.py

├── analyze\_events.py

├── iot\_events.jsonl

└── README.md

```



\## Implemented Features

1\. Generated sample IoT sensor events using Python.

2\. Simulated local event processing.

3\. Stored events in `iot\_events.jsonl`.

4\. Calculated total events, average temperature, average humidity, and maximum temperature.



\## How to Run



\### 1. Generate sample events

```powershell

python .\\producer.py

```



Stop with `Ctrl+C`.



\### 2. Run the local consumer

```powershell

python .\\local\_consumer.py

```



Stop with `Ctrl+C`.



\### 3. Analyze the saved events

```powershell

python .\\analyze\_events.py

```



\## Sample Analysis Output

```text

Total events: 2

Average temperature: 28.50 °C

Average humidity: 60.20%

Maximum temperature: 28.50 °C

```



\## Future Enhancements

\- Integrate Amazon Kinesis Data Streams.

\- Process incoming events through a streaming consumer.

\- Store processed data in Amazon Redshift.

\- Add error handling, monitoring, and automated testing.



\## Project Status

Local simulation and basic data analysis completed. AWS streaming and data warehouse integration pending.



