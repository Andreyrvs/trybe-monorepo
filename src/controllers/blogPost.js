const jwt = require('jsonwebtoken');
const blogPostService = require('../services/blogPostService');

const { JWT_SECRET } = process.env;
const create = async (req, res, __next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { authorization } = req.headers;

  const jwtDecoded = jwt.verify(authorization, JWT_SECRET, (__err, decoded) => decoded.email);
  
    const result = await blogPostService.create(
      { title, content, categoryIds, jwtDecoded },
    );

  return res.status(201).json(result);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
};