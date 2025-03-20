const axios = require("axios");
const https = require("https");

const GLPI_URL = "url";
const USER_LOGIN = "***"; // Substitua pelo seu usuário GLPI
const USER_PASSWORD = "***"; // Substitua pela sua senha GLPI
const APP_TOKEN = "";
const USER_TOKEN = "";

// Criando um agente para ignorar erros de certificado SSL
const agent = new https.Agent({
  rejectUnauthorized: false,
});

async function getSessionToken() {
  try {
    const encodedCredentials = Buffer.from(`${USER_LOGIN}:${USER_PASSWORD}`).toString("base64");
    const response = await axios.get(`${GLPI_URL}/initSession`, {
      headers: {
        "App-Token": APP_TOKEN,
        "Authorization": `Basic ${encodedCredentials}`, // OU "Authorization": `user_token ${USER_TOKEN}`
      },
      params: {
        get_full_session: true, // Obtém detalhes completos da sessão
      },
      httpsAgent: agent,
    });
    console.log("Logado com sucesso!");
    return response.data.session_token;
  } catch (error) {
    console.error("Erro ao iniciar sessão:", error.response?.data || error.message);
    return null;
  }
}


module.exports = {getSessionToken, APP_TOKEN, USER_TOKEN, GLPI_URL};