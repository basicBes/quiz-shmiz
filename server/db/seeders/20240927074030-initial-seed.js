'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Создаем 3 категории
    await queryInterface.bulkInsert('Categories', [
      {
        img: 'https://example.com/category1.jpg',
        name: 'Технологии',
        desc: 'Вопросы о технологиях и современных инновациях.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://example.com/category2.jpg',
        name: 'Наука',
        desc: 'Вопросы, охватывающие различные научные области.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: 'https://example.com/category3.jpg',
        name: 'История',
        desc: 'Вопросы о исторических событиях и личностях.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Получаем ID категорий
    const categories = await queryInterface.sequelize.query(
      `SELECT id from "Categories";`
    );

    const categoryRows = categories[0];

    // Создаем 4 вопроса для каждой категории
    await queryInterface.bulkInsert('Questions', [
      // Вопросы для категории Технологии
      {
        title: 'Какой самый популярный язык программирования в 2023 году?',
        wa1: 'Java',
        wa2: 'C++',
        wa3: 'Go',
        ra: 'Python',
        categoryId: categoryRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Кто считается отцом современных компьютеров?',
        wa1: 'Стив Джобс',
        wa2: 'Билл Гейтс',
        wa3: 'Алан Тьюринг',
        ra: 'Чарльз Бэббидж',
        categoryId: categoryRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Что обозначает аббревиатура RAM?',
        wa1: 'Rapid Access Module',
        wa2: 'Read Alert Memory',
        wa3: 'Reverse Address Memory',
        ra: 'Random Access Memory',
        categoryId: categoryRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Какая компания разработала iPhone?',
        wa1: 'Samsung',
        wa2: 'Nokia',
        wa3: 'Sony',
        ra: 'Apple',
        categoryId: categoryRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Вопросы для категории Наука
      {
        title: 'Какой химический символ обозначает воду?',
        wa1: 'CO2',
        wa2: 'CH4',
        wa3: 'H2SO4',
        ra: 'H2O',
        categoryId: categoryRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Какая планета известна как Красная планета?',
        wa1: 'Земля',
        wa2: 'Меркурий',
        wa3: 'Сатурн',
        ra: 'Марс',
        categoryId: categoryRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Какой газ растения поглощают из атмосферы?',
        wa1: 'Кислород',
        wa2: 'Азот',
        wa3: 'Метан',
        ra: 'Углекислый газ',
        categoryId: categoryRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Кто разработал теорию относительности?',
        wa1: 'Макс Планк',
        wa2: 'Галилео Галилей',
        wa3: 'Никола Тесла',
        ra: 'Альберт Эйнштейн',
        categoryId: categoryRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Вопросы для категории История
      {
        title: 'Кто был первым президентом США?',
        wa1: 'Томас Джефферсон',
        wa2: 'Джон Адамс',
        wa3: 'Джеймс Мэдисон',
        ra: 'Джордж Вашингтон',
        categoryId: categoryRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'В каком году началась Вторая мировая война?',
        wa1: '1918',
        wa2: '1941',
        wa3: '1936',
        ra: '1939',
        categoryId: categoryRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Кто была известна как Железная леди?',
        wa1: 'Индира Ганди',
        wa2: 'Жанна д\'Арк',
        wa3: 'Екатерина II',
        ra: 'Маргарет Тэтчер',
        categoryId: categoryRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Какая империя была под правлением Чингисхана?',
        wa1: 'Римская империя',
        wa2: 'Османская империя',
        wa3: 'Византийская империя',
        ra: 'Монгольская империя',
        categoryId: categoryRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Удаляем все записи из таблиц Questions и Categories
    await queryInterface.bulkDelete('Questions', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  },
};