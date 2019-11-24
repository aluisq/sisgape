const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.Users.create(req.body)
      .then(user => res.json(user))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.Users.findAll({})
      .then(user => res.json(user))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let user = db.Users.findByPk(req.params.id)
    .then(user => {
      if (!user) {
        return res.json(error)
      }
      return res.json(user)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let user = db.Users.findByPk(req.params.id)
      .then(user => {
          if (!user) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return user
              .update(req.body)
              .then(() => res.json(user))  // Send back the updated user.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let user =  db.Users.findByPk(req.params.id)
      .then(user => {
        if (!user) {
          return res.json({
            message: 'Usuário não encontrado!',
          });
        }
          return user
            .destroy()
            .then(() => res.json({Status: "Usuário deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
