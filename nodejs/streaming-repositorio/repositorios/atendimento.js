const query = require('../infra/database/queries');

class Atendimento {
  adicionar(atendimento) {
    const sql = 'INSERT INTO Atendimentos SET ?';

    return query(sql, atendimento);
  }

  listar() {
    const sql = 'SELECT * FROM Atendimentos';

    return query(sql);
  }
}

module.exports = new Atendimento();
