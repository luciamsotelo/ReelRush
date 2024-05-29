'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Inventories', [
      {
        fly_name: 'Fly 1',
        fly_description: 'Description for Fly 1',
        fly_quantity: 10,
        item_price: 15.99,
        item_cost: 5.99,
        fishing_location: 'Lake A',
        fish_caught: 'Trout',
        fly_image: 'path/to/fly1.jpg',
        beach_image: 'path/to/beach1.jpg',
        fish_image: 'path/to/fish1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fly_name: 'Fly 2',
        fly_description: 'Description for Fly 2',
        fly_quantity: 20,
        item_price: 12.99,
        item_cost: 4.99,
        fishing_location: 'River B',
        fish_caught: 'Bass',
        fly_image: 'path/to/fly2.jpg',
        beach_image: 'path/to/beach2.jpg',
        fish_image: 'path/to/fish2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Add more inventory items as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Inventories', null, {});
  }
};
