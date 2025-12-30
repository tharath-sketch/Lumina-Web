import { Router } from "express";

import { getDashboard } from "../controllers/home.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.use(authMiddleware);

router.get("/dashboard", getDashboard);

export { router as homeRoutes };
