import express from "express";
import cors from "cors";
import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

import { loginRoutes } from "./routes/login.route";
import { homeRoutes } from "./routes/home.route";

admin.initializeApp();

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/home", homeRoutes);

export const api = onRequest(app);
