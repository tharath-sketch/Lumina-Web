import { Router } from "express";

import { loginForm } from "../controllers/login.controller";

const router = Router();

router.get("/form", loginForm);

export { router as loginRoutes };
