from requests import post
import json

with open("transactions.json") as json_file:
    data = json.load(json_file)
    for trans in data["transactions"]:
        print(post('http://127.0.0.1:5000/add_transactions', json=trans).json())
