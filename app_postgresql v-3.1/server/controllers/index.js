const users = require('./users');
const authors = require('./authors');
const departments = require('./departments');
const employees = require('./employees');
const keys = require('./keys');
const pubHouse = require('./pubhouses');
const loans = require('./loans');
const works = require('./works');
const keyWorks =require('./keyworks');
const authorWorks = require('./authorworks');
const subjectWorks = require('./subjectworks');
const subjects =require('./subjects');
const examples = require('./examples');
const loanExamples = require('./loanexamples');


module.exports = {
  users, authors,departments, employees, keys, pubHouse, loans, works, keyWorks, authorWorks, subjectWorks,
  subjects, examples, loanExamples
};