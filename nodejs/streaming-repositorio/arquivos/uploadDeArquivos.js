const fs = require('fs');

fs.createReadStream('../assets/doguin.jfif')
  .pipe(fs.createWriteStream('../assets/doguin-stream.jfif'))
  .on('finish', () => console.log('Arquivo copiado com sucesso!'));
