/*
  Warnings:

  - You are about to drop the column `contnet` on the `blogs` table. All the data in the column will be lost.
  - Added the required column `content` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "contnet",
ADD COLUMN     "content" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "images" SET NOT NULL,
ALTER COLUMN "images" SET DATA TYPE TEXT;
