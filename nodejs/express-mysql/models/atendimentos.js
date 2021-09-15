const moment = require('moment');
const conexao = require('../infra/conexao');

class Atendimento {
  adicionar(atendimento) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(atendimento.data, 'DD/MM/YYYY').format(
      'YYYY-MM-DD HH:MM:SS',
    );

    const atendimentoTratado = { dataCriacao, ...atendimento, data };
    const sql = 'INSERT INTO Atendimentos SET ?';

    conexao.query(sql, atendimentoTratado, (erro, resultado) => {
      if (erro) {
        console.log(erro);
        return;
      }

      console.log('Atendimento adicionado com sucesso!');
      console.log(resultado);
    });
  }
}

module.exports = new Atendimento();
