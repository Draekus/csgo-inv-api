var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/inventory', function (req, res, next) {
  res.send('test succusful');

  let steamID64 = '76561198023486836';
  let inventory_url = `https://steamcommunity.com/inventory/${steamID64}/730/2?l=english`;
  let inventory_data = [];

  function get_inventory(url) {
    axios
      .get(inventory_url)
      .then(function (response) {
        // handle success
        inventory_data = response.data.descriptions;
        let icon = `http://cdn.steamcommunity.com/economy/image/${inventory_data[10].icon_url}`;
        console.log(icon);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  get_inventory(inventory_url);
  F;
});

module.exports = router;
