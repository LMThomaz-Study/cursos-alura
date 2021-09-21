class Programa:
    def __init__(self, nome, ano):
        self._nome = nome.title()
        self.ano = ano
        self._likes = 0

    @property
    def likes(self):
        return self._likes

    def dar_like(self):
        self._likes += 1

    @property
    def nome(self):
        return self._nome

    @nome.setter
    def nome(self, novo_nome):
        self._nome = novo_nome.title()

    def imprime(self):
        print(f"{self._nome}" f" - {self.ano}" f" - {self._likes} likes")


class Filme(Programa):
    def __init__(self, nome, ano, duracao):
        super().__init__(nome, ano)
        self.duracao = duracao

    def imprime(self):
        print(
            f"{self._nome}"
            f" - {self.ano}"
            f" - {self.duracao} minutos - {self._likes} likes"
        )


class Serie(Programa):
    def __init__(self, nome, ano, temporadas):
        super().__init__(nome, ano)
        self.temporadas = temporadas

    def imprime(self):
        print(
            f"{self._nome}"
            f" - {self.ano}"
            f" - {self.temporadas} temporadas - {self._likes} likes"
        )


vingadores = Filme("vingadores - guerra infinita", 2018, 160)
vingadores.dar_like()


atlanta = Serie("atlanta", 2018, 2)
atlanta.dar_like()
atlanta.dar_like()

filmes_e_series = [vingadores, atlanta]

# for programa in filmes_e_series:
#     programa.imprime()

print(str(456))
