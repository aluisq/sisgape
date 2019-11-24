const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.Authors.create(req.body)
      .then(author => res.json(author))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.Authors.findAll({})
      .then(author => res.json(author))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let author = db.Authors.findByPk(req.params.id)
    .then(author => {
      if (!author) {
        return res.json(error)
      }
      return res.json(author)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let author = db.Authors.findByPk(req.params.id)
      .then(author => {
          if (!author) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return author
              .update(req.body)
              .then(() => res.json(author))  // Send back the updated author.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let author =  db.Authors.findByPk(req.params.id)
      .then(author => {
        if (!author) {
          return res.json({
            message: 'Autor não encontrado!',
          });
        }
          return author
            .destroy()
            .then(() => res.json({Status: "Autor deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
