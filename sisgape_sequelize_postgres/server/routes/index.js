const usersController = require('../controllers/users');

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
      status: 'Estou funcionando!',
    }));

    
    app.get('/api/all_user', usersController.list);
    app.post('/api/user', usersController.create);
    app.put('/api/user/:id', usersController.update)
  };