from flask import Flask, render_template

app = Flask(__name__)


class Jogo:
    def __init__(self, nome, categoria, console):
        self.nome = nome
        self.categoria = categoria
        self.console = console


@app.route("/inicio")
def hello():
    jogo1 = Jogo("super mario", "Ação", "SNES")
    jogo2 = Jogo("Pokemon Gold", "RPG", "GBA")
    jogo3 = Jogo("Mortal Kombat", "Luta", "SNES")
    lista_jogos = [jogo1, jogo2, jogo3]
    return render_template("lista.html", titulo="Jogos", jogos=lista_jogos)


@app.route("/novo")
def novo():
    return render_template("novo.html", titulo="Novo Jogo")


app.run()
