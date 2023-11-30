/*
  Warnings:

  - You are about to drop the `techOnProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "techOnProject";

-- CreateTable
CREATE TABLE "_projectsTotechnology" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_projectsTotechnology_AB_unique" ON "_projectsTotechnology"("A", "B");

-- CreateIndex
CREATE INDEX "_projectsTotechnology_B_index" ON "_projectsTotechnology"("B");
