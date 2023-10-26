import { Router } from "express";
import {
  getAllPromociones,
  createNewPromocion,
  deletePromocionById,
  updatePromocionById,
} from "../controllers/promociones.controller.js";
import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt.js";

const router = Router();

router.get("/", getAllPromociones); // Obtener todas las promociones
router.post("/", createNewPromocion); // Crear una nueva promoción
router.delete("/:id", deletePromocionById); // Eliminar una promoción por su ID
router.put("/:id", updatePromocionById); // Actualizar una promoción por su ID

export default router;
