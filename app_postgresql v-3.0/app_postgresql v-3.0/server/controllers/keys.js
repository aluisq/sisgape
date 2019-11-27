const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.Keys.create(req.body)
      .then(key => res.json(key))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.Keys.findAll({})
      .then(Keys => res.json(Keys))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let key = db.Keys.findByPk(req.params.id,{
      include: ['Work']
    })
    .then(key => {
      if (!key) {
        return res.json(error)
      }
      return res.json(key)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let key = db.Keys.findByPk(req.params.id)
      .then(key => {
          if (!key) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return key
              .update(req.body)
              .then(() => res.json(key))  // Send back the updated key.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let key =  db.Keys.findByPk(req.params.id)
      .then(key => {
        if (!key) {
          return res.json({
            message: 'Palavra-Chave não encontrada!',
          });
        }
          return key
            .destroy()
            .then(() => res.json({Status: "Palavra-Chave deletada com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
