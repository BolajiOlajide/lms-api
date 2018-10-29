import bookshelf from '../database';


const Bank = bookshelf.Model.extend({
  tableName: 'Banks',
  uuid: true
});

export default Bank;
