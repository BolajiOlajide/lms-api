const bookshelf = require('../database');
const Loan = require('./loan.model');


const User = bookshelf.Model.extend({
  tableName: 'users',
  user: function() {
    return this.hasMany(Loan);
  }
});

module.exports = User;
