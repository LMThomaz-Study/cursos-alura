class Conta:
  def __init__(self, numero, titular, saldo, limite):
    self.numero = numero
    self.titular = titular
    self.saldo = saldo
    self.limite = limite
    print('Conta criada - {}'.format(self))


conta = Conta(123, 'Pedro', 100.0, 1000.0)