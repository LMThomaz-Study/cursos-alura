def cria_conta(numero, titular, saldo, limite):
  conta = {'numero': numero, 'titular': titular, 'saldo': saldo, 'limite': limite}
  return conta

def deposita(conta, valor):
  conta['saldo'] += valor

def saca(conta, valor):
  conta['saldo'] -= valor

def extrato(conta):
  print('Saldo de {}'.format(conta['saldo']))

conta = cria_conta(123, 'José', 1500.0, 1000.0)
deposita(conta, 500.0)
extrato(conta)

saca(conta, 200.0)
extrato(conta)