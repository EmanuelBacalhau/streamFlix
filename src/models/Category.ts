import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Category {
    id: number;
    name: string;
    position: number;
}

export interface CategoryCreationAttributes extends Optional<Category, "id"> {}

export interface CategoryInstance
    extends Model<Category, CategoryCreationAttributes>,
        Category {}

export const Category = sequelize.define<CategoryInstance, Category>(
    "Category",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        position: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }
);
