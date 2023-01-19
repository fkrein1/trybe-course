import pandas as pd
import requests
from bs4 import BeautifulSoup

html_content = requests.get("https://quotes.toscrape.com").text
soup = BeautifulSoup(html_content, "html.parser")

all_quotes = []

quotes = soup.find_all("div", {"class": "quote"})

for quote in quotes:
    text = quote.find("span", class_="text").text
    author = quote.find("small", class_="author").text
    tags = quote.find("div", class_="tags").find_all("a")

    tag_list = [tag.text for tag in tags]
    single_quote = [text, author, tag_list]
    all_quotes.append(single_quote)

df = pd.DataFrame(all_quotes, columns=["quote", "author", "tags"])
df.to_csv("quotes.csv", index=False)
