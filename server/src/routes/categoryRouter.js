const categoryRouter = require('express').Router();
const { Category } = require('../../db/models');

categoryRouter.route('/').get(async (req, res) => {
  try {
    const allCategories = await Category.findAll();
    res.json(allCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = categoryRouter;
