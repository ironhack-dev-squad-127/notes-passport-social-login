const express = require('express');
const ensureLogin = require("connect-ensure-login");
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

function checkConnected(req,res,next) {
  if (req.user) next()
  else res.redirect('/login')
}

router.get('/secret', checkConnected, (req, res, next) => {
  res.render('secret');
});

module.exports = router;
