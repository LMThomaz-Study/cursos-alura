module.exports = (app) => {
  app.get('/atendimentos', (_, res) => {
    return res.json({
      message: 'Você está na rota de atendimentos e está realizando um GET',
    });
  });
};
