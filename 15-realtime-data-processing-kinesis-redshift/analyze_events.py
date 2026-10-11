
import json
from pathlib import Path

file_path = Path("iot_events.jsonl")

events = []

with file_path.open("r", encoding="utf-8") as file:
    for line in file:
        if line.strip():
            events.append(json.loads(line))

if not events:
    print("No events found.")
else:
    avg_temp = sum(e["temperature"] for e in events) / len(events)
    avg_humidity = sum(e["humidity"] for e in events) / len(events)
    max_temp = max(e["temperature"] for e in events)

    print("=== IoT Data Analysis ===")
    print(f"Total events: {len(events)}")
    print(f"Average temperature: {avg_temp:.2f} °C")
    print(f"Average humidity: {avg_humidity:.2f}%")
    print(f"Maximum temperature: {max_temp:.2f} °C")
