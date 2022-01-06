const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get('/koala', (req, res) => {
    const queryText = 'SELECT * FROM "koalas";';

    pool.query(queryText)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((err) => {
            console.log('GET /songs failed', err);
            res.sendStatus(500);
        })
})

// POST


// PUT


// DELETE

module.exports = koalaRouter;