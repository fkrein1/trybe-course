import random

word = random.choice(["camiseta", "elefante", "papagaio", "abacaxi", "maracujá"])
scrambled_word = "".join(random.sample(word, len(word)))

for x in range(3):
  guess_word = input(f"Qual é a palavra: {scrambled_word}? ")
  if guess_word == word:
    break

if guess_word == word:
  print(f"Você acertou: {word} ")
else:
  print(f"Você errou, a palavra era: {word}")
  