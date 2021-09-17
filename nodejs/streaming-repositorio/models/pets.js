const conexao = require('../infra/conexao');

class Pet {
  adicionar(pet, res) {
    const sql = 'INSERT INTO Pets SET ?';

    conexao.query(sql, pet, (erro, resultado) => {
      if (erro) {
        console.log(erro);
        res.status(400).json(erro);
      } else {
        res.status(201).json(resultado);
      }
    });
  }
}

module.exports = new Pet();
