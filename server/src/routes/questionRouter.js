const questionRouter = require('express').Router();
const { Question } = require('../../db/models');

questionRouter.route('/').get(async (req, res) => {
  try {
    const allqQuestions = await Question.findAll();
    res.json(allqQuestions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

questionRouter.route('/:categoryId').get(async (req, res) => {
  try {
    const { categoryId } = req.params;
    if (!categoryId || isNaN(Number(categoryId))) {
      return res.status(400).json({ message: 'id должен быть числом' });
    }
    const questionsByCategory = await Question.findAll({ where: { categoryId } });
    if (questionsByCategory.length === 0) {
      return res.status(404).json({ message: 'Вопросы по данной категории не найдены' });
    }
    res.status(200).json(questionsByCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = questionRouter;
