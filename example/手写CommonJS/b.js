console.log('b start');

module.exports = 'b';

const a = require('./a');

console.log('在 b 中，a = %j', a);

module.exports = 'bb';

console.log('b end');
