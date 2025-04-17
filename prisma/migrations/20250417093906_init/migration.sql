-- CreateTable
CREATE TABLE "Adherent" (
    "id_adherent" SERIAL NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prenom" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" VARCHAR(10) NOT NULL,
    "goal" VARCHAR(255),
    "nombre_sceance_restantes" INTEGER NOT NULL DEFAULT 0,
    "nombre_heures_restantes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Adherent_pkey" PRIMARY KEY ("id_adherent")
);

-- CreateIndex
CREATE UNIQUE INDEX "Adherent_email_key" ON "Adherent"("email");
