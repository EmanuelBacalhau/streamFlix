import express from "express";
import { adminJs, adminJSRouter } from "./adminjs";
import { sequelize } from "./database";

const app = express();
//      Caminho                     Rotas
app.use(adminJs.options.rootPath, adminJSRouter);
// amdinJs.options.rootPath é o caminho que foi definido lá no no arquivo de configuração do AdminJS (src/adminjs/index.ts)

// Falar ao express que essa pasta é estática
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log(`Server started successfully at port ${PORT}`);
        console.log("DB connection successfully");
    } catch (error) {
        console.log(error);
    }
});
