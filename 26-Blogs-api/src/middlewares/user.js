const loginService = require('../services/loginService');
const userService = require('../services/userService');

const isValidDisplayName = (displayName, next) => {
  if (displayName.length < 8) {
    const err = new Error('"displayName" length must be at least 8 characters long');
    err.statusCode = 400;
    return next(err);
  }
};

const isValidPassword = (password, next) => {
  if (password.length < 6) {
    const err = new Error('"password" length must be at least 6 characters long');
    err.statusCode = 400;
    return next(err);
  }
};

const isValidEmail = (email, next) => {
  const regex = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;
  if (!regex.test(email)) {
      const err = new Error('"email" must be a valid email');
      err.statusCode = 400;
      return next(err);
  }
};

const validateUser = async (req, __res, next) => {
  const { displayName, email, password, image } = req.body;
  isValidDisplayName(displayName, next);
  isValidPassword(password, next);
  isValidEmail(email, next);

  const login = await loginService.getEmail(email);
  if (login) {
    const err = new Error('User already registered');
    err.statusCode = 409;
    return next(err);
  }
  await userService.user({ displayName, email, password, image });
  
  return next();
};

module.exports = {
  validateUser,
};