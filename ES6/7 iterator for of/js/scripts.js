//Fix broken solution for iterator_for_of.

//const max = +process.argv[2];
//let FizzBuzz = {
//  [Symbol.iterator]() {
//    let num = 1;
//    return {
//      next() {
//        if (num > max) {
//          return { done: true };
//        }
//        let value = num;
//        if (value % 15 === 0) {
//          value = 'FizzBuzz';
//        } else if (value % 3 === 0) {
//          value = 'Fizz';
//        } else if (value % 5 === 0) {
//          value = 'Buzz';
//        }
//        num++;
//        return { done: false, value: value };
//      }
//    }
//  }
//}
//
//for (var n of FizzBuzz) {
//  console.log(n);
//}


const max = process.argv[2];

let FizzBuzz = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i > max - 1) return {done: true};
        i++;
        let str = '';
    
        if (i % 15 === 0) {
          str = 'FizzBuzz';
        } else if (i % 3 === 0) {
          str = 'Fizz';
        } else if (i % 5 === 0) {
          str = 'Buzz';
        } else {
          str = i;
        }

        return {done:false, value: str};
      }
    };
  }
};

for (var n of FizzBuzz) {
  console.log(n);
};