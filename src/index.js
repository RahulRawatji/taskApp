require('dotenv').config();
require('./db/mongooes');

// Creates the express App and run's it
const express = require('express');
const app = express();
const port = process.env.PORT || 3000

const userRouter = require('./router/user');
const taskRouter = require('./router/task');

// app.use((req,res,next) => {
//   console.log(req.path, req.method);
//   next();
// })

// Configure Express to parse JSON data from Request [REQUIRED]
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => console.log('Server is runnung at port: ' + port))