const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.Employees.create(req.body)
      .then(employee => res.json(employee))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.Employees.findAll({})
      .then(employee => res.json(employee))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let employee = db.Employees.findByPk(req.params.id)
    .then(employee => {
      if (!employee) {
        return res.json(error)
      }
      return res.json(employee)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let employee = db.Employees.findByPk(req.params.id)
      .then(employee => {
          if (!employee) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return employee
              .update(req.body)
              .then(() => res.json(employee))  // Send back the updated employee.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let employee =  db.Employees.findByPk(req.params.id)
      .then(employee => {
        if (!employee) {
          return res.json({
            message: 'Trabalhador não encontrado!',
          });
        }
          return employee
            .destroy()
            .then(() => res.json({Status: "Trabalhador deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
