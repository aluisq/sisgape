const db = require('../models');

module.exports = {
  create(req, res) { console.log(req.body.data_nasc)
    db.Users.create({
    cpf: req.body.cpf,
    nome: req.body.nome,
    data_nasc: Date.parse(req.body.data_nasc),
    sexo: req.body.sexo,
    telefone: req.body.telefone,
    email: req.body.email,
    logradouro: req.body.logradouro,
    cidade: req.body.cidade,
    bairro: req.body.bairro,
    cep: req.body.cep,
    complemento: req.body.complemento,
    numero: req.body.numero,
    uf: req.body.uf
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
    },
    list(req, res) {
   db.Users.findAll({})
    .then(todos => res.status(200).send(todos))
    .catch(error => res.status(400).send(error));
  },
};