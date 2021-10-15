const router = require('express').Router();

const apiRoutes = require('./api-route');
const htmlRoutes = require('./html-route.js');


router.use(apiRoutes);
router.use(htmlRoutes);

router.use((req, res) => {
    res.status(404).end();
  });
  

module.exports = router;