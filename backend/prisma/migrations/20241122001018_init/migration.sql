-- CreateEnum
CREATE TYPE "CartStatus" AS ENUM ('ACTIVE', 'CHECKED_OUT');

-- CreateTable
CREATE TABLE "Products" (
    "productId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,
    "stockQuantity" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Cart" (
    "cartId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" "CartStatus" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cartId")
);

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;
