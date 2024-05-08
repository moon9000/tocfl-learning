module.exports = {
  HOST: process.env.REACT_APP_DB_HOST,
  USER: process.env.REACT_APP_DB_USER,
  PASSWORD: process.env.REACT_APP_DB_PASSWORD,
  DB: process.env.REACT_APP_DB_NAME,
  dialect: "postgres",
  pool: {
    max: 10, //maximum number of connection in pool
    min: 0,
    acquire: 30000, //maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000,
  }
};
