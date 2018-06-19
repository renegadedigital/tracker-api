'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('match', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      away: {
        allowNull: false,
        type: Sequelize.STRING
      },
      awayFouls: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      awayScore: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      homeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "group", key: "id" }
      },
      numStatisticians: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      period: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      periodDuration: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      periodPausedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      periodStartedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      periods: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      scheduledAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    return queryInterface.dropTable('match');
  }
};
