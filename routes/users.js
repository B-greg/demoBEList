var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  var array = Array.from({length: 20}, (_, i) => { return {id: i, name: `greg${i}`, lastname: `lastname${i}`} })
  res.end(JSON.stringify(array));
});


router.get('/:id', function(req, res, next) {
  var id= req.params.id
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({id, name: `greg${id}`, lastname: `lastname${id}`} ));
});

module.exports = router;
