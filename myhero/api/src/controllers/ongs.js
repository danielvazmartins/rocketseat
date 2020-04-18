const db = require('../database')

const list = (callback) => {
    db('ongs').select('*')
    .then(result => callback(null, result))
}

const create = (data, callback) => {
    db('ongs').insert(data)
    .then(result => callback(null, result))
    .catch(error => {
        console.log(error)
        callback(error)
    })
}

module.exports = { list, create }