const express = require('express');
const router = express.Router();
const controller = require('./controllers/SomeController');

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/readme', controller.getData);
 
module.exports = router;