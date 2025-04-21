const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const { JWT_SECRET } = process.env;

const create = (req, res, __next) => {
  try {
    const payload = {
      displayName: req.body.displayName,
      email: req.body.email,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '15min',
      algorithm: 'HS256',
    });

    return res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
  
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAll = async (__req, res, __next) => {
  try {
    const getUser = await userService.getAll();

    if (!getUser) {
      return res.status(404).json({ message: 'User Not Found' });
    }

    return res.status(200).json(getUser);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res, __next) => {
  try {
    const { id } = req.params;
    const getUser = await userService.getById(id);

    if (!getUser) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(getUser);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
};