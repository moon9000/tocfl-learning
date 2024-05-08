const sequelize = new Sequelize(process.env.NODE_ENV_DB_NAME, process.env.NODE_ENV_DB_USER, process.env.NODE_ENV_DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
  })