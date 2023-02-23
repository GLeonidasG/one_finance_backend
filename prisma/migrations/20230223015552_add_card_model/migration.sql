-- CreateTable
CREATE TABLE "Card" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cardID" TEXT NOT NULL,
    "validFrom" DATETIME NOT NULL,
    "validThru" DATETIME NOT NULL,
    "belongsToUserID" INTEGER NOT NULL,
    CONSTRAINT "Card_belongsToUserID_fkey" FOREIGN KEY ("belongsToUserID") REFERENCES "User" ("ID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardID_key" ON "Card"("cardID");
