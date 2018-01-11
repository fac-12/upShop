const router = require('express').Router();
const home = require('./home');
const search = require('./search');
const category = require('./category');

router.get('/', home.get);
router.get('/search', search.get);
router.get('/search/:category', category.get);

module.exports = router;
