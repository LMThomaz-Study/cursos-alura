const fs = require('fs');
const path = require('path');

module.exports = (pathName, nomeDoArquivo, callback) => {
  const tiposValido = ['jpg', 'jpeg', 'png', 'jfif'];
  const tipo = path.extname(pathName);
  const tipoEhValido = tiposValido.indexOf(tipo.substring(1));

  if (tipoEhValido === -1) {
    console.log('Erro! Tipo inválido');
    return;
  }

  const novoPathName = `./assets/images/${nomeDoArquivo}${tipo}`;

  fs.createReadStream(pathName)
    .pipe(fs.createWriteStream(novoPathName))
    .on('finish', () => callback(novoPathName));
};
