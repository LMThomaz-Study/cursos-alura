class Funcionario:
    def __init__(self, nome):
        self.nome = nome

    def registrar_horas(self, horas):
        print(f"Horas registradas: {horas}")

    def mostrar_tarefas(self):
        print("Mostrando tarefas")


class Caelum(Funcionario):
    def mostrar_tarefas(self):
        print("Mostrando tarefas do Caelum")

    def busca_cursos_do_mes(self, mes=None):
        print(f"Mostrando cursos do mês {mes}" if mes else "Mostrando cursos do mês")


class Alura(Funcionario):
    # def mostrar_tarefas(self):
    #     print("Mostrando tarefas da Alura")

    def busca_perguntas_sem_resposta(self):
        print("Mostrando perguntas não respondidas do fórum")


class Hipster:
    def __str__(self):
        return f"Hipster, {self.nome}"


class Junior(Alura):
    pass


class Pleno(Alura, Caelum):
    pass


class Senior(Caelum, Alura, Hipster):
    pass


luan = Senior("Luan")
print(luan)

# # MRO
# # Pleno > Alura > Funcionario > Caelum > Funcionario

# Mixins, classes pequenas que é utilizado apenas para herança
