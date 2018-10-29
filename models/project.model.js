import bookshelf from '../database';


const Project = bookshelf.Model.extend({
  tableName: 'Projects',
  uuid: true
});

export default Project;
