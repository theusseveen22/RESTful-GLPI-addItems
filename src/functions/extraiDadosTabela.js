const xlsx = require('xlsx');
const fs = require('fs');

const extraiDados = () => {

const nomeDoArquivo = '\\PARQUE TECNOLOGICO.xlsx'
const pasta = __dirname + `${nomeDoArquivo}`;

// Carregar o arquivo Excel
const workbook = xlsx.readFile(pasta);

// Supondo que os dados estão na primeira planilha
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Converter a planilha para JSON
const data = xlsx.utils.sheet_to_json(worksheet);

return data;

}


module.exports = extraiDados;