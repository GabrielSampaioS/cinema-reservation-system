/*
  Warnings:

  - Added the required column `address` to the `Theatre` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Theatre` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stade` to the `Theatre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Theatre" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "stade" TEXT NOT NULL;
