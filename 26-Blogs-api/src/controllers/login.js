const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const { JWT_SECRET } = process.env;

const logIn = async (req, res, next) => {
  try {
    const { error, email } = req.body;

    if (error) return next(error);

    const emailId = await loginService.getEmail(email);

    const payload = {
      email: emailId.id,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '55m',
      algorithm: 'HS256',
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
  
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  logIn,
};