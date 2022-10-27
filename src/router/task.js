const express = require('express');

const auth = require('../middleware/auth'); 
const Task = require('../models/Task');

const router = express.Router();

router.post('/task', auth, async (req, res) => {

  const task = new Task({
    ...req.body,
    owner: req.user._id
  });
  try {
    const response = await task.save();
    res.json(response);
  } catch (error) {
    res.json(error.message)
  }

})

router.get('/task', auth, async (req, res) => {
  try {
    console.log(req.user);
    await req.user.populate({path:'task',
      match: {
        completed: false
      }
    }).execPopulate();

    res.json(req.user.tasks);

  } catch (error) {
    res.json(error)
  }
})

router.get('/task/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const response = await Task.findById(_id);;
    if (!response) {
      res.send('Id not found');
    }
    res.json(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router