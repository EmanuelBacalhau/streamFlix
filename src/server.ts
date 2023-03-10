import express from "express";
import { sequelize } from "./database";

const app = express();

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
