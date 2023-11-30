/*
  Warnings:

  - You are about to drop the `_projectsTotechnology` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "_projectsTotechnology";

-- CreateTable
CREATE TABLE "projectTech" (
    "projectId" TEXT NOT NULL,
    "techId" TEXT NOT NULL,

    CONSTRAINT "projectTech_pkey" PRIMARY KEY ("projectId","techId")
);
