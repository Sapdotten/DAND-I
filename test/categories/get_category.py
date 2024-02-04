from requests import post
import json

print(post('http://127.0.0.1:5000//alltime_transactions',
           json={"user_id": 1, "type": "all", "category": "all"}).json())
