const router = require('express').Router();
//.js implied with using file names for require
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));
module.exports = router;