import requests


def getContent(url: str):
    response = requests.get(url)
    print(response.text)


if __name__ == "__main__":
    URL_BASE = "https://httpbin.org/encoding/utf8"
    getContent(URL_BASE)
