import { Router } from "express";
const router = Router();

//controllers
import {
  create,
  getAll,
  findById,
  searchByName,
  update,
} from "../controllers/product.controller.js";

//middlewares
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post("/", authMiddleware, create);

router.get("/", getAll);

router.get("/search", searchByName);

router.get("/:id", authMiddleware, findById);

router.patch("/:id", authMiddleware, update);

export default router;
