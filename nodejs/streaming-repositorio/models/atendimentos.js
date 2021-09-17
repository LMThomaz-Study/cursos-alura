const axios = require('axios');
const moment = require('moment');
const conexao = require('../infra/conexao');

class Atendimento {
  adicionar(atendimento, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:MM:SS',
    );
    console.log(data, dataCriacao);
    const dataEhValida = moment(data.split(' ')[0]).isSameOrAfter(
      dataCriacao.split(' ')[0],
    );
    const clienteEhValido = atendimento.cliente.length >= 5;

    const validacoes = [
      {
        nome: 'data',
        valido: dataEhValida,
        mensagem: 'Data deve ser maior ou igual a data atual',
      },
      {
        nome: 'cliente',
        valido: clienteEhValido,
        mensagem: 'Cliente deve ter pelo menos 5 caracteres',
      },
    ];

    const erros = validacoes.filter((campo) => !campo.valido);
    const existemErros = erros.length > 0;

    if (existemErros) return res.status(400).json(erros);

    const atendimentoTratado = { dataCriacao, ...atendimento, data };
    const sql = 'INSERT INTO Atendimentos SET ?';

    conexao.query(sql, atendimentoTratado, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
        return;
      }

      res.status(201).json({ ...atendimentoTratado, id: resultado.insertId });
    });
  }

  listar(res) {
    const sql = 'SELECT * FROM Atendimentos';

    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(erro);
        return;
      }

      return res.status(200).json(resultado);
    });
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
