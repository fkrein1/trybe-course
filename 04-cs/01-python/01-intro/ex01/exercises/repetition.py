def append_each_letter_of_the_word_in_a_list(word):
    return [letter for letter in word]


def return_index_of_the_uppercase_letter(word: str):
    for letter in enumerate(word):
        if letter[1] == letter[1].upper():
            return letter[0]


def return_element_from_list_that_is_string(input_list):
    for item in input_list:
        if type(item) is str:
            return item
