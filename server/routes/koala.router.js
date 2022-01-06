const express = require('express');
const koalaRouter = express.Router();
const pool = require('../public/module/pool');

// DB CONNECTION


// GET


// POST


// PUT


// DELETE
koalaRouter.delete('/:koalaId', (req, res) => {
    // check the url parameters
    console.log('koala id:', req.params.koalaId);

    // ready command for database
    // protect database from user
    let queryText = `
        DELETE FROM "koalas"
        WHERE id = $1;
    `;

    // ready koala id
    let queryParams = [
        req.params.koalaId
    ];

    // communicate with database
    pool.query(queryText, queryParams)
        .then((dbRes) => {
            // send success
            console.log('DELETE /koala success!');
            res.sendStatus(201);
        })
        .catch((err) => {
            // send failure
            console.log('DELETE /koala failure!');
            res.sendStatus(500);
        })
})// end DELETE



module.exports = koalaRouter;