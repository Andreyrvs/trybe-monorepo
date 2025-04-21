const { PostCategory, BlogPost, sequelize } = require('../database/models');

const create = async ({ title, content, categoryIds, jwtDecoded }) => {
  const result = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({
      title, content, userId: jwtDecoded, 
    }, { transaction: t });

    const newPostCategory = categoryIds.map((item) => ({
      postId: post.id, categoryId: item,
    }), []);

    await PostCategory.bulkCreate(newPostCategory, { transaction: t });
    return post;
  });
  console.log(result);
  return result;
};

module.exports = {
  create,
};
