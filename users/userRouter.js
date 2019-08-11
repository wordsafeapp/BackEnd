const express = require('express')
const knex = require('knex')

const db = require('../data/db-config.js')

const router = express.Router()

router.get('/', async ( req, res ) => {

})

// validation middlewares

async function validateUserId( req, res, next ) {
  const { id } = req.params
  try {
    const user = await db('Users').where({id})
    if(user.length) {
      req.user = userRouter
      next()
    } else  {
      res.status(404).json({ message: `User with id ${id} does not exist` })
    }
  }
  catch(error) {
    res.status(500).json({ message: "Error with validateUserId", error: error })
  }
}

function validateUser( req, res, next ) {
  const body = req.body
  if(!body.username) {
    res.status(400).json({ message: "Username is Required" })
  } else if (!body.password) {
    res.status(400).json({ message: "Password is Required" })
  } else if (!body.email) {
    res.status(400).json({ message: "Email is Required" })
  } else {
    req.user = body
    next()
  }
}
module.exports = router;
