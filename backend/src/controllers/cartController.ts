import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// Obtener productos del carrito
export const getCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const cart = await prisma.cart.findMany({
      where: { status: "ACTIVE" },
      include: { product: true }, // Incluye los detalles del producto relacionado
    });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el carrito" });
  }
};
// Agregar un producto al carrito
export const addToCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId, quantity } = req.body;
    // Verifica si el producto existe en la base de datos
    const productExists = await prisma.products.findUnique({
      where: { productId },
    });
    if (!productExists) {
      res.status(400).json({ message: "El producto no existe" });
      return;
    }

    // Verifica si hay suficiente stock
    if (productExists.stockQuantity < quantity) {
      res.status(400).json({ message: "Stock insuficiente" });
      return;
    }

    // Verificar si ya existe en el carrito
    const existingCartItem = await prisma.cart.findFirst({
      where: { productId, status: "ACTIVE" },
    });
    if (existingCartItem) {
      // Si ya está, actualiza la cantidad
      const updatedCartItem = await prisma.cart.update({
        where: { cartId: existingCartItem.cartId },
        data: { quantity: existingCartItem.quantity + quantity },
      });
      res.json(updatedCartItem);
      return;
    } else {
      // Si no está, lo añade al carrito
      const newCartItem = await prisma.cart.create({
        data: {
          product: { connect: { productId } }, // Conectar con el producto existente
          quantity,
          status: "ACTIVE", // Estado predeterminado
        },
      });
      res.status(201).json(newCartItem);
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al agregar el producto al carrito" });
  }
};

// Actualizar cantidad de un producto en el carrito
export const updateCartItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { cartId, quantity } = req.body;
    const updatedCartItem = await prisma.cart.update({
      where: { cartId },
      data: { quantity },
    });
    res.json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la cantidad del producto" });
  }
};
// Eliminar un producto del carrito
export const removeFromCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { cartId } = req.params;
    await prisma.cart.delete({
      where: { cartId },
    });
    res.status(204).send(); // No retorna contenido, solo confirma la eliminación
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto del carrito" });
  }
};
// Vaciar el carrito
export const clearCart = async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.cart.deleteMany({
      where: { status: "ACTIVE" },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error al vaciar el carrito" });
  }
};

