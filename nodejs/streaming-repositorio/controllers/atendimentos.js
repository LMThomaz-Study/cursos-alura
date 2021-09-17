const Atendimentos = require('../models/atendimentos');

module.exports = (app) => {
  app.get('/atendimentos', (_, res) => {
    Atendimentos.listar()
      .then((resultados) => {
        res.json(resultados);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  });

  app.get('/atendimentos/:id', (req, res) => {
    const { id } = req.params;

    Atendimentos.buscar(Number(id), res);
  });

  app.post('/atendimentos', async (req, res) => {
    const atendimento = req.body;

    Atendimentos.adicionar(atendimento)
      .then((atendimentoCadastrado) => {
        res.status(201).json(atendimentoCadastrado);
      })
      .catch((erro) => {
        res.status(400).json(erro);
      });
  });

  app.patch('/atendimentos/:id', (req, res) => {
    const { id } = req.params;
    const valores = req.body;

    Atendimentos.alterar(Number(id), valores, res);
  });

  app.delete('/atendimentos/:id', (req, res) => {
    const { id } = req.params;

    Atendimentos.deletar(Number(id), res);
  });
};
