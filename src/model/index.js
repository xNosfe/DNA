import Sequelize from 'sequelize';
import CadenaModel from './cadena.model.js';
import * as dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  HOST: "localhost",
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: "postgres",
};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Cadena = CadenaModel(sequelize, Sequelize);

export default db;
