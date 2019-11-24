const db = require('../models/');

module.exports = {

  //criar

  create(req, res) {
    db.PubHouses.create(req.body)
      .then(PubHouse => res.json(PubHouse))
      .catch(error => res.json(error))
    },

  //listar 

  list(req, res) {
    db.PubHouses.findAll({})
      .then(PubHouse => res.json(PubHouse))
      .catch(error => res.json(error));
  },
  
  //localizar
  
  retrieve(req,res) {
    let PubHouse = db.PubHouses.findByPk(req.params.id)
    .then(PubHouse => {
      if (!PubHouse) {
        return res.json(error)
      }
      return res.json(PubHouse)
    })
    .catch(error => res.json(error))
  },

  //atualizar 

  update(req, res){
    let PubHouse = db.PubHouses.findByPk(req.params.id)
      .then(PubHouse => {
          if (!PubHouse) {
            return res.json({
              message: 'Não Encontrado!',
              });
          }
            return PubHouse
              .update(req.body)
              .then(() => res.json(PubHouse))  // Send back the updated PubHouse.
              .catch((error) => res.json(error));
      })
      .catch((error) => res.json(error))
  },
  
  // deletar

  destroy(req, res) {
    let PubHouse =  db.PubHouses.findByPk(req.params.id)
      .then(PubHouse => {
        if (!PubHouse) {
          return res.json({
            message: 'Editora não encontrada!',
          });
        }
          return PubHouse
            .destroy()
            .then(() => res.json({Status: "Editora deletada com sucesso!" }))
            .catch(error => res.json(error));
        })
            .catch(error => res.json(error));
    }
}
