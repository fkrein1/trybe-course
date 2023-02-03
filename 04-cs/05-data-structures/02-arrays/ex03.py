produtos1 = [1, 3, 1, 1, 2, 3]
produtos2 = [1, 1, 2, 3]


def match_products(products: list[int]) -> int:
    matches = 0
    for i in range(len(products)):
        for n in range(i + 1, len(products)):
            if products[i] == products[n]:
                matches += 1
    print(matches)

match_products(produtos1)
match_products(produtos2)