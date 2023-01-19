from datetime import date
from time import sleep

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

browser = webdriver.Firefox()
browser.get("https://google.com")

input = browser.find_element(By.TAG_NAME, "input")
input.send_keys("1 dólar")
input.send_keys(Keys.ENTER)
sleep(1)
dolar = browser.find_element(By.CLASS_NAME, "DFlfde.SwHCTb")
value = dolar.get_attribute("data-value")

browser.quit()

with open("exchange.txt", "a") as file:
    text_line = date.today().isoformat() + "|" + value + "\n"
    file.write(text_line)
