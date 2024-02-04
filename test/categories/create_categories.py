from requests import post
import json

with open("categories.json") as json_file:
    data = json.load(json_file)
    for category in data["categories"]:
        print(post('http://127.0.0.1:5000/add_category', json=category).json())
