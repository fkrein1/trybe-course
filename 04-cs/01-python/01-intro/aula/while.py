n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

x = 5
counter = 1
factorial = 1

while counter <= x:
    factorial *= counter
    counter += 1

print(factorial)