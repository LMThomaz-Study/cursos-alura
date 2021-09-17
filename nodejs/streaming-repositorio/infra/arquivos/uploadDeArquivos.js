const fs = require('fs');
const path = require('path');

module.exports = (pathName, nomeDoArquivo, callback) => {
  const tiposValido = ['jpg', 'jpeg', 'png', 'jfif'];
  const tipo = path.extname(pathName);
  const tipoEhValido = tiposValido.indexOf(tipo.substring(1)) !== -1;

  if (!tipoEhValido) {
    const error = 'Erro! Tipo de imagem é inválido';
    callback(error);
    return;
  }

  const novoPathName = `./assets/images/${nomeDoArquivo}${tipo}`;

  fs.createReadStream(pathName)
    .pipe(fs.createWriteStream(novoPathName))
    .on('finish', () => callback(false, novoPathName));
};
