my_set = {1, 2, 3, 3, 4}
# print("🙉 this is set()")

haystack = {number for number in range(1000)}
needles = {14, 571}
found = len(needles & haystack)
print(found)

# sem usar intersecção
found = 0
for n in needles:
    if n in haystack:
        found += 1
