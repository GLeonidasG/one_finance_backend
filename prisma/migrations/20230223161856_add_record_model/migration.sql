-- CreateTable
CREATE TABLE "Record" (
    "ID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "entryDate" DATETIME NOT NULL,
    "recordsFromCardId" INTEGER NOT NULL,
    CONSTRAINT "Record_recordsFromCardId_fkey" FOREIGN KEY ("recordsFromCardId") REFERENCES "Card" ("ID") ON DELETE RESTRICT ON UPDATE CASCADE
);
