# Dada uma lista de números de tamanho `n`, para cada um de seus números, 
# substitua-o pelo maior número possível à sua direita na lista. Por exemplo:
#
# Entrada: [2, 1, 2, 3, 0, 5, 1, 2, 3]
# Saída: [5, 5, 5, 5, 5, 5, 3, 3, 3]

DESCRIPTION = "Um loop reverso"
COMPLEXITY = "O(n)"
# Explicação da complexidade:
# 3 + n * 3
# 3*n + 3
# = O(n)
# Complexidade de espaço: O(1)

def number_substitution(numbers):
    if len(numbers) == 0:
        return

    last_pos = len(numbers) - 1
    right_max = numbers[last_pos]
    for i in range(last_pos, -1, -1): # n iterações
        if right_max >= numbers[i]:
            numbers[i] = right_max
        else:
            right_max = numbers[i]

if __name__ == "__main__":
    numbers_list = [2, 1, 2, 3, 0, 5, 1, 2, 3]
    print("Antes", numbers_list)
    number_substitution(numbers_list)
    print("Depois", numbers_list)