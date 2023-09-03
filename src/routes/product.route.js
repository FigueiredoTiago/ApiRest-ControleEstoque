import { Router } from "express";
const router = Router();

//controllers
import { create, getAll } from "../controllers/product.controller.js";

router.post("/", create);

router.get("/", getAll);

export default router;