def fizz_buzz(number: int):
    list = []
    for value in range(1, number + 1):
        if value % 3 == 0 and value % 5 == 0:
            list.append("FizzBuzz")
        elif value % 3 == 0:
            list.append("Fizz")
        elif value % 5 == 0:
            list.append("Buzz")
        else:
            list.append(value)
    return list


print(fizz_buzz(15))
