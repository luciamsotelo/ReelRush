'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    fly_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fly_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fly_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    item_cost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    fishing_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fish_caught: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fly_image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    beach_image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fish_image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  Inventory.associate = function(models) {
    // associations can be defined here
  };
  return Inventory;
};
