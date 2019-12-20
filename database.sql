-- category table 
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);
​
-- images table
CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (100),
	"url" VARCHAR (300)
);

DROP TABLE "favorites";
​
-- STRETCH (category_image table)
DROP TABLE "category_image";
CREATE TABLE "category_favorites" (
	"id" SERIAL PRIMARY KEY,
	"category_id" integer REFERENCES "category",
	"favorites_id" integer REFERENCES "favorites"
);
​
INSERT INTO "category_favorites" (
	VALUES (1, 1, 1), (2, 2, 1), (3, 3, 1)
);
​
​
​
-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('vega'), ('cartoon'), ('nsfw'), ('meme');
​
-- Insert into images
INSERT INTO "favorites" ("title", "url")
VALUES ('britney spears GIF', 'https://media0.giphy.com/media/h3MqNDxRLZO8w/giphy.gif');
​
​
--SELECT COUNT("images"."id"), "images"."title" as "title" FROM "images" 
--JOIN "category_image" on "category_image"."images_id" = "images"."id"
--GROUP BY "images"."title";
--Collapse
