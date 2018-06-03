/*Напишите полифилл для метода remove для старых браузеров.

Вызов elem.remove():

Если у elem нет родителя – ничего не делает.
Если есть – удаляет элемент из родителя.*/

if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  var elem = document.body.children[0];

  elem.remove();


/*Напишите функцию insertAfter(elem, refElem), которая добавит elem после узла refElem.*/

function insertAfter(elem, refElem) {
  var parent = refElem.parentNode;
  var next = refElem.nextSibling;
  if (next) {
    return parent.insertBefore(elem, next);
  } else {
    return parent.appendChild(elem);
  }
}


/*Напишите функцию removeChildren, которая удаляет всех потомков элемента.*/

function removeChildren(elem) {
  elem.innerHTML = '';
}


/*Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте пункт и добавляйте его к UL.
Процесс прерывается, когда пользователь нажимает ESC или вводит пустую строку.*/

 var ul = document.createElement('ul');
    document.body.appendChild(ul);

    while (true) {
      var data = prompt("Введите текст для пункта списка", "");

      if (!data) {
        break;
      }

      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data));
      ul.appendChild(li);
    }