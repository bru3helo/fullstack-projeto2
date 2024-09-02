-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monsters" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "alignment" TEXT NOT NULL,

    CONSTRAINT "monsters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_key" ON "users"("user");
