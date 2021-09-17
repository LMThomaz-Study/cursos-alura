const conexao = require('./conexao');

const executaQuery = (query, parametros = '') => {
  return new Promise(resolve, (reject) => {
    conexao.query(query, parametros, (err, result, campos) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(result);
      return;
    });
  });
};
