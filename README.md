# Gerenciador RESTful do GLPI com Node.js

## 📌 Descrição
Esta aplicação em Node.js permite gerenciar o RESTful do GLPI, facilitando a adição de itens como computadores e monitores através de tabelas em formato **.xlsx**. Basta colocar a tabela na pasta **functions** e configurar os arquivos corretamente para que a importação ocorra com sucesso.

## 🚀 Como Funciona
1. **Adicione a Tabela:** Coloque o arquivo **.xlsx** na pasta `functions/`.
2. **Escolha a Função:** No arquivo `App.js`, altere a função `main` para definir qual equipamento deseja adicionar.
3. **Configure as Credenciais:** No arquivo `connectionGLPI.js`, insira as credenciais do GLPI:
   - **Login e senha**
   - **Token de usuário**
   - **Token da aplicação**

## 📂 Estrutura do Projeto
```
📁 projeto-glpi-rest
 ┣ 📂 functions
 ┃ ┗ 📄 exemplo.xlsx
 ┣ 📄 App.js
 ┣ 📄 connectionGLPI.js
 ┣ 📄 package.json
 ┗ 📄 README.md
```

## 🛠 Configuração
1. Instale as dependências do projeto:
   ```sh
   npm install
   ```
2. Configure suas credenciais no `connectionGLPI.js`.
3. Execute a aplicação:
   ```sh
   node App.js
   ```

## 📌 Observação
Certifique-se de que o GLPI esteja configurado corretamente para aceitar requisições via API REST.

## 🤝 Contribuição
Fique à vontade para abrir issues ou sugerir melhorias! 🚀

