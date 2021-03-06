import bookshelf from '../database';
import Loan from './loan.model';


const User = bookshelf.Model.extend({
  tableName: 'Users',
  uuid: true,
  loans: () => this.hasMany(Loan),
  bcrypt: { field: 'password' }
});

export default User;
