cartas1 = [2, 6, 4, 5]
cartas2 = [1, 4, 4, 7, 6, 6]


def shuffle(cards: list[int]) -> list[int]:
    if len(cards) % 2 != 0:
        return print("deck must have even number of cards")
    suffle_deck = []
    slices = int(len(cards) / 2)
    for card in range(slices):
        suffle_deck.extend(cards[::slices])
    print(suffle_deck)


shuffle(cartas1)
shuffle(cartas2)
