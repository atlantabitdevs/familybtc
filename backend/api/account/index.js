const express = require('express');
const router = express();

const { getAccountBalance } = require('./accountController');

router.get('/:username/balance', getAccountBalance);

module.exports = router;
