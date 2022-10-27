const express = require('express');
const mongooes = require('mongoose');

const app = express();

//Creating a connection
mongooes.connect('mongodb+srv://mongoDb:247mongoDB@cluster0.pxqbufa.mongodb.net/fullStack').then((response) => console.log('connected')).catch((error) => console.log(error));

//Create a Model or Schema which is a structure of a collection 
const User = mongooes.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number
  },
  password: {
    type: String,
    required: true
  }
});

//Create an instance of the Model
const me = new User({
  name: 'alpha',
  age: 34,
  password:"one2123"
});

//To save to DB use methods on instance

me.save().then(response=>console.log(response)).catch(error=>console.log(error))




// const connect = mongooes.connection
// console.log(connect);
// const model = mongooes.model('ToDos', {
//   name: String,
  
// })

// const makeModel = async () => {
//   const response = await model.createCollection();
//   console.log(response);
// };

// const putData = async() => {
//   const data = await model.create({name:'kumar'});
//   console.log(data);
  
// }
// makeModel();
// putData();

app.listen(3000,()=>console.log('Server is running on prot 3000'));