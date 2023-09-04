import { Router } from "express";
const router = Router();

//controllers
import { create, getAll } from "../controllers/product.controller.js";

//middlewares
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post("/", authMiddleware, create);

router.get("/", getAll);

export default router;
