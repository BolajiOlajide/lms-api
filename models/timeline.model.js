import bookshelf from '../database';
import Loan from './loan.model';


const Timeline = bookshelf.Model.extend({
  tableName: 'Timelines',
  loan: () => this.belongsTo(Loan),
  uuid: true
});

export default Timeline;
