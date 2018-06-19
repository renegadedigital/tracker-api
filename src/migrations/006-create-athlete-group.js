'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('athleteGroup', {
      athleteId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: "athlete", key: "id" }
      },
      number: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      groupId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: "group", key: "id" }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('athleteGroup');
  }
};
