class Ventilador:
    def __init__(self, price, color):
        self.price = price
        self.color = color


ventilador_grande = Ventilador(200, "white")
ventilador_pequeno = Ventilador(50, "white")


class Pessoa:
    def __init__(self, balance):
        self.__balance = balance
        self.items = 0

    @property
    def balance(self):
        return self.__balance

    def buy_item(self, item):
        if item.price < self.__balance:
            self.items += 1
            self.__balance -= item.price


joao = Pessoa(300)

joao.buy_item(ventilador_grande)

print(joao.items)
print(joao.balance)

joao.buy_item(ventilador_pequeno)

print(joao.items)
print(joao.balance)

joao.buy_item(ventilador_grande)

print(joao.items)
print(joao.balance)

print(joao.__balance)