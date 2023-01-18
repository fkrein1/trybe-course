import requests


def getContent(url: str, header: str):
    response = requests.get(url, headers=header)
    print(response.text)


if __name__ == "__main__":
    BASE_URL = "https://www.scrapethissite.com/pages/advanced/?gotcha=headers"
    header={"User-agent": "Mozilla", "Accept": "text/html"}

    getContent(BASE_URL, header)
