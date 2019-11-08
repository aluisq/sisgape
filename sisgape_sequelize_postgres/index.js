const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.

require('./server/routes')(app);
app.get('/', (req, res) => res.status(200).send({
  message: 'Estou funcionando. app: SISGAPE',
}));

module.exports = app;


app.listen(8000)

console.log("Estou rodando na porta 8000")





//ETAPA TERMINADA EM 06-11-19: Foi finalizado as associações da tabela users,employees, loans