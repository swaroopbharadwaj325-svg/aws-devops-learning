
import json
import random
import time
from datetime import datetime, timezone

def generate_event():
    return {
        "device_id": f"device-{random.randint(1, 5):03d}",
        "temperature": round(random.uniform(20, 40), 2),
        "humidity": round(random.uniform(30, 80), 2),
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

if __name__ == "__main__":
    print("Generating sample IoT events. Press Ctrl+C to stop.")

    try:
        while True:
            event = generate_event()
            print(json.dumps(event))
            time.sleep(2)
    except KeyboardInterrupt:
        print("\nData producer stopped.")
