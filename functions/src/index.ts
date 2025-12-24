import express from "express";
import cors from "cors";
import { onRequest } from "firebase-functions/v2/https";
import { loginRoutes } from "./routes/login.route";

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/login", loginRoutes);

export const api = onRequest(app);
