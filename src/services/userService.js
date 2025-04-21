const { User } = require('../database/models');

const getAll = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return result;
};

const getById = async (id) => {
  const result = await User.findByPk(id, { 
    attributes: { exclude: ['password'] } });

  return result;
};

const user = async ({ displayName, email, password, image }) => {
  const result = await User.create({ displayName, email, password, image });

  return result;
};

module.exports = {
  user,
  getAll,
  getById,
};