/*Получите div в переменную.
Получите значение атрибута "data-widget-name" в переменную.*/

 var div = document.getElementById('widget');

var widgetName = div.getAttribute('data-widget-name');

var widgetName = div.dataset.widgetName;