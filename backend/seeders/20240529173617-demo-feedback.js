'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Feedbacks', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        subject: 'Great service!',
        message: 'I had a fantastic experience with your service.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        subject: 'Needs Improvement',
        message: 'I think there is room for improvement in your service.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Feedbacks', null, {});
  }
};
