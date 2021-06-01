console.log('a start');

module.exports = 'a';

const b = require('./b');

console.log('在 a 中，b = %j', b);

module.exports = 'aa';

console.log('a end');
