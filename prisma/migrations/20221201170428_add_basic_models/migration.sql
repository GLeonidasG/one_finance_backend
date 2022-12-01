-- CreateTable
CREATE TABLE "Record" (
    "ID" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "RecordTag" (
    "recordID" TEXT NOT NULL,
    "tagID" TEXT NOT NULL,

    PRIMARY KEY ("recordID", "tagID"),
    CONSTRAINT "RecordTag_recordID_fkey" FOREIGN KEY ("recordID") REFERENCES "Record" ("ID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecordTag_tagID_fkey" FOREIGN KEY ("tagID") REFERENCES "Tag" ("ID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "ID" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL
);
