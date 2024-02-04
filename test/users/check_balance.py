from requests import post
import json

print(post(f'http://127.0.0.1:5000/balance', json={"user_id": 1}).json())
print(post(f'http://127.0.0.1:5000/set_balance', json={"user_id": 1, "balance": 40}).json())
print(post(f'http://127.0.0.1:5000/balance', json={"user_id": 1}).json())
