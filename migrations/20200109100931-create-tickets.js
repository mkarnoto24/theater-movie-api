'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ticket_no: {
        type: Sequelize.STRING
      },
      show_date: {
        type: Sequelize.DATE
      },
      show_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'shows', // 
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      seat_no: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'admins', // 
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      theater_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'theaters',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      confirmation: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('tickets');
  }
};