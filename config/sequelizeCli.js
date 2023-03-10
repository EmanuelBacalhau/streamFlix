// Arquivo que a sequelize-cli irá utilizar para se conectar ao banco
module.exports = {
    development: {
        dialect: "postgres",
        host: "localhost",
        port: "5432",
        database: "streamflix_development",
        username: "streamflix",
        password: "streamflix"
    }
};
