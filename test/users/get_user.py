from requests import get
import json

print(get(f'http://127.0.0.1:5000/user/{1}').json())
print(get(f'http://127.0.0.1:5000/user/{2}').json())
