const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.KeyWorks.create(req.body)
      .then(keyWork => res.json(keyWork))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.KeyWorks.findAll({})
      .then(keyWork => res.json(keyWork))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let keyWork = db.KeyWorks.findByPk(req.params.id)
    .then(keyWork => {
      if (!keyWork) {
        return res.json(error)
      }
      return res.json(keyWork)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let keyWork = db.KeyWorks.findByPk(req.params.id)
      .then(keyWork => {
          if (!keyWork) {
            return res.json({
              message: 'Não Encontrado',
              });
          }
            return keyWork
              .update(req.body)
              .then(() => res.json(keyWork))  // Send back the updated keyWork.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let keyWork =  db.KeyWorks.findByPk(req.params.id)
      .then(keyWork => {
        if (!keyWork) {
          return res.json({
            message: ' Não Encontrado!',
          });
        }
          return keyWork
            .destroy()
            .then(() => res.json({Status: "Deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
