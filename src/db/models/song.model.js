module.exports = (sequelize, Sequelize) => {
  const Song = sequelize.define(
    "Song",
    {
      chTitle: {
        type: Sequelize.STRING,
      },
      enTitle: {
        type: Sequelize.STRING,
      },
      artist: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      chLyrics: {
        type: Sequelize.STRING,
      },
      enLyrics: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return Song;
};
