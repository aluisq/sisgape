const db = require('../models');

module.exports = {
  //Cria usuário
  create(req, res) {
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
    //Lista usuários
  list(req, res) {
    db.Users.findAll({})
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
    },
    //Atualiza usuários
    update(req, res){
        let user = db.Users.findByPk(req.params.id)
          .then(user => {
            if (!user) {
              return res.status(404).send({
                message: 'user Not Found',
              });
            }
            return user
              .update({
                nome: req.body.nome || user.nome,
              })
              .then(() => res.status(200).send(user))  // Send back the updated user.
              .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error))
        }
      }
