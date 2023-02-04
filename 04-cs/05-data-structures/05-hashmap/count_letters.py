str1 = "bbbbaaaacccaaaaaaddddddddccccccc"
str2 = "coxinha"


def string_to_dict(string):
    letters = {}
    for char in string:
        if char in letters:
            letters[char] += 1
        else:
            letters[char] = 1
    print(letters)


string_to_dict(str1)
string_to_dict(str2)
