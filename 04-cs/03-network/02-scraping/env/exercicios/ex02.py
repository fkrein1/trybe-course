import json

import requests


def getContent(url: str):
    response = requests.get(url).text
    list = json.loads(response)
    for item in list:
        print(f"{item['login']} {item['url']}")


if __name__ == "__main__":
    BASE_URL = "https://api.github.com/users"
    getContent(BASE_URL)
