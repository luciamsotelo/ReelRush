'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fly_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fly_description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      fly_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      item_price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      item_cost: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      fishing_location: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fish_caught: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fly_image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      beach_image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fish_image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Inventories');
  }
};
