const moment = require('moment');
const conexao = require('../infra/conexao');

class Atendimento {
  adicionar(atendimento, res) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:SS');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:MM:SS',
    );

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
