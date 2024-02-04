from requests import post
import json

print(post('http://127.0.0.1:5000//alltime_transactions',
           json={"email": "mail@mail.com", "type": "all", "category": "all"}).json())
