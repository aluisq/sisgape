const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.Examples.create(req.body)
      .then(example => res.json(example))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.Examples.findAll({})
      .then(example => res.json(example))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let example = db.Examples.findByPk(req.params.id,{
      include: ['Loan']
    })
    .then(example => {
      if (!example) {
        return res.json(error)
      }
      return res.json(example)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let example = db.Examples.findByPk(req.params.id)
      .then(example => {
          if (!example) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return example
              .update(req.body)
              .then(() => res.json(example))  // Send back the updated example.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let example =  db.Examples.findByPk(req.params.id)
      .then(example => {
        if (!example) {
          return res.json({
            message: 'Examplar não encontrado!',
          });
        }
          return example
            .destroy()
            .then(() => res.json({Status: "Examplar deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
