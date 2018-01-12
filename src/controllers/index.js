const router = require('express').Router();
const home = require('./home');
const search = require('./search');
const category = require('./category');
const place = require('./place');
const add = require('./add');
const checkExists = require('./checkExists');
const addDetails = require('./addDetails');

router.get('/', home.get);
router.get('/search', search.get);
router.get('/search/:category', category.get);
router.get('/search/:category/:place', place.get);
router.get('/add', add.get)
router.get('/checkExists', checkExists.get);
router.get('/add/details', addDetails.get);
// router.get('/add/checkExists'; 

module.exports = router;
