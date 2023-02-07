""""
Problema - Qual é a fila?

[ATENDIMENTO]
P1: Débora
P2: Juliana
P3: Severo
P4: Matheus
P5: Cássius
P6: Paulo
P7: Imar
P8: Denis
"""


def get_order(orders: list[tuple[str, str]]) -> list[str]:
    orders_map = {pair[0]: pair[1] for pair in orders}  # O(n)
    inv_orders_map = {pair[1]: pair[0] for pair in orders}  # O(n)

    next_in_line = ""
    for person in orders_map:  # total do for: O(n)
        if person not in inv_orders_map:  # O(1)
            next_in_line = person

    result = [next_in_line]
    while next_in_line in orders_map:  # O(n)
        result.append(orders_map[next_in_line])  # O(1)
        next_in_line = orders_map[next_in_line]  # O(1)

    return result


def test_get_order():
    orders = [
        ("fernanda", "rafa"),
        ("fran", "daniel"),
        ("mirian", "gabriel"),
        ("matheus", "yasmin"),
        ("giovanni", "fernanda"),
        ("rafa", "fran"),
        ("daniel", "mirian"),
        ("gabriel", "matheus"),
    ]

    assert get_order(orders) == [
        "giovanni",
        "fernanda",
        "rafa",
        "fran",
        "daniel",
        "mirian",
        "gabriel",
        "matheus",
        "yasmin",
    ]
    print(get_order(orders))
