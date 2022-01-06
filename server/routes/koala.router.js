const express = require('express');
const koalaRouter = express.Router();
const pool = require('../public/module/pool');

// DB CONNECTION


// GET


// POST
koalaRouter.post('/', (req, res) => {
    //sQl query for putting a new row in the table
    let queryText = `
        INSERT INTO "koalas"
            ("name", "age", "gender", "ready_for_transfer", "notes")
        VALUES
            ($1, $2, $3. $4, $5)
    `;

    //saving the code from hax
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
    //testing what 'id' and 'koalaReady' is
    console.log('id is ', req.params.id);
    console.log('true or false is ', req.body.koalaReady);
    
    //sQl query to change ready_to_transfer to true 
    let queryText= `
        UPDATE "koalas" SET "ready_to_transfer" = $1 WHERE "id" = $2
    `;

    //NO HAX
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