const express = require('express')

const router = express.Router()

const Users = require('./userModel.js')

router.get('/', async ( req, res ) => {

})

router.get('/:id', validateUserId, ( req, res ) => {
  res.status(200).json(req.user)
})

router.post('/', validateUser, async ( req, res ) => {
  const newUser = req.body
  try {
    const user = await Users.addUser(newUser)
    res.status(201).json(user)
  }
  catch(error) {
    res.status(500).json(error)
  }
})

// validation middlewares

async function validateUserId( req, res, next ) {
  const { id } = req.params
  try {
    const user = await Users.getUserById(id)
    if(user.length) {
      req.user = user
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
