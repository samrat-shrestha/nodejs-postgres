const {Router} = require('express');
const monster = require('./monsters');
const habitat = require('./habitats');
const live = require('./lives');
const meetup = require('./meetups');
const map = require('./maps');

const router = Router();

router.use('/monsters', monster);
router.use('/habitats', habitat);
router.use('/lives', live);
router.use('/meetups', meetup);
router.use('/maps', map);

module.exports = router;