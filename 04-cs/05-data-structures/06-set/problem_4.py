entrada = {"one": [0, 1, 5, 9, 10], "two": [0, 2, 8, 9, 10]}


def bluff_score(games: dict):

    p1 = calculate_score(set(games["one"]), set(games["two"]))
    p2 = calculate_score(set(games["two"]), set(games["one"]))

    if p1 > p2:
        return "one"
    if p1 < p2:
        return "two"


def calculate_score(guess_one, guess_two):
    unique = guess_one - guess_two
    return max(unique) - min(unique)


print(bluff_score(entrada))
