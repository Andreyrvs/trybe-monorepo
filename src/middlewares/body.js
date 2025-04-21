const loginService = require('../services/loginService');
const categoryService = require('../services/categoryService');

const isLoginValid = async (req, __res, next) => {
  const { email, password } = req.body;
  if (email.length === 0 || password.length === 0) {
    const err = new Error('Some required fields are missing');
    err.statusCode = 400;

    return next(err);
  } 

  const result = await loginService.getLogin(email, password);
  if (!result) {
    const err = new Error('Invalid fields');
    err.statusCode = 400;
  
    return next(err);
  }
  return next();
};

const isCategoryValid = async (req, __res, next) => {
  const { name } = req.body;
  if (!name) {
    const err = new Error('"name" is required');
  
    err.statusCode = 400;
  
    return next(err);
  }
  return next();
};

const isPostValid = async (req, __res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title.length || !content.length || !categoryIds.length) {
    const err = new Error('Some required fields are missing');
  
    err.statusCode = 400;
  
    return next(err);
  }
  if (!Array.isArray(categoryIds)) {
    const err = new Error('"categoryIds" not found');
  
    err.statusCode = 400;
  
    return next(err);
  }

  return next();
};

const isCategory = async (req, __res, next) => {
  const { categoryIds } = req.body;
  
  const result = await categoryService.getCategoryId(categoryIds);

  if (result !== categoryIds.length) {
    const err = new Error('"categoryIds" not found');
    
    err.statusCode = 400;
    
    return next(err);
  }

  return next();
};

module.exports = {
  isLoginValid,
  isCategoryValid,
  isPostValid,
  isCategory,
};
