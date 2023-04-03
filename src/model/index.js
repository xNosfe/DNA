import Sequelize from 'sequelize';
import CadenaModel from './cadena.model.js';

const dbConfig = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "admin",
  DB: "adn",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Cadena = CadenaModel(sequelize, Sequelize);

export default db;
