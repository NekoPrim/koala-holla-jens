CREATE TABLE "koalas" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "gender" VARCHAR(1) NOT NULL,
    "age" INTEGER,
    "ready_to_transfer" VARCHAR(1) DEFAULT 'N',
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

    ALTER TABLE "koalas" DROP COLUMN "ready_to_transfer"

    ALTER TABLE "koalas" ADD "ready_to_transfer" BOOLEAN DEFAULT FALSE