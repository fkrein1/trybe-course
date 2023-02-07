# Dada uma string, ache o tamanho da maior substring que não tenha caracteres repetidos. Complexidade de tempo limite aceitável: O(n²).

string = "serdevemuitolegalmasehprecisoestudarbastante"

def biggest_unique_string(string):
    string_set = set()
    unique_strings = []
    unique_string = ''

    for char in string:
        if char in string_set:
          unique_strings.append(unique_string)
          unique_string = ''
          string_set.clear()
        if char not in string_set:
          unique_string += char
          string_set.add(char)
    
    unique_strings.append(unique_string)

    return max(unique_strings, key=len)

print(biggest_unique_string(string))

