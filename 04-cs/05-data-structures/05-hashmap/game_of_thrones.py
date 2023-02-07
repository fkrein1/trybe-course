# Problema: https://www.hackerrank.com/challenges/game-of-thrones/problem
from collections import Counter

# Complete the 'gameOfThrones' function below:
# Is the string an anagram of a palindrome?

def gameOfThrones(s):
    counter = Counter(s)

    has_odd = False
    for n in counter.values():
        if n % 2 == 0:
            continue
        else:
            if has_odd:
                return "NO"

            has_odd = True

    return "YES"
