import "express-async-errors";
import "reflect-metadata";
import express, { json } from "express";
import helmet from "helmet";
import { carRouter } from "./routes/carRouter";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/cars", carRouter);
