const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* Vinculando o React ao app */
app.use(express.static(path.join(__dirname, 'client/build')));

/* Rota raiz */
app.get('/api/', (_, res) => {
  res.send({
    message:
      'Bem-vindo a API de lançamentos. Acesse /transaction e siga as orientações',
  });
});

/* Rotas principais do app*/
app.use('/api/transaction', routes);

const { DB_CONNECTION } = process.env;

console.log('Iniciando conexao ao MongoDB');

mongoose.connect(DB_CONNECTION);

mongoose.connection.on('error', (err) => {
  console.error(`Erro na conexao ao MongoDB - ${err}`);
});

mongoose.connection.once('open', () => {
  console.log('Conectado ao MongoDB');

  /* Definiçoes de porta e Inicialização do app */
  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta ${APP_PORT}`);
  });
});
