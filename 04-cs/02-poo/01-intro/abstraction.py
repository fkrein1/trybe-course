class Liquidificador:
    def __init__(self, potencia, tensao, preco):
        # publico
        self.preco = preco

        # protegido
        self._potencia = potencia
        self._tensao = tensao

        # privado
        self.__ligado = False
        self.__velocidade = 0
