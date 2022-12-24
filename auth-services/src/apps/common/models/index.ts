import pg from "pg";
import { Sequelize } from "sequelize";
import { User } from "./userModel";

pg.defaults.ssl = false

const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
});
(async () => await sequelize.sync({ alter: true }))

export {
  User
};
