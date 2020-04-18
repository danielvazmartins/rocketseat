const express = require('express')
const router = express.Router()

// Lista todas os Incidentes
router.get('', (req, res) => {
    res.sendStatus(204)
})

module.exports = router