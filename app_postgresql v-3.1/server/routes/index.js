const usersController = require('../controllers/users');
const authorsController = require('../controllers/authors');
const departmentsController = require('../controllers/departments');
const employeesController = require('../controllers/employees');
const keysController = require('../controllers/keys');
const pubhousesController = require('../controllers/pubhouses');
const subjectsController = require('../controllers/subjects');
const worksController = require('../controllers/works');
const keyWorksController = require('../controllers/keyworks');
const authorWorksController = require('../controllers/authorworks');
const subjectWorksController = require('../controllers/subjectworks');
const loansController = require('../controllers/loans');
const examplesController = require('../controllers/examples');
const loanExamplesController = require('../controllers/loanexamples');


module.exports = (app) => {

  app.get('/sisgape/users', usersController.list);
  app.get('/sisgape/find_user/:id', usersController.retrieve);
  app.post('/sisgape/new_user', usersController.create);
  app.put('/sisgape/update_user/:id', usersController.update);
  app.delete('/sisgape/delete_user/:id', usersController.destroy);


  app.get('/sisgape/authors', authorsController.list);
  app.get('/sisgape/find_author/:id', authorsController.retrieve);
  app.post('/sisgape/new_author', authorsController.create);
  app.put('/sisgape/update_author/:id', authorsController.update);
  app.delete('/sisgape/delete_author/:id', authorsController.destroy);


  app.get('/sisgape/departments', departmentsController.list);
  app.get('/sisgape/find_department/:id', departmentsController.retrieve);
  app.post('/sisgape/new_department', departmentsController.create);
  app.put('/sisgape/update_department/:id', departmentsController.update);
  app.delete('/sisgape/delete_department/:id', departmentsController.destroy);


  app.get('/sisgape/employees', employeesController.list);
  app.get('/sisgape/find_employee/:id', employeesController.retrieve);
  app.post('/sisgape/new_employee', employeesController.create);
  app.put('/sisgape/update_employee/:id', employeesController.update);
  app.delete('/sisgape/delete_employee/:id', employeesController.destroy);

  app.get('/sisgape/keys', keysController.list);
  app.get('/sisgape/find_key/:id', keysController.retrieve);
  app.post('/sisgape/new_key', keysController.create);
  app.put('/sisgape/update_key/:id', keysController.update);
  app.delete('/sisgape/delete_key/:id', keysController.destroy);

  app.get('/sisgape/pubHouses', pubhousesController.list);
  app.get('/sisgape/find_pubHouse/:id', pubhousesController.retrieve);
  app.post('/sisgape/new_pubHouse', pubhousesController.create);
  app.put('/sisgape/update_pubHouse/:id', pubhousesController.update);
  app.delete('/sisgape/delete_pubHouse/:id', pubhousesController.destroy);

  app.get('/sisgape/subjects', subjectsController.list);
  app.get('/sisgape/find_subject/:id', subjectsController.retrieve);
  app.post('/sisgape/new_subject', subjectsController.create);
  app.put('/sisgape/update_subject/:id', subjectsController.update);
  app.delete('/sisgape/delete_subject/:id', subjectsController.destroy);

  app.get('/sisgape/works', worksController.list);
  app.get('/sisgape/find_work/:id', worksController.retrieve);
  app.post('/sisgape/new_work', worksController.create);
  app.put('/sisgape/update_work/:id', worksController.update);
  app.delete('/sisgape/delete_work/:id', worksController.destroy);


  app.get('/sisgape/keyWorks', keyWorksController.list);
  app.get('/sisgape/find_keyWork/:id', keyWorksController.retrieve);
  app.post('/sisgape/new_keyWork', keyWorksController.create);
  app.put('/sisgape/update_keyWork/:id', keyWorksController.update);
  app.delete('/sisgape/delete_keyWork/:id', keyWorksController.destroy);

  app.get('/sisgape/authorWorks', authorWorksController.list);
  app.get('/sisgape/find_authorWork/:id', authorWorksController.retrieve);
  app.post('/sisgape/new_authorWork', authorWorksController.create);
  app.put('/sisgape/update_authorWork/:id', authorWorksController.update);
  app.delete('/sisgape/delete_authorWork/:id', authorWorksController.destroy);

  app.get('/sisgape/subjectWorks', subjectWorksController.list);
  app.get('/sisgape/find_subjectWork/:id', subjectWorksController.retrieve);
  app.post('/sisgape/new_subjectWork', subjectWorksController.create);
  app.put('/sisgape/update_subjectWork/:id', subjectWorksController.update);
  app.delete('/sisgape/delete_subjectWork/:id', subjectWorksController.destroy);

  app.get('/sisgape/loans', loansController.list);
  app.get('/sisgape/find_loan/:id', loansController.retrieve);
  app.post('/sisgape/new_loan', loansController.create);
  app.put('/sisgape/update_loan/:id', loansController.update);
  app.delete('/sisgape/delete_loan/:id', loansController.destroy);

  app.get('/sisgape/examples', examplesController.list);
  app.get('/sisgape/find_example/:id', examplesController.retrieve);
  app.post('/sisgape/new_example', examplesController.create);
  app.put('/sisgape/update_example/:id', examplesController.update);
  app.delete('/sisgape/delete_example/:id', examplesController.destroy);

  app.get('/sisgape/loanExamples', loanExamplesController.list);
  app.get('/sisgape/find_loanExample/:id', loanExamplesController.retrieve);
  app.post('/sisgape/new_loanExample', loanExamplesController.create);
  app.put('/sisgape/update_loanExample/:id', loanExamplesController.update);
  app.delete('/sisgape/delete_loanExample/:id', loanExamplesController.destroy);

};
