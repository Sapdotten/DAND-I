from requests import post
import json

print(post('http://127.0.0.1:5000/get_categories', json={"user_id": None}).json())
print(post('http://127.0.0.1:5000/get_categories', json={"user_id": 1}).json())
