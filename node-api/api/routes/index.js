const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const message = "Route INDEX";
    res.send(message);
    console.log(message);
});

module.exports = router;