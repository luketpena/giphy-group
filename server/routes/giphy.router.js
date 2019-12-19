const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

router.get('/search/:searchQuery', (req, res) => {
  let apiKey = process.env.API_KEY;
  console.log(req.params.searchQuery);
  axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${req.params.searchQuery}&limit=12`).then(response=>{
    console.log('FIND BABIES------------>',response.data.data);
    searchResults = [];
    for (let item of response.data.data) {
      searchResults.push({image_url: item.images.original.url, title: item.title})
    }
    console.log(searchResults);
    
    res.send(searchResults);
  }).catch(error=>{
    console.log(error);  
    res.sendStatus(400);
  })

});


module.exports = router;
