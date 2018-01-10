const router = require('express').Router();

router.get('/', (req, res) => {
	res.send("Express is working");
})

module.exports = router;