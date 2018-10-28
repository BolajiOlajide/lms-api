const bookshelf = require('../database');
const Loan = require('./loan.model');


const User = bookshelf.Model.extend({
  tableName: 'Users',
  user: function() {
    return this.hasMany(Loan);
  }
});

export default User;
