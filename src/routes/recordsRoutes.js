const express = require('express');
const router = express.Router();
const recordsController = require('../controllers/recordsController');

router.get('/', recordsController.getRecords);
router.post('/', recordsController.createRecord);
router.patch('/:id', recordsController.updateRecord);

module.exports = router;
