const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const isTokenExist = (authorization, next) => {
  if (!authorization) {
    const err = new Error('Token not found');
    err.statusCode = 401;

    return next(err);
  }
};

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
  isTokenExist(authorization, next);
    const payload = jwt.verify(authorization, JWT_SECRET, (error) => {
      if (error) {
        const err = new Error('Expired or invalid token');
        err.statusCode = 401;
    
        return next(err);
      }
    });
    
    req.user = payload;

    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};