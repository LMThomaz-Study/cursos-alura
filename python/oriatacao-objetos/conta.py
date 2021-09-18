class Conta:
  def __init__(self, numero, titular, saldo, limite):
    print('Conta criada - {}'.format(self))
    self.__numero = numero
    self.__titular = titular
    self.__saldo = saldo
    self.__limite = limite
    
  def extrato(self):
    print('Saldo de {} do titular {}'.format(self.__saldo, self.__titular))
    
  def depositar(self, valor):
    self.__saldo += valor
    
  def sacar(self, valor):
    self.__saldo -= valor


conta = Conta(123, 'Pedro', 100.0, 1000.0)

conta.depositar(100.0)
conta.extrato()
conta.sacar(50.0)
conta.extrato()