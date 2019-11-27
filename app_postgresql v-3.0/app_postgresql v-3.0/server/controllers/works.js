const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.Works.create(req.body)
      .then(work => res.json(work))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.Works.findAll({})
      .then(work => res.json(work))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let work = db.Works.findByPk(req.params.id,{
      include: ['Author','Example','Keyword','Subject']
    })
    .then(work => {
      if (!work) {
        return res.json(error)
      }
      return res.json(work)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let work = db.Works.findByPk(req.params.id)
      .then(work => {
          if (!work) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return work
              .update(req.body)
              .then(() => res.json(work))  // Send back the updated work.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let work =  db.Works.findByPk(req.params.id)
      .then(work => {
        if (!work) {
          return res.json({
            message: 'Obra não encontrada!',
          });
        }
          return work
            .destroy()
            .then(() => res.json({Status: "Obra deletada com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
