const addComputadores = require('./functions/addComputadores');
const extraiDados = require('./functions/extraiDadosTabela');

const main = async () => await addComputadores(extraiDados());

main();