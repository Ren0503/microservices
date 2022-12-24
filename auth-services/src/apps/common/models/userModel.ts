import { Sequelize, DataTypes, Model, Optional } from "sequelize";
import { USER_ROLE, USER_STATUS } from "../constants";

const sequelize = new Sequelize()

export type UserAttributes = {
  id: number,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string,
  role: string,
  birth: Date,
  avatar: string,
  phone: string,
  gender: string,
  status: string,
  code: number,
}

export type UserCreationAttributes = Optional<UserAttributes, 'id'>

export class User extends Model<UserAttributes, UserCreationAttributes> {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare username: string;
  declare email: string;
  declare password: string;
  declare role: string;
  declare birth: Date;
  declare avatar: string;
  declare phone: string;
  declare gender: string;
  declare status: string;
  declare code: number;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
    defaultValue: USER_ROLE.USER,
  },
  birth: {
    type: DataTypes.DATE,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
    unique: true,
  },
  gender: {
    type: DataTypes.STRING,
  },
  code: {
    type: DataTypes.BIGINT,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: USER_STATUS.ACTIVE,
  },
}, {
  sequelize,
  modelName: 'User',
  timestamps: true,
})