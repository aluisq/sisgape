const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.Loans.create(req.body)
      .then(loan => res.json(loan))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.Loans.findAll({})
      .then(loan => res.json(loan))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let loan = db.Loans.findByPk(req.params.id)
    .then(loan => {
      if (!loan) {
        return res.json(error)
      }
      return res.json(loan)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let loan = db.Loans.findByPk(req.params.id)
      .then(loan => {
          if (!loan) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return loan
              .update(req.body)
              .then(() => res.json(loan))  // Send back the updated loan.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let loan =  db.Loans.findByPk(req.params.id)
      .then(loan => {
        if (!loan) {
          return res.json({
            message: 'Empréstimo não encontrado!',
          });
        }
          return loan
            .destroy()
            .then(() => res.json({Status: "Registro deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
