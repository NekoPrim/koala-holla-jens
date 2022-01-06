const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST
koalaRouter.post('/', (req, res) => {
    let queryText = `
        INSERT INTO "koalas"
            ("name", "age", "gender", "ready_for_transfer", "notes")
        VALUES
            ($1, $2, $3. $4, $5)
    `;

    let queryParams = [
        req.body.name,
        req.body.age,
        req.body.gender,
        req.body.ready_for_transfer,
        req.body.notes
    ]

    pool.query(queryText, queryParams)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('POST failed', err);
            res.sendStatus(500);
        })
})

// PUT
koalaRouter.put('/:id', (req, res) => {
    console.log('id is ', req.params.id);
    console.log('true or false is ', req.body.koalaReady);
    
    let queryText= `
        UPDATE "koalas" SET "ready_to_transfer" = $1 WHERE "id" = $2
    `;

    let queryParams = [
        req.body.koalaReady,
        req.params.id
    ];

    pool.query(queryText, queryParams)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('PUT /koala failed', err);
            res.sendStatus(500);
        })
})

// DELETE

module.exports = koalaRouter;