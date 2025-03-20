const axios = require("axios");

const { getSessionToken, APP_TOKEN, USER_TOKEN, GLPI_URL } = require('./conectionGLPI');

async function findComputerBySerial(serial, sessionToken) {
  try {
    const response = await axios.get(`${GLPI_URL}/search/Computer`, {
      headers: {
        "App-Token": APP_TOKEN,
        "Session-Token": sessionToken,
        "Authorization": `user_token ${USER_TOKEN}`,
      },
      params: {
        criteria: JSON.stringify([{ field: "serial", searchtype: "equals", value: serial }]),
      },
    });

    // Retorna os computadores encontrados (se houver)
    return response.data.data.length > 0 ? response.data.data : null;
  } catch (error) {
    console.error("Erro ao buscar computador:", error.response?.data || error.message);
    return null;
  }
}

// Função para criar computadores sem duplicatas
async function createComputers(computersArray) {
  try {
    const sessionToken = await getSessionToken();

    for (const computer of computersArray) {
      // Verifica se o número de série já existe no GLPI
      if (computer.serial) {
        const existingComputers = await findComputerBySerial(computer.serial, sessionToken);

        if (existingComputers) {
          console.log(`Computador com serial ${computer.serial} já existe. Pulando cadastro.`);
          continue; // Pula para o próximo computador
        }
      }

      // Se não existir, cadastra o computador
      const response = await axios.post(`${GLPI_URL}/Computer`, 
        { input: computer },  
        { 
          headers: {
            "App-Token": APP_TOKEN,
            "Session-Token": sessionToken,
            "Authorization": `user_token ${USER_TOKEN}`,
          },
        }
      );

      console.log("Computador cadastrado com sucesso:", response.data);
    }
  } catch (error) {
    console.error("Erro ao cadastrar computadores:", error.response?.data || error.message);
  }
}

  module.exports = createComputers;