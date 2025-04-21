const categoryService = require('../services/categoryService');

const create = async (req, res, __next) => {
  try {
    const { name } = req.body;

    const createCategory = await categoryService.create({ name });

    if (!createCategory) {
      return res.status(400).json({ message: 'Bad Request' });
    }

    return res.status(201).json(createCategory);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAll = async (req, res, __next) => {
  try {
    const allCategories = await categoryService.getAll();

    return res.status(200).json(allCategories);
  } catch (error) {
    console.error(error);

    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
  getAll,
};