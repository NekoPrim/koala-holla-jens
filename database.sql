CREATE TABLE "koalas" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "gender" TEXT(1) NOT NULL,
    "age" INTEGER(2),
    "ready_to_transfer" BOOLEAN DEFAULT FALSE,
    "notes" VARCHAR(255)
    );

    INSERT INTO "koalas"
    ("name", "gender", "age", "notes")
    VALUES
    ('Scotty', 'M', 4, 'Born in Guatamala'),
    ('Jean', 'F', 5, 'Allergic to lots of lava'),
    ('Ororo', 'F', 7, 'Loves listening to Paula (Abdul)'),
    ('Logan', 'M', 15, 'Loves the sauna'),
    ('Charlie', 'M', 9, 'Favorite band is Nirvana'),
    ('Betsy', 'F', 4, 'Has a pet iguana');