import requests
from parsel import Selector


def getContent(url: str):
    response = requests.get(url)
    book = Selector(text=response.text)
    title = book.css("h1::text").get()
    price = book.css(".product_main .price_color::text").get().replace("Â£", "")
    description = book.css("#product_description ~ p::text").get()
    if description.endswith("...more"):
        description = description[: -len("...more")]
    
    image_url = book.css(".item img::attr(src)").get()
    avaliability = book.css(".product_main .availability::text").re_first("\d")
    full_description = f"{title}, {price}, {avaliability}\n{image_url}\n {description}"
    print(full_description)


if __name__ == "__main__":
    BASE_URL = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"

    getContent(BASE_URL)
