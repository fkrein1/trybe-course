file_input = open("ex03.txt", mode="r")
file_output = open("ex03-filter.txt", mode="w")

for line in file_input:
    data = line.split(" ")
    if int(data[1]) < 6:
        file_output.write(f"{data[0]}\n")

file_output.close()
file_input.close()
