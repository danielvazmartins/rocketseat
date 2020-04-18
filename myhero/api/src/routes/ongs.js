const express = require('express')
const router = express.Router()
const { celebrate, Segments, Joi } = require('celebrate')
const ongs = require('../controllers/ongs')

// Lista todas as Ongs
router.get('', (req, res) => {
    ongs.list((error, response) => {
        res.json(response)        
    })
})

// Cria uma nova Ong
router.post('', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        whatsapp: Joi.string().required().length(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}),(req, res) => {
    const { name, email, whatsapp, city, uf } = req.body

    ongs.create({ name, email, whatsapp, city, uf }, (error, response) => {
        if (error) return res.sendStatus(500)

        res.json(response)        
    })
})



module.exports = router