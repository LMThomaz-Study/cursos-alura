import random

def jogar():
  print('*********************************')
  print('Bem vindo no jogo de Adivinhação!')
  print('*********************************')

  numero_secreto = random.randrange(1, 101)
  total_de_tentativas = 0
  pontos = 1000

  print('Qual nível de dificuldade?')
  print('(1) Fácil | (2) Médio | (3) Difícil')

  level = int(input('Informe o nível: '))

  if level == 1:
    total_de_tentativas = 20
  elif level == 2:
    total_de_tentativas = 10
  elif level == 3:
    total_de_tentativas = 5

  for rodada in range(1, total_de_tentativas + 1):
    print('Tentativa {} de {}'.format(rodada, total_de_tentativas))
    chute_str = input('Digite um valor entre 1 e 100: ') 

    print('Você digitou ', chute_str)

    chute = int(chute_str)

    if (chute < 1 or chute > 100):
      print('Você deve digitar um número entre 1 e 100')
      continue

    acertou = chute == numero_secreto
    chuteFoiMaior = chute > numero_secreto
    chuteFoiMenor = chute < numero_secreto

    if acertou:
      print('Você acertou e fez  {} pontos!'.format(pontos))
      break
    else:
      if chuteFoiMaior:
        print('Você errou! O seu chute foi maior do que o número secreto.')
      elif chuteFoiMenor:
        print('Você errou! O seu chute foi menor do que o número secreto.')

      pontos_perdidos = abs(numero_secreto - chute)
      pontos = pontos - pontos_perdidos

    rodada = rodada + 1

  print('Fim de jogo!')

if (__name__ == '__main__'):
  jogar()