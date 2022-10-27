const express = require('express');

const auth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

router.post('/user', async (req, res) => {
  const user = new User(req.body);
  try {
    const data = await user.save();
    const token = await data.generateAuthToken();
    
    res.send({ user, token })
  } catch (error) {
    res.send(error.message)
  }
});


router.get('/user/me', auth, async (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    res.json(error)
  }
});

router.post('/user/login', async (req, res) => {
  try {
    const user = await User.findByCredential(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
  
    res.send({ user, token })
  } catch (error) {
    res.send(error);
  }

});

router.post('/user/logout', auth,async (req, res) => {
  console.log(req)
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !=  req.token 
    })

    await req.user.save() 

    res.send();

  } catch (e) {
    res.send(e);
  }
})



module.exports = router;