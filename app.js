const express = require('express');
const openAI = require('openai');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const path = require('path');
const myRouter = require('./routes/misRutas');

// Importamos dotenv para acceder a variables de entorno
require('dotenv').config();
const app = express();
/* MIDDLEWARES */
//app.use(morgan('dev'));
app.use(express.json());
//Configurando archivos estáticos
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', myRouter);
module.exports = app

