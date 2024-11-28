import express from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} from "../controllers/cartController";

const router = express.Router();

router.get("/cart", getCart); // Obtener productos del carrito
router.post("/cart", addToCart); // Agregar un producto al carrito
router.put("/cart", updateCartItem); // Actualizar cantidad
router.delete("/cart/:cardId", removeFromCart); // Eliminar un producto
router.delete("/cart", clearCart); // Vaciar el carrito

export default router;
