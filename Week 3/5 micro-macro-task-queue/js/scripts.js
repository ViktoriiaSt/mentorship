//1. Простав порядок виведення в консоль(можеш коментами проставити порядок)
//2. Запусти код і провірь себе
//3. Якщо є розбіжності з твоєю відповіддю спробуй зрозуміти чому

const intervalId = setInterval(() => {
  console.log('setInterval');
}, 0);

setTimeout(() => {
  console.log('setTimeout 1');

  const promise = new Promise((resolve, reject) => {
    resolve('then 4');
  });

  promise
    .then((value) => {
      console.log(value);

      setTimeout(() => {
        console.log('setTimeout 2');
        clearInterval(intervalId);
      }, 0);
    });
}, 0);

const promise = new Promise((resolve, reject) => {
  resolve('then 1');
});

promise
  .then((value) => {
    console.log(value);
    return 'then 2';
  })
  .then((value) => {
    console.log(value);

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 0, 'then 3');
    });
  })
  .then((value) => {
    console.log(value);
  });

//expectation
//then 1   then 2   Promise?   setInterval   setTimeout1   then 4   then 3   setTimeout2

//reality
//then 1   then 2   Promise{<pending>}   setInterval   setTimeout1   then 4   then 3    setInterval setInterval setTimeout2