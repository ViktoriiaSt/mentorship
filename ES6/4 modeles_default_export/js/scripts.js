const PI = 3.141592;

var _sqrt = function(s, x, last){
  return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};
function sqrt(s){
  return _sqrt(s, s/2.0, 0.0);
};
function square(x) {
  return x * x;
};

export default {
  PI: PI,
  square: square,
  sqrt: sqrt
};


var arg1 = process.argv[2];
var arg2 = process.argv[3];

import Math from './solution-math';
console.log(Math.PI);
console.log(Math.sqrt(+arg1));
console.log(Math.square(+arg2));