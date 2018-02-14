const express = require('express');
const router = express.Router();
const users = require('../controllers/Users');

router.get('/', users.index);
router.post('/', users.create);
router.put('/:id/update', users.update);
router.delete('/:id/delete', users.delete);
router.get('/:id/detail', users.getUserInfos);

module.exports = router;