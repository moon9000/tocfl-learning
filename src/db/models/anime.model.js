module.exports = (sequelize, Sequelize) => {
  const Anime = sequelize.define(
    "Anime",
    {
      englishTitle: {
        type: Sequelize.STRING,
      },
      japaneseTitle: {
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.STRING,
      },
      endDate: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.STRING,
      },
      subtype: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      posterImage: {
        type: Sequelize.STRING,
      },
      episodeCount: {
        type: Sequelize.STRING,
      },
      episodeLength: {
        type: Sequelize.STRING,
      },
      totalLength: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return Anime;
};
