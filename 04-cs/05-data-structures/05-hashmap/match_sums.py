# Verificar se há pelo menos um par dentro da lista cuja soma é
# igual ao número alvo.

# Complexidade:
# n * n * (3 + 1)
# 4 * n^2
# O(n^2) ou quadrática
def match_sums(numbers, target):
    for i, num1 in enumerate(numbers):  # n vezes
        for j, num2 in enumerate(numbers):  # n vezes
            if num1 + num2 == target and i != j: # 3 operações
                return True  # 1 operação

    return False

# n - 1 +
# n - 2 +
# n - 3 +
# ...
# 1
# 1 + 2 + 3 + ... + (n - 1)
# n * (1 + n - 1) / 2
# n^2 / 2
# 1/2 * n^2
# O(n^2) 
def match_sums2(numbers, target):
    for i, num1 in enumerate(numbers):  
        for j in range(i + 1, len(numbers)):
            num2 = numbers[j]

            if num1 + num2 == target:
                print(f"{num1} + {num2} == {target}")
                return True

    return False

# Complexidade: O(n log n)
def match_sums3(numbers, target): 
    numbers.sort()  # Timsort (merge + insertion): O(n log n)

    left = 0
    right = len(numbers) - 1
    while left < right:  # O(n)
        curr_sum = numbers[left] + numbers[right]

        if curr_sum > target:
            right -= 1
        elif curr_sum < target:
            left += 1
        else:
            print(f"{numbers[left]} + {numbers[right]} == {target}")
            return True

    return False


# Complexidade: O(n)
def match_sums4(numbers, target):
    # seen = [] 
    seen = set()

    for num in numbers:  # n vezes
        complement = target - num
        
        if complement in seen: # O(1)
            print(f"{num} + {complement} == {target}")
            return True
        
        # seen.append(num)  
        seen.add(num) 


if __name__ == "__main__":
    target = 8

    # seen = [2, 3]
    numbers = [2, 3, 5, 3, 6, 2, 4, 3, 5, 2, 5, 4, 7, 8, 5, 3, 5, 3, 2, 5, 7]
    match_sums3(numbers, target)
    