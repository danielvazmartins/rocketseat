const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('Funcionando')
})

// Ongs
const ongs = require('./ongs')
router.use('/ongs', ongs)

// Incidents
const incidents = require('./incidents')
router.use('/incidents', incidents)

module.exports = router