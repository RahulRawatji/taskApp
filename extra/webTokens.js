const jwt = require('jsonwebtoken');

const myfunction = async () => {
  const token = jwt.sign({ _id: "Red123" }, 'newfunction', { expiresIn: '7 days' });
  console.log(token);

  const payload = jwt.verify(token, "newfunction");
  console.log(payload)
};

myfunction();
