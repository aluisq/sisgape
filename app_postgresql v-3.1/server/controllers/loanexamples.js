const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.LoanExamples.create(req.body)
      .then(LoanExample => res.json(LoanExample))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.LoanExamples.findAll({})
      .then(LoanExample => {
        console.log(LoanExample)
        res.json(LoanExample)
      })
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let LoanExample = db.LoanExamples.findByPk(req.params.id)
    .then(LoanExample => {
      if (!LoanExample) {
        return res.json(error)
      }
      return res.json(LoanExample)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let LoanExample = db.LoanExamples.findByPk(req.params.id)
      .then(LoanExample => {
          if (!LoanExample) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return LoanExample
              .update(req.body)
              .then(() => res.json(LoanExample))  // Send back the updated LoanExample.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let LoanExample =  db.LoanExamples.findByPk(req.params.id)
      .then(LoanExample => {
        if (!LoanExample) {
          return res.json({
            message: 'Não encontrado!',
          });
        }
          return LoanExample
            .destroy()
            .then(() => res.json({Status: "Deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
