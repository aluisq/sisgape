const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.Subjects.create(req.body)
      .then(subject => res.json(subject))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.Subjects.findAll({})
      .then(subject => res.json(subject))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let subject = db.Subjects.findByPk(req.params.id,{
      include: ['Work']
    })
    .then(subject => {
      if (!subject) {
        return res.json(error)
      }
      return res.json(subject)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let subject = db.Subjects.findByPk(req.params.id)
      .then(subject => {
          if (!subject) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return subject
              .update(req.body)
              .then(() => res.json(subject))  // Send back the updated subject.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let subject =  db.Subjects.findByPk(req.params.id)
      .then(subject => {
        if (!subject) {
          return res.json({
            message: 'Assunto não encontrado!',
          });
        }
          return subject
            .destroy()
            .then(() => res.json({Status: "Assunto deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
