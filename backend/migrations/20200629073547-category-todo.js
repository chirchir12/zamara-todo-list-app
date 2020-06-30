'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Todos', 'categoryID', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Todos', 'categoryID');
  },
};
