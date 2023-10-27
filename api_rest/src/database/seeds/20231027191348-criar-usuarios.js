// eslint-disable-next-line import/no-extraneous-dependencies
const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Henrique',
        email: 'henriquesbs07@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Henrique2',
        email: 'henriquesbs072@gmail.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Henrique1',
        email: 'henriquesbs071@gmail.com',
        password_hash: await bcryptjs.hash('123654', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
