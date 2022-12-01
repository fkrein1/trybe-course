# with open("words.txt", "r") as file:
#   words = [word for word in file]

# with open("new_words.txt", "w") as new_file:
#     for word in words:
#       if len(word) > 6:
#         new_file.writelines(word)

import random

def random_word():
  with open("new_words.txt", "r") as words:
    random_word = random.choice([word for word in words]).replace("\n", "")
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    return random_word, scrambled_word


word, scrambled_word = random_word()
for x in range(3):
  guess_word = input(f"Qual é a palavra: {scrambled_word}? ")
  if guess_word == word:
    break

if guess_word == word:
  print(f"Você acertou: {word} ")
else:
  print(f"Você errou, a palavra era: {word}")
  