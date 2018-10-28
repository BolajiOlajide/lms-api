import faker from 'ng-faker';
import uuid from 'uuid/v4';
import bcrypt from 'bcrypt';
import logger from 'winston';


const encryptPassword = password => bcrypt
  .hashSync(password, bcrypt.genSaltSync(10));

const randomArr = [1,2,3,4,5];

const users = randomArr.map(() => ({
  id: uuid(),
  firstname: faker.name.firstName(),
  surname: faker.name.lastName(),
  email: faker.internet.email(),
  password: encryptPassword(faker.lorem.phrase())
}));


exports.seed = knex => knex('Users').del()
  .then(() => knex('Users').insert(users))
  .catch((error) => logger.error(error));
