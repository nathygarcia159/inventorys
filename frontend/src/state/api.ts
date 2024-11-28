import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Tipos de datos
export interface Product {
  productId: string;
  name: string;
  descripcion: string;
  price: number;
  color: string;
  rating?: number;
  stockQuantity: number;
}

export interface NewProduct {
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

export interface CartItem {
  cartId: string;
  productId: string;
  quantity: number;
  status: string;
  product: Product;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Products", "Cart"],
  endpoints: (build) => ({
    // Obtener productos del carrito
    getCart: build.query<CartItem[], void>({
      query: () => ({
        url: "/cart",
      }),
      providesTags: ["Cart"],
    }),

    // Agregar producto al carrito
    addToCart: build.mutation<CartItem, { productId: string; quantity: number }>({
      query: ({ productId, quantity }) => ({
        url: "/cart",
        method: "POST",
        body: { productId, quantity },
      }),
      invalidatesTags: ["Cart"],
    }),

    // Actualizar cantidad de un producto en el carrito
    updateCartItem: build.mutation<CartItem, { cartId: string; quantity: number }>({
      query: ({ cartId, quantity }) => ({
        url: `/cart/${cartId}`,
        method: "PUT",
        body: { quantity },
      }),
      invalidatesTags: ["Cart"],
    }),

    // Eliminar un producto del carrito
    removeFromCart: build.mutation<void, { cartId: string }>({
      query: ({ cartId }) => ({
        url: `/cart/${cartId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    // Vaciar el carrito
    clearCart: build.mutation<void, void>({
      query: () => ({
        url: "/cart",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    // Obtener productos
    getProducts: build.query<Product[], string | void>({
      query: (search) => ({
        url: "/products",
        params: search ? { search } : {}, // Agregar parámetros de búsqueda si hay uno
      }),
      providesTags: ["Products"],
    }),

    // Crear un nuevo producto
    createProduct: build.mutation<Product, NewProduct>({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
} = api;
