const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.SubjectWorks.create(req.body)
      .then(SubjectWork => res.json(SubjectWork))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.SubjectWorks.findAll({})
      .then(SubjectWork => res.json(SubjectWork))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let SubjectWork = db.SubjectWorks.findByPk(req.params.id)
    .then(SubjectWork => {
      if (!SubjectWork) {
        return res.json(error)
      }
      return res.json(SubjectWork)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let SubjectWork = db.SubjectWorks.findByPk(req.params.id)
      .then(SubjectWork => {
          if (!SubjectWork) {
            return res.json({
              message: 'SubjectWork Not Found',
              });
          }
            return SubjectWork
              .update(req.body)
              .then(() => res.json(SubjectWork))  // Send back the updated SubjectWork.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let SubjectWork =  db.SubjectWorks.findByPk(req.params.id)
      .then(SubjectWork => {
        if (!SubjectWork) {
          return res.json({
            message: ' Não encontrado!',
          });
        }
          return SubjectWork
            .destroy()
            .then(() => res.json({Status: " Deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
