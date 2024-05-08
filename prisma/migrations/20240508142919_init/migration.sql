-- CreateTable
CREATE TABLE "Animes" (
    "id" SERIAL NOT NULL,
    "englishTitle" VARCHAR(255),
    "japaneseTitle" VARCHAR(255),
    "startDate" VARCHAR(255),
    "endDate" VARCHAR(255),
    "year" VARCHAR(255),
    "subtype" VARCHAR(255),
    "status" VARCHAR(255),
    "posterImage" VARCHAR(255),
    "episodeCount" VARCHAR(255),
    "episodeLength" VARCHAR(255),
    "totalLength" VARCHAR(255),

    CONSTRAINT "Animes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Songs" (
    "id" SERIAL NOT NULL,
    "chTitle" VARCHAR(255),
    "enTitle" VARCHAR(255),
    "artist" VARCHAR(255),
    "year" VARCHAR(255),
    "description" VARCHAR(255),
    "chLyrics" VARCHAR(255),
    "enLyrics" VARCHAR(255),

    CONSTRAINT "Songs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postgres" (
    "id" SERIAL NOT NULL,
    "chinese" VARCHAR(255),
    "pinyin" VARCHAR(255),
    "english" VARCHAR(255),
    "type" VARCHAR(255),
    "level" VARCHAR(255),
    "sentence_ch" VARCHAR(255),
    "sentence_eng" VARCHAR(255),

    CONSTRAINT "postgres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tocf-learning" (
    "id" BIGINT NOT NULL,
    "chinese" TEXT,
    "pinyin" TEXT,
    "english" TEXT,
    "sentence_ch" TEXT,
    "sentence_eng" TEXT,
    "level" TEXT,

    CONSTRAINT "tocf-learning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tocfl-learning" (
    "id" SERIAL NOT NULL,
    "chinese" VARCHAR(255),
    "pinyin" VARCHAR(255),
    "english" VARCHAR(255),
    "type" VARCHAR(255),
    "level" VARCHAR(255),
    "sentence_ch" VARCHAR(255),
    "sentence_eng" VARCHAR(255),

    CONSTRAINT "tocfl-learning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "roleId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("roleId","userId")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
