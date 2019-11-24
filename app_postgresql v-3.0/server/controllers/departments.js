const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.Departments.create(req.body)
      .then(department => res.json(department))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.Departments.findAll({})
      .then(department => res.json(department))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let department = db.Departments.findByPk(req.params.id)
    .then(department => {
      if (!department) {
        return res.json(error)
      }
      return res.json(department)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let department = db.Departments.findByPk(req.params.id)
      .then(department => {
          if (!department) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return department
              .update(req.body)
              .then(() => res.json(department))  // Send back the updated department.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let department =  db.Departments.findByPk(req.params.id)
      .then(department => {
        if (!department) {
          return res.json({
            message: 'Departamento não encontrado!',
          });
        }
          return department
            .destroy()
            .then(() => res.json({Status: "Departamento deletado com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
