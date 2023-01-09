/*
  Warnings:

  - Added the required column `status` to the `Shopping` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Shopping" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "payment" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "totalValue" DECIMAL NOT NULL,
    "idUser" TEXT NOT NULL,
    CONSTRAINT "Shopping_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Shopping" ("id", "idUser", "payment", "totalValue") SELECT "id", "idUser", "payment", "totalValue" FROM "Shopping";
DROP TABLE "Shopping";
ALTER TABLE "new_Shopping" RENAME TO "Shopping";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
