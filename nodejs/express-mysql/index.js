const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/atendimentos', (req, res) => {
  res.json({
    message: 'Você está na rota de atendimentos e está realizando um GET',
  });
});
