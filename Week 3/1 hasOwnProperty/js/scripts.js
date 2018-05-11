var map = new Object;
map6={one: true, two: true, hasOwnProperty: true};

// Fix this call
//console.log(map.hasOwnProperty("one"));
console.log(Object.prototype.hasOwnProperty.call(map,'one'));
// → true