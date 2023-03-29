const express = require("express");
const app = express();
const cors = require('cors');
const fs = require ('fs');
const path = require('path');

app.use(cors());
app.use(express.json());

port = 3070;
app.listen(port, ()=>{
  console.log(`Server listening on the port::${port}`);
});

/*function mostrarDirectori(dire){
  const arxius = fs.readdirSync(dire);
  arxius.forEach((arxiu) => {
    const ruta = dire + '/' + arxiu;
    const stats = fs.statSysnc(ruta);
    if (stats.isDirectory()){
      console.log(ruta);
    } else {
      console.log(ruta);
    }
  });
}

console.log("C:\\Users\\Héctor\\Desktop\\UF1_ExamenAaD");
mostrarDirectori("C:\\Users\\Héctor\\Desktop\\UF1_ExamenAaD");*/

/*const inputFile = "C:\\Users\\Héctor\\Desktop\\UF1_ExamenAaD\\Documents\\FitxerOrigen.txt";
const outputFile = "C:\\Users\\Héctor\\Desktop\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt";

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  if (!fs.existsSync(outputFile)) {
    fs.writeFile(outputFile, data, (err) => {
      if (err) {
        throw err;
      }
      console.log(`El contingut del fitxer ${inputFile} s'ha copiat correctament en el fitxer ${outputFile}.`);
    });
  } else {
    fs.appendFile(outputFile, data, (err) => {
      if (err) {
        throw err;
      }
      console.log(`El contingut del fitxer ${inputFile} s'ha concatenat correctament en el fitxer ${outputFile}.`);
    });
  }
});*/

