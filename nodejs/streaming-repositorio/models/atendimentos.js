const axios = require('axios');
const moment = require('moment');
const conexao = require('../infra/database/conexao');
const repositorio = require('../repositorios/atendimento');

class Atendimento {
  constructor() {
    this.dataEhValida = ({ data, dataCriacao }) =>
      moment(data.split(' ')[0]).isSameOrAfter(dataCriacao.split(' ')[0]);
    this.clienteEhValido = (cliente) => cliente.length >= 5;

    this.valida = (parametros) =>
      this.validacoes.filter((campo) => {
        const { nome } = campo;
        const parametro = parametros[nome];

        return !campo.valido(parametro);
      });

    this.validacoes = [
      {
        nome: 'data',
        valido: this.dataEhValida,
        mensagem: 'Data deve ser maior ou igual a data atual',
      },
      {
        nome: 'cliente',
        valido: this.clienteEhValido,
        mensagem: 'Cliente deve ter pelo menos 5 caracteres',
      },
    ];
  }

  async adicionar(atendimento) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:MM:SS',
    );

    const parametros = {
      data: { data, dataCriacao },
      cliente: atendimento.cliente,
    };

    const erros = this.valida(parametros);
    const existemErros = erros.length > 0;

    console.log(erros);

    if (existemErros) return new Promise((resolve, reject) => reject(erros));

    const atendimentoTratado = { dataCriacao, ...atendimento, data };

    return repositorio.adicionar(atendimentoTratado).then((resultado) => {
      return { ...atendimentoTratado, id: resultado.insertId };
    });
  }

  listar() {
    return repositorio.listar();
  }

  buscar(id, res) {
    const sql = 'SELECT * FROM Atendimentos WHERE id = ?';

    conexao.query(sql, id, async (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
        return;
      }

      const atendimento = resultado[0];
      const cpf = atendimento.cliente;

      const { data } = await axios.get(`http://localhost:8082/${cpf}`);
      atendimento.cliente = data;

      return res.status(200).json(atendimento);
    });
  }

  alterar(id, valores, res) {
    if (valores.data) {
      valores.data = moment(valores.data, 'DD/MM/YYYY').format(
        'YYYY-MM-DD HH:MM:SS',
      );
    }

    const sql = 'UPDATE Atendimentos SET ? WHERE id = ?';

    conexao.query(sql, [valores, id], (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
        return;
      }

      return res.status(200).json(resultado);
    });
  }

  deletar(id, res) {
    const sql = 'DELETE FROM Atendimentos WHERE id = ?';

    conexao.query(sql, id, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
        return;
      }

      return res.status(200).json({ id });
    });
  }
}

module.exports = new Atendimento();
