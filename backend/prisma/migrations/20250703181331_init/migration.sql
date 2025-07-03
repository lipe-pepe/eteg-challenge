-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "favColor" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);
