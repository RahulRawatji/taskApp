const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {

  try {
    const token = req.header('authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'thisIsMyToken');
    const user = await User.findById({ _id: decoded._id, 'tokens.token': token });
    
    if (!user) {
      throw new Error()
    }
    req.user = user;
    next();
  } catch (e) {
    res.send({error:'pls Authenticate'});
  }
}

module.exports = auth;