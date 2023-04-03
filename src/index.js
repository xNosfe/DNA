import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import adnRoute from "./routes/adn.js";
import db from "./model/index.js";
dotenv.config();

const app = express();

db.sequelize.sync();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(express.json());
app.use("/", adnRoute);

app.get("/home", (req, res) => res.send("Esto es una prueba para Guros"));

app.listen(process.env.PORT);

console.log("Server is running");
