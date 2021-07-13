module.exports = (sequelize, Sequelize) => {
  const Word = sequelize.define("Word", {
    chinese: {
      type: Sequelize.STRING,
    },
    pinyin: {
      type: Sequelize.STRING,
    },
    english: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    level: {
      type: Sequelize.STRING,
    },
    sentence_ch: {
      type: Sequelize.STRING,
    },
    sentence_eng: {
      type: Sequelize.STRING,
    },
  });

  return Word;
};
