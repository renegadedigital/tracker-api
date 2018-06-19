'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matchAction', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      action: {
        allowNull: false,
        type: Sequelize.STRING
      },
      athleteId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: "athlete", key: "id" }
      },
      substituteId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: "athlete", key: "id" }
      },
      matchId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "match", key: "id" }
      },
      completedTime: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      completedPeriod: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      positionX: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      positionY: {
        allowNull: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('matchAction');
  }
};
