numbers = input("Escreva números inteiros separados por espaço")

list_of_numbers = numbers.split(" ")

total = 0

for number in list_of_numbers:
    if not number.isdigit():
        print(f"Erro ao somar valores, {number} não é um dígito.")
    else:
        total += int(number)

print(total)
