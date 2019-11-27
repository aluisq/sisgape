const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.AuthorWorks.create(req.body)
      .then(AuthorWork => res.json(AuthorWork))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.AuthorWorks.findAll({})
      .then(AuthorWork => res.json(AuthorWork))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let AuthorWork = db.AuthorWorks.findByPk(req.params.id)
    .then(AuthorWork => {
      if (!AuthorWork) {
        return res.json(error)
      }
      return res.json(AuthorWork)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let AuthorWork = db.AuthorWorks.findByPk(req.params.id)
      .then(AuthorWork => {
          if (!AuthorWork) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return AuthorWork
              .update(req.body)
              .then(() => res.json(AuthorWork))  // Send back the updated AuthorWork.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let AuthorWork =  db.AuthorWorks.findByPk(req.params.id)
      .then(AuthorWork => {
        if (!AuthorWork) {
          return res.json({
            message: ' Não Encontrado!',
          });
        }
          return AuthorWork
            .destroy()
            .then(() => res.json({Status: " Deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
