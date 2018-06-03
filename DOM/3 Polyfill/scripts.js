/*Метод elem.matches(css) в некоторых старых браузерах поддерживается под старым именем matchesSelector или с префиксами, то есть: webkitMatchesSelector (старый Chrome, Safari), mozMatchesSelector (старый Firefox) или Element.prototype.msMatchesSelector (старый IE).

Создайте полифилл, который гарантирует стандартный синтаксис elem.matches(css) для всех браузеров.*/

function matches() {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
}




/*Метод elem.closest(css) для поиска ближайшего родителя, удовлетворяющего селектору css, не поддерживается некоторыми браузерами, например IE11-.

Создайте для него полифилл.*/

function closest() {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
}


/*Свойство textContent не поддерживается IE8. Однако, там есть свойство innerText.

Создаёте полифилл, который проверяет поддержку свойства textContent, и если её нет – создаёт его, используя innerText. Получится, что в IE8 «новое» свойство textContent будет «псевдонимом» для innerText.

Хотя свойство innerText и работает по-иному, нежели textContent, но в некоторых ситуациях они могут быть взаимозаменимы. Именно на них направлен полифилл.*/

function textContent() {
  if (document.documentElement.textContent === undefined) {
    Object.defineProperty(HTMLElement.prototype, "textContent", {
      get: function() {
        return this.innerText;
      },
      set: function(value) {
        this.innerText = value;
      }
    });
  }
}