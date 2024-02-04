from requests import post
import json

with open("users.json") as json_file:
    data = json.load(json_file)
    for user in data["users"]:
        print(post('http://127.0.0.1:5000/register', json=user).json())
