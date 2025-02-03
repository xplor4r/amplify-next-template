/*
  Warnings:

  - Added the required column `user_id` to the `income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "income" ADD COLUMN     "user_id" TEXT NOT NULL;
