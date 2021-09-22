class Funcionario:
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
    def mostrar_tarefas(self):
        print("Mostrando tarefas da Alura")

    def busca_perguntas_sem_resposta(self):
        print("Mostrando perguntas não respondidas do fórum")


class Junior(Alura):
    pass


class Pleno(Alura, Caelum):
    pass


jose = Junior()
jose.busca_perguntas_sem_resposta()
jose.mostrar_tarefas()

luan = Pleno()
luan.busca_perguntas_sem_resposta()
luan.busca_cursos_do_mes()
luan.mostrar_tarefas()
