
const genshin = require('genshin-api');

genshin.Characters('xiao').then((data) => {
  console.log(data) 
})