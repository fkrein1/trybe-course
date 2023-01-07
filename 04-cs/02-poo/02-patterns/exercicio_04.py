from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho:
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, order):
        self._order = order
        self._cartas = [
            Carta(valor, naipe) for naipe in self.naipes for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)


class BaralhoInterable(Iterable):
    def __init__(self, baralho):
        self.baralho = baralho

    def __iter__(self):
        return BaralhoInterator(self.baralho)


class BaralhoInterator(Iterator):
    def __init__(self, baralho: Baralho):
        self.baralho = baralho
        self.pos = 0

    def __next__(self):
      if self.baralho._order == 'asc':
          try:
              carta = self.baralho._cartas[self.pos]
          except:
              raise StopIteration()
          else:
              self.pos += 1
              return carta
              
      if self.baralho._order == 'desc':
          try:
              current_card = len(self.baralho) - self.pos - 1
              carta = self.baralho._cartas[current_card]
          except:
              raise StopIteration()
          else:
              self.pos += 1
              return carta


baralho_interator_asc = BaralhoInterable(Baralho('asc'))
baralho_interator_desc = BaralhoInterable(Baralho('desc'))



for card in baralho_interator_asc:
    print(card)

for card in baralho_interator_desc:
    print(card)