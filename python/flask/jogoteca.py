from flask import Flask, render_template, request, redirect, session, flash, url_for

app = Flask(__name__)
app.secret_key = "jogoteca"


class Jogo:
    def __init__(self, nome, categoria, console):
        self.nome = nome
        self.categoria = categoria
        self.console = console


class Usuario:
    def __init__(self, id, nome, senha):
        self.id = id
        self.nome = nome
        self.senha = senha


usuario1 = Usuario("jose", "jose", "jose")
usuario2 = Usuario("maria", "maria", "maria")
usuario3 = Usuario("joao", "joao", "joao")
usuarios = {usuario1.id: usuario1, usuario2.id: usuario2, usuario3.id: usuario3}

jogo1 = Jogo("super mario", "Ação", "SNES")
jogo2 = Jogo("Pokemon Gold", "RPG", "GBA")
jogo3 = Jogo("Mortal Kombat", "Luta", "SNES")
lista_jogos = [jogo1, jogo2, jogo3]


@app.route("/")
def hello():
    return render_template("lista.html", titulo="Jogos", jogos=lista_jogos)


@app.route("/novo")
def novo():
    if "usuario_logado" not in session or session["usuario_logado"] == None:
        return redirect(url_for("login", proxima=url_for("novo")))
    return render_template("novo.html", titulo="Novo Jogo")


@app.route("/criar", methods=["POST"])
def criar():
    nome = request.form["nome"]
    categoria = request.form["categoria"]
    console = request.form["console"]
    jogo = Jogo(nome, categoria, console)
    lista_jogos.append(jogo)
    return redirect(url_for("hello"))


@app.route("/login")
def login():
    proxima = request.args.get("proxima")
    return render_template("login.html", proxima=proxima)


@app.route("/autenticar", methods=["POST"])
def autenticar():
    if request.form["usuario"] in usuarios:
        usuario = usuarios[request.form["usuario"]]

        if usuario.senha == request.form["senha"]:
            session["usuario_logado"] = usuario.id
            flash(usuario.nome + " logou com sucesso!")
            proxima_pagina = request.form["proxima"]
            return redirect(proxima_pagina)
    else:
        flash("Não logado, tente novamente!")
        return redirect(url_for("login"))


@app.route("/logout")
def logout():
    session["usuario_logado"] = None
    flash("Nenhum usuário logado!")
    return redirect(url_for("hello"))


app.run(debug=True)
