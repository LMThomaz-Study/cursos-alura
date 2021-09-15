const Atendimentos = require('../models/atendimentos');

module.exports = (app) => {
  app.get('/atendimentos', (_, res) => {
    return res.json({
      message: 'Você está na rota de atendimentos e está realizando um GET',
    });
  });

  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body;

    Atendimentos.adicionar(atendimento, res);
  });
};
