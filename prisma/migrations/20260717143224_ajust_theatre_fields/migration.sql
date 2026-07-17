/*
  Warnings:

  - You are about to drop the column `stade` on the `Theatre` table. All the data in the column will be lost.
  - Added the required column `state` to the `Theatre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Theatre" DROP COLUMN "stade",
ADD COLUMN     "state" TEXT NOT NULL;
