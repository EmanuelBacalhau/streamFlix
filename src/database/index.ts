import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "streamflix_development",
    username: "streamflix",
    password: "streamflix",
    define: {
        underscored: true,
    },
});
