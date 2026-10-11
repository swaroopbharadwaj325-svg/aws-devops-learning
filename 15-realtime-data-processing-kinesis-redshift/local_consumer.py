
import json
import time
from pathlib import Path

output_file = Path("iot_events.jsonl")

print("Local streaming consumer started. Press Ctrl+C to stop.")

try:
    while True:
        event = {
            "device_id": "device-001",
            "temperature": 28.5,
            "humidity": 60.2,
            "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
        }

        with output_file.open("a", encoding="utf-8") as file:
            file.write(json.dumps(event) + "\n")

        print("Processed:", json.dumps(event))
        time.sleep(2)

except KeyboardInterrupt:
    print("\nLocal consumer stopped.")
