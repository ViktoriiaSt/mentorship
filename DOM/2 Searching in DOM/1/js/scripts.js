//Найдите (получите в переменную) :

//Все элементы label внутри таблицы. Должно быть 3 элемента.
document.getElementById('age-table').getElementsByTagName('label');
//Первую ячейку таблицы (со словом "Возраст").
document.getElementById('age-table').getElementsByTagName('td')[0];
//Вторую форму в документе.
document.getElementsByTagName('form')[1];
//Форму с именем search, без использования её позиции в документе.
document.querySelector('form[name="search"]');
//Элемент input в форме с именем search. Если их несколько, то нужен первый.
document.querySelector('form[name="search"] input')
//Элемент с именем info[0], без точного знания его позиции в документе.
document.getElementsByName("info[0]")[0];
//Элемент с именем info[0], внутри формы с именем search-person.
document.querySelector('form[name="search-person"] [name="info[0]"]');