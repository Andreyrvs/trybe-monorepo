const { Category } = require('../database/models');

const create = async ({ name }) => {
  const result = await Category.create({ name });

  return result;
};

const getAll = async () => {
  const result = await Category.findAll();

  return result;
};

const getCategoryId = async (categoryIds) => {
  const { count } = await Category.findAndCountAll({
    where: {
      id: categoryIds,
    },
  });

  return count;
};

module.exports = {
  create,
  getAll,
  getCategoryId,
};