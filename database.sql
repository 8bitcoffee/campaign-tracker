-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "campaign" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (120),
    "active" BOOLEAN DEFAULT 'TRUE',
    "code" VARCHAR (12) UNIQUE NOT NULL,
    "dm" BIGINT NOT NULL,
    "copper" BIGINT DEFAULT '0'
);

CREATE TABLE "character" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(40),
    "user" BIGINT NOT NULL,
    "alive" BOOLEAN DEFAULT 'TRUE',
    "copper"  BIGINT DEFAULT '0'
);

CREATE TABLE "character_campaign" (
    "id" SERIAL PRIMARY KEY,
    "chararcter_id" BIGINT NOT NULL,
    "campaign_id" BIGINT NOT NULL
);

CREATE TABLE "character_loot" (
    "id" SERIAL PRIMARY KEY,
    "character_id" BIGINT NOT NULL,
    "item" VARCHAR(1200)
);

CREATE TABLE "campaign_loot" (
    "id" SERIAL PRIMARY KEY,
    "campaign_id" BIGINT NOT NULL,
    "item" VARCHAR(1200)
);