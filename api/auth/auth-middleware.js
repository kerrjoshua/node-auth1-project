/*
  If the user does not have a session saved in the server

  status 401
  {
    "message": "You shall not pass!"
  }
*/
exports.restricted = (req, res, next) => {
  console.log('restricted_middleware')
  next()
}

/*
  If the username in req.body already exists in the database

  status 422
  {
    "message": "Username taken"
  }
*/
exports.checkUsernameFree = (req, res, next) => {
  console.log('checkUsernameFree')
  next()
}

/*
  If the username in req.body does NOT exist in the database

  status 401
  {
    "message": "Invalid credentials"
  }
*/
exports.checkUsernameExists = (req, res, next) => {
  console.log('checkUsernameExists')
  next()
}

/*
  If password is missing from req.body, or if it's 3 chars or shorter

  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
*/
exports.checkPasswordLength = (req, res, next) => {
  console.log('checkPasswordLength')
  next()
}

// Don't forget to add these to the `exports` object so they can be required in other modules
