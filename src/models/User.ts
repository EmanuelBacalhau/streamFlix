import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";
import bcrypt from "bcrypt";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    birth: Date;
    email: string;
    password: string;
    role: "admin" | "user";
}

export interface UserCreationAttributes extends Optional<User, "id"> {}

export interface UserInstance
    extends Model<User, UserCreationAttributes>,
        User {}

export const User = sequelize.define<UserInstance, User>(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        birth: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        hooks: {
            beforeSave: async (user) => {
                if (user.isNewRecord || user.changed("password")) {
                    user.password = await bcrypt.hash(user.password, 10);
                }
            },
        },
    }
);
