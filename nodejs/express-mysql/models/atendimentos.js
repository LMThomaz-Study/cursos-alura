const conexao = require('../infra/conexao');

class Atendimento {
  adicionar(atendimento) {
    const sql = 'INSERT INTO Atendimentos SET ?';

    conexao.query(sql, atendimento, (erro, resultado) => {
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
