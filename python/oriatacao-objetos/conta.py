class Conta:
  def __init__(self, numero, titular, saldo, limite):
    print('Conta criada - {}'.format(self))
    self.numero = numero
    self.titular = titular
    self.saldo = saldo
    self.limite = limite
    
  def extrato(self):
    print('Saldo de {} do titular {}'.format(self.saldo, self.titular))
    
  def depositar(self, valor):
    self.saldo += valor
    
  def sacar(self, valor):
    self.saldo -= valor


conta = Conta(123, 'Pedro', 100.0, 1000.0)
print(conta.titular)
conta.depositar(100.0)
conta.extrato()
conta.sacar(50.0)
conta.extrato()