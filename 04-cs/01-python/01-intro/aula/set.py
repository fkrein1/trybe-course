permissions = {
    "member",
    "group",
}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add(
    "member"
)  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection(
    {"user", "member"}
)  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

var = set()
var.add("Felipe")
print(var)

frozen_permissions = frozenset(
    ["member", "group"]
)  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

frozen_permissions.union(
    {"user"}
)  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

frozen_permissions.intersection(
    {"user", "member"}
)  # retorna um conjunto resultante da intersecção dos conjuntos

frozen_permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
