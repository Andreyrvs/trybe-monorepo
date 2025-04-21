'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostCategories = queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });

    return PostCategories;
  },

  down: async (queryInterface, __Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};
