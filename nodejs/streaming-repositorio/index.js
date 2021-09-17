const customExpress = require('./config/customExpress');

const conexao = require('./infra/database/conexao');
const Tabelas = require('./infra/database/tabelas');
conexao.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Conectado com sucesso');

    Tabelas.init(conexao);

    const app = customExpress();

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  }
});
