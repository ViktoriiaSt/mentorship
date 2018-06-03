//Task1
//Напишите код, который получит элемент HEAD.

//1
console.log(document.documentElement.children[0]);
//2
console.log(document.documentElement.firstChild);
//3
console.log(document.head);


//Напишите код, который получит UL
console.log(document.body.children[1]); //BODY

//Напишите код, который получит второй LI
console.log(document.body.children[1].children[1]);


//Task2
//Придумайте самый короткий код для проверки, пуст ли элемент elem.

//«Пустой» – значит нет дочерних узлов, даже текстовых.
if (elem.hasChildNodes()) { }
if (elem.childNodes.length===0) { }


if (!elem.childNodes.length) { }

if (!elem.firstChild) { }

if (!elem.lastChild) { }
