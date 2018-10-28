import bookshelf from '../database';

// models
import User from './user.model';
import Timeline from './timeline.model';
import Project from './project.model';
import Bank from './bank.model';


const Loan = bookshelf.Model.extend({
  tableName: 'Loans',
  uuid: true,
  user: () => this.belongsTo(User),
  timeline: () => this.hasMany(Timeline),
  project: () => this.belongsTo(Project),
  bank: () => this.belongsTo(Bank)
});

export default Loan;
