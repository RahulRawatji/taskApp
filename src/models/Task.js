const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
}, {
  timestamps: true
});

const Task = mongoose.model('task',taskSchema);

module.exports = Task;