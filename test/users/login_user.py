from requests import post
import json

with open("users.json") as json_file:
    data = json.load(json_file)
    user = data['users'][0]
    js = {"username": user["email"], "password": user["password"]}
    js1 = {"username": user["email"], "password": "неправильный пароль"}
    print(post('http://127.0.0.1:5000/login', json=js).json())  # успешная авторизация
    print(post('http://127.0.0.1:5000/login', json=js1).json())  # не успешная авторизация
