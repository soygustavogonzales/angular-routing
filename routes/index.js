var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile('views/index.html');
});
router.get('/pages/:page',function(req,res){
	res.sendfile(['views/pages/',req.params.page].join(""))
})
module.exports = router;
