const {Router} = require('express');
const axios = require('axios')
const router = Router();

router.get('/ping',(req, res, next) => {
    return res.send('pong')
})

module.exports = router;