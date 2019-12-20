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
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
