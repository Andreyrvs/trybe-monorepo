'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BlogPosts = queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      published: {
        allowNull: false,
        type: 'TIMESTAMP',
      },
      updated: {
        allowNull: false,
        type: 'TIMESTAMP',
      },
    })

    return BlogPosts
  },

  down: async (queryInterface, __Sequelize) => {
    await queryInterface.dropTable('BlogPosts')
  }
};
