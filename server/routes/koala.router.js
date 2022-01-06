const express = require('express');
const koalaRouter = express.Router();
const pool = require('../public/module/pool');

// DB CONNECTION


// GET


// POST


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