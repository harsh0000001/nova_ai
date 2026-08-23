import requests

url = "http://127.0.0.1:5000/api/chat"

data = {
    "message": "Hello Nova! Are you working?"
}

response = requests.post(url, json=data)

print("Status:", response.status_code)
print("Response:", response.json())