const express = require('express')
const path = require("path")

const router = express.Router();
router.get('/premammals', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../static/pre-mammals.html"));
});

exports.router = router;