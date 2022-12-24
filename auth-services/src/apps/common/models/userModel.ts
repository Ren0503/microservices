import { Sequelize, DataTypes, Model, Optional } from "sequelize";

const sequelize = new Sequelize()

export type UserAttributes = {
  id: string,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string,
  role: string,
  avatar: string,
  phone: string,
  gender: string,
  code: number,
}

export type UserCreationAttributes = Optional<UserAttributes, 'id'>

export class User extends Model<UserAttributes, UserCreationAttributes> {
  declare id: string;
  declare firstName: string;
  declare lastName: string;
  declare username: string;
  declare email: string;
  declare password: string;
  declare role: string;
  declare avatar: string;
  declare phone: string;
  declare gender: string;
  declare number: number;
}

User.init({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName:  {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'User',
  },
  avatar: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  code: {
    type: DataTypes.BIGINT,
  }
}, {
  sequelize,
  modelName: 'User'
})