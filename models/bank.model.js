import bookshelf from '../database';
import User from './user.model';


const Bank = bookshelf.Model.extend({
  tableName: 'Banks',
  uuid: true
});

export default Bank;
