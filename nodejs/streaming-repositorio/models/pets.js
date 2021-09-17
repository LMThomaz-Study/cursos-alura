const conexao = require('../infra/conexao');
const uploadDeArquivo = require('../arquivos/uploadDeArquivos');

class Pet {
  adicionar(pet, res) {
    const sql = 'INSERT INTO Pets SET ?';

    uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
      if (erro) {
        return res.status(400).json({
          error: erro,
        });
      }

      const novoPet = {
        nome: pet.nome,
        imagem: novoCaminho,
      };

      conexao.query(sql, novoPet, (erro, resultado) => {
        if (erro) {
          console.log(erro);
          res.status(400).json(erro);
        } else {
          res.status(201).json(resultado);
        }
      });
    });
  }
}

module.exports = new Pet();
