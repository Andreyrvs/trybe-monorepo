const { User } = require('../database/models');

const getLogin = async (email, password) => {
  const result = await User.findOne({
    where: { email, password },
  });

  return result;
};
const getEmail = async (email) => {
  const result = await User.findOne({
    where: { email },
  });

  return result;
};

module.exports = {
  getLogin,
  getEmail,
};