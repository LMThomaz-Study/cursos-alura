const Atendimentos = require('../models/atendimentos');

module.exports = (app) => {
  app.get('/atendimentos', (_, res) => {
    Atendimentos.listar(res);
  });

  app.get('/atendimentos/:id', (req, res) => {
    const { id } = req.params;

    Atendimentos.buscar(Number(id), res);
  });

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body;

    Atendimentos.adicionar(atendimento, res);
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
