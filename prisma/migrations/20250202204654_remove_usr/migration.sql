/*
  Warnings:

  - The primary key for the `income` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "income" DROP CONSTRAINT "income_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "income_pkey" PRIMARY KEY ("id");
