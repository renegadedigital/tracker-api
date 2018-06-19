'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('athlete', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      accountType: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "athlete",
      },
      institutionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "institution", key: "id" }
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING
      },
      position: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    await queryInterface.sequelize.query(`
      ALTER TABLE "athlete" 
        ADD CONSTRAINT "account_fkey" 
        FOREIGN KEY ("id", "accountType") 
        REFERENCES account("id", "accountType");
    `);
    await queryInterface.addConstraint(
      'athlete', 
      ['athleteType'], {
        type: 'check',
        where: { accountType: { [Sequelize.Op.eq]: 'athlete' } }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('athlete');
  }
};
