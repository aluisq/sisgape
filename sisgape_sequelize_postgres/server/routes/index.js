const usersController = require('../controllers/users');

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
      status: 'Estou funcionando!',
    }));
  
    app.post('/api/user', usersController.create);
    app.get('/api/users', usersController.list)
  };