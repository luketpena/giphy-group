const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  let queryString = `SELECT * FROM "favorites";`;
  pool.query(queryString).then(result=>{
    res.send(result.rows);
  }).catch(error=>{
    console.log('Error getting favorites from database:',error);
    res.sendStatus(400);
  });
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log(req.body);
  const {image_url, title} = req.body;
  let queryString = `INSERT INTO "favorites" ("title", "image_url") VALUES ($1, $2);`;

  pool.query(queryString, [title,image_url]).then(result=>{
    res.sendStatus(200);
  }).catch(error=>{
    res.sendStatus(400);
    console.log(error);    
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  let queryString = `DELETE FROM "favorites" WHERE "id"=$1;`;
  pool.query(queryString, [req.params.id]).then(result=>{
    res.sendStatus(200);
  }).catch(error=>{
    console.log('Error getting favorites from database:',error);
    res.sendStatus(400);
  });
});

module.exports = router;
