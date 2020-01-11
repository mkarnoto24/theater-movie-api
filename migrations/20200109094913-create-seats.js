'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seat_name: {
        type: Sequelize.STRING
      },
      seat_no: {
        type: Sequelize.INTEGER
      },
      theaters_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'theaters', // 
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'

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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('seats');
  }
};