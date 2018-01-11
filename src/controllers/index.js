const router = require('express').Router();
const home = require('./home');
const search = require('./search');
const category = require('./category');
const place = require('./place');

router.get('/', home.get);
router.get('/search', search.get);
router.get('/search/:category', category.get);
router.get('/search/:category/:place', place.get);
// router.get('/add/checkExists'; 

module.exports = router;
