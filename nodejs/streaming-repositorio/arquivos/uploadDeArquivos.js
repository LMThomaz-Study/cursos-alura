const fs = require('fs');

fs.readFile('../assets/doguin.jfif', (erro, buffer) => {
  console.log('Imagem foi bufferizada');

  fs.writeFile('../assets/doguin2.jfif', buffer, (erro) => {
    console.log('Imagem foi escrita');
  });
});
