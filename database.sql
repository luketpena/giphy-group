CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

CREATE TABLE "images" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (100),
	"url" VARCHAR (300),
	"category_id" integer REFERENCES "category"

);

-- STRETCH
DROP TABLE "category_image";
CREATE TABLE "category_image" (
	"id" SERIAL PRIMARY KEY,
	"category_id" integer REFERENCES "category",
	"images_id" integer REFERENCES "images"
);

INSERT INTO "category_image" (
	VALUES (1, 1, 1)
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('vega'), ('cartoon'), ('nsfw'), ('meme');

-- Insert into images
INSERT INTO "images"
VALUES (1, 'britney spears GIF', 'https://media0.giphy.com/media/h3MqNDxRLZO8w/giphy.gif', 1);
