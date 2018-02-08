const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const message = "Appel à la route INDEX";
    console.log(message);
    res.send(message);
    
});

module.exports = router;