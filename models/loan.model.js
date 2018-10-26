const bookshelf = require('../database');
const User = require('../database');


const Loan = bookshelf.Model.extend({
  tableName: 'loans',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Loan;
