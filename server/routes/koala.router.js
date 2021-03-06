const express = require("express");
const koalaRouter = express.Router();
const pool = require("../public/module/pool");

// DB CONNECTION

// GET
koalaRouter.get("/", (req, res) => {
  const queryText = 'SELECT * FROM "koalas";';

  pool
    .query(queryText)
    .then((dbRes) => {
      res.send(dbRes.rows);
     })
    .catch((err) => {
      console.log("GET /songs failed", err);
      res.sendStatus(500);
    });
});

// POST
koalaRouter.post("/", (req, res) => {
  //sQl query for putting a new row in the table
  let queryText = `
        INSERT INTO "koalas"
            ("name", "age", "gender", "ready_to_transfer", "notes")
        VALUES
            ($1, $2, $3, $4, $5)
    `;

  //saving the code from hax
  let queryParams = [
    req.body.name,
    req.body.age,
    req.body.gender,
    req.body.ready_to_transfer,
    req.body.notes,
  ];

  pool
    .query(queryText, queryParams)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("POST failed", err);
      res.sendStatus(500);
    });
});

// PUT
koalaRouter.put('/:id', (req, res) => {
    //testing what 'id' and 'koalaReady' is
    console.log('id is ', req.params.id);
    console.log('transfer is ', req.body.ready_to_transfer);
    
    //sQl query to change ready_to_transfer to true 
   
  let queryText = `
    UPDATE "koalas" SET "ready_to_transfer" = $1 WHERE "id" = $2
  `;

  //NO HAX
  let queryParams = [req.body.ready_to_transfer, req.params.id];
console.log(queryText);
console.log(queryParams);
  pool
    .query(queryText, queryParams)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("PUT /koala failed", err);
      res.sendStatus(500);
    });
});

// DELETE
koalaRouter.delete("/:koalaId", (req, res) => {
  // check the url parameters
  console.log("koala id:", req.params.koalaId);

  // ready command for database
  // protect database from user
  let queryText = `
        DELETE FROM "koalas"
        WHERE id = $1;
    `;

  // ready koala id
  let queryParams = [req.params.koalaId];

  // communicate with database
  pool
    .query(queryText, queryParams)
    .then((dbRes) => {
      // send success
      console.log("DELETE /koala success!");
      res.sendStatus(201);
    })
    .catch((err) => {
      // send failure
      console.log("DELETE /koala failure!");
      res.sendStatus(500);
    });
}); // end DELETE

module.exports = koalaRouter;
