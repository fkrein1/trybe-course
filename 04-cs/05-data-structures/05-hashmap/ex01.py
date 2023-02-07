words = ["cat", "bt", "hat", "tree"]
chars = "atach"

char_set = set(chars)
ok_words = set()

for word in words:
    word_set = set(word)
    union_set = char_set & word_set
    if union_set == word_set:
        ok_words.add(word)

print(ok_words)

set_test = set({1, 2, 3, 4, 5, 6})

print(set_test)