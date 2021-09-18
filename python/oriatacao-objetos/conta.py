class Conta:
    def __init__(self, numero, titular, saldo, limite):
        self.__numero = numero
        self.__titular = titular
        self.__saldo = saldo
        self.__limite = limite

    def extrato(self):
        print("Saldo de {} do titular {}".format(self.__saldo, self.__titular))

    def depositar(self, valor):
        self.__saldo += valor

    def sacar(self, valor):
        self.__saldo -= valor

    def transferir(self, valor, destino):
        self.sacar(valor)
        destino.depositar(valor)
        pass

    def eh_inadiplente(self, cliente):
        pass


conta = Conta(123, "Pedro", 100.0, 1000.0)
conta2 = Conta(456, "Johns", 100.0, 1000.0)

conta.transferir(10.0, conta2)
conta.extrato()
conta2.extrato()
