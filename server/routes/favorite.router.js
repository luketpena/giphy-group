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
    console.log('ADD RESULT',result);
    
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
  //Query Strings
  let queryString1 = `DELETE FROM "category_favorites" WHERE "favorites_id"=$1;`;
  let queryString2 = `DELETE FROM "favorites" WHERE "id"=$1;`;

  //Query to dependant tables
  pool.query(queryString1, [req.params.id]).then(result=>{
    pool.query(queryString2, [req.params.id]).then(result=>{
      res.sendStatus(200);
    }).catch(error=>{
      console.log('Q2 Error deleting favorites from database:',error);
      res.sendStatus(400);
    })
  }).catch(error=>{
    console.log('Q1 Error deleting favorites from database:',error);
    res.sendStatus(400);
  });
});

module.exports = router;
