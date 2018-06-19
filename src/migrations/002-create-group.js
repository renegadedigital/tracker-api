'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('group', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      institutionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "institution", key: "id" }
      },
      logo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      type: {
        allowNull: false,
        defaultValue: "group",
        type: Sequelize.ENUM("group", "team")
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
    return queryInterface.dropTable('group');
  }
};
