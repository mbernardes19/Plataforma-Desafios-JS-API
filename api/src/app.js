/**
 * Arquivo: src/app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 07/07/2019
 * Author: Glaucia Lemos
 */

// ==> Enviroment Variables
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Importando o arquivo: 'database.js'
const localDatabase = require('./database');

mongoose.Promise = global.Promise;

// ==> Conexão com a Base de Dados:
mongoose
  .connect(localDatabase.local.url, {
    useNewUrlParser: true,
    useFindAndModify: false, // Precisa estar false, documentação diz estar Deprecated
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log('A Base de Dados foi conectada com sucesso!');
    },
    (err) => {
      console.log(`Erro ao conectar com a base de Dados... ${err}`);
      process.exit();
    },
  );

// ==> Rotas
const index = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

// ==> Usando as Rotas da API da Aplicação:
app.use('/', index);

// Socket
/* TODO: Tratar a relação dos status Code & Socket.io
const io = require('socket.io')(server);

app.use((req, res, next) => {
  req.io = io;
  return next();
});
*/

module.exports = app;
