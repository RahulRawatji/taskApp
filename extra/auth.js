const bcrypt = require('bcrypt');

async function hashing(password) {
  const hashed = await bcrypt.hash(password, 8);
  console.log(password);
  console.log(hashed);

  const isMatch = await bcrypt.compare(password, hashed);
  console.log(isMatch);

  
  const isMatch2 = await bcrypt.compare("incorrexr", hashed);
  console.log(isMatch2);

}
const password = 'RaymondRed'

hashing(password);