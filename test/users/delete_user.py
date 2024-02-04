from requests import delete
import json

print(delete(f'http://127.0.0.1:5000/user/{2}').json())
