# Problema: https://www.hackerrank.com/challenges/word-order/problem


def count_words(words):
    word_count = {}

    for word in words:
        if (
            word in word_count
        ):  # E a complexidade? Em dicionários e sets (hashtables) a complexidade da busca é O(1)
            word_count[word] += 1
        else:
            word_count[word] = 1

    return word_count
