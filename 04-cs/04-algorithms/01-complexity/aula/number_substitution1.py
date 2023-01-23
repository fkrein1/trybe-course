# Dada uma lista de números de tamanho `n`, para cada um de seus números, 
# substitua-o pelo maior número possível à sua direita na lista. Por exemplo:
#
# Entrada: [2, 1, 2, 3, 0, 5, 1, 2, 3]
# Saída: [5, 5, 5, 5, 5, 5, 3, 3, 3]

DESCRIPTION = "Dois loops ingênuos"
COMPLEXITY = "O(n^2)"
# Explicação da complexidade:
# n iterações no for externo, e pra cada uma n iterações internas
# = n * n
# = O(n^2)
# Complexidade de espaço: O(1)
def number_substitution(numbers):
    for i, curr in enumerate(numbers):  # n iterações
        right_max = curr
        for j, candidate in enumerate(numbers):  # n iterações
            if j > i and candidate > right_max:
                right_max = candidate

        numbers[i] = right_max

if __name__ == "__main__":
    numbers_list = [2, 1, 2, 3, 0, 5, 1, 2, 3]
    print("Antes", numbers_list)
    number_substitution(numbers_list)
    print("Depois", numbers_list)