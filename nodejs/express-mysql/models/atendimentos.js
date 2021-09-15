const moment = require('moment');
const conexao = require('../infra/conexao');

class Atendimento {
  adicionar(atendimento, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:MM:SS',
    );
    const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
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

      res.status(201).json(resultado);
    });
  }
}

module.exports = new Atendimento();
