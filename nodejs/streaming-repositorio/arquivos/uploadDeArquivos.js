const fs = require('fs');

module.exports = (pathName, nomeDoArquivo, callback) => {
  const novoPathName = `../assets/images/${nomeDoArquivo}`;

  fs.createReadStream(pathName)
    .pipe(fs.createWriteStream(novoPathName))
    .on('finish', () => callback(novoPathName));
};
