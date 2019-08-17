const db = require('../data/db-config.js')

module.exports = {
    getUserById,
    addUser,
    updateUser
}

function getUserById(id) {
    return db('users').where({id}).first()
}

function addUser(user) {
    return db('users').insert(user)
}

function updateUser(updates, id) {
    return db('users').where({id}).update(updates)
}