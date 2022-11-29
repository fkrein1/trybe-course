# ex01
def greater_number(a, b):
    return max(a, b)


print(greater_number(5, 2))

# ex02
def average_in_list(list: list):
    return sum(list) / len(list)


print(average_in_list([2, 31, 2, 11, 12, 99]))

# ex03
def print_stars(num):
    for n in range(num):
        print("*" * num)


print_stars(5)

# ex04
def greatest_string(names: list):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(greatest_string(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

# ex05
import math


def necessary_paint(m2):
    cans = math.ceil(m2 / (18 * 3))
    return (cans, cans * 80)


print(necessary_paint(55))

# ex06


def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 and side2 + side3 > side1 and side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


# ex01 bonus
def smallest_number(numbers: list):
    return min(numbers)


print(smallest_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))

# ex02 bonus


def print_triangle_stars(num):
    for n in range(1, num + 1):
        print("*" * n)


print_triangle_stars(5)

# ex03 bonus


def sum_to_number(num: int):
    total = 0
    for n in range(1, num + 1):
        total += n
    return total


print(sum_to_number(5))


# ex04 bonus


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total
