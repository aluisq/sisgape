const usersController = require('../controllers/users');

module.exports = (app) => {
    app.get('/sisgape/users', usersController.list);
    app.get('/sisgape/find_user/:id', usersController.retrieve);
    app.post('/sisgape/new_user', usersController.create);
    app.put('/sisgape/update_user/:id', usersController.update);
    app.delete('/sisgape/delete_user/:id', usersController.destroy);
  };