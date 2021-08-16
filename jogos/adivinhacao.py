print('*********************************')
print('Bem vindo no jogo de Adivinhação!')
print('*********************************')

numero_secreto = 18
total_de_tentativas = 3

for rodada in range(1, total_de_tentativas + 1):
  print('Tentativa {} de {}'.format(rodada, total_de_tentativas))
  chute_str = input('Digite o seu número: ') 

  print('Você digitou ', chute_str)

  chute = int(chute_str)

  acertou = chute == numero_secreto
  chuteFoiMaior = chute > numero_secreto
  chuteFoiMenor = chute < numero_secreto

  if acertou:
    print('Você acertou!')
  else:
    if chuteFoiMaior:
      print('Você errou! O seu chute foi maior do que o número secreto.')
    elif chuteFoiMenor:
      print('Você errou! O seu chute foi menor do que o número secreto.')

  rodada = rodada + 1

print('Fim de jogo!')