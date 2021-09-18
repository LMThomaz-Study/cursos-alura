class Cliente:
    def __init__(self, nome):
        self.__nome = nome

    @property
    def nome(self):
        return self.__nome.title()

    @nome.setter
    def nome(self, nome):
        print("Nome antigo: {}".format(self.__nome))
        self.__nome = nome


cliente = Cliente("nico padoka")
cliente.nome = "nikito"
print(cliente.nome)
