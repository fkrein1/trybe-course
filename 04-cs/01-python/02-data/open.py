file = open("nomes.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.


file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")
print("Túlio 22", file=file)
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]

file.writelines(LINES)
file.close()
