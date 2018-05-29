// fix solution at reduce in accordance to MDN document

//var inputs = process.argv.slice(2);
//var result = inputs.map((x) => x[0]).reduce((result, x) => result + x);
//
//console.log(result);

//my result:

var inputs = process.argv.slice(2);
var result = inputs.map(x => x.charAt(0)).reduce((a, b) => a + b);
console.log(result);