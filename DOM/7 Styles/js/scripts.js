    /*
     * Показывает уведомление, пропадающее через 1.5 сек
     *
     * @param options.top {number} вертикальный отступ, в px
     * @param options.right {number} правый отступ, в px
     * @param options.cssText {string} строка стиля
     * @param options.className {string} CSS-класс
     * @param options.html {string} HTML-текст для показа
     */
    function showNotification(options) {

      var notification = document.createElement('div');
      notification.className = "notification";
      if (options.cssText) {
        notification.style.cssText = options.cssText;
      }
      notification.style.top = (options.top || 0) + 'px'; 
      notification.style.right = (options.right || 0) + 'px';
      if (options.className) {
        notification.classList.add(options.className);
      }

      notification.innerHTML = options.html;
      document.body.appendChild(notification);

      setTimeout(function() {
        document.body.removeChild(notification);
      }, 1500);
    }

    var i = 0;
    setInterval(function() {
      showNotification({
        top: 10,
        right: 10,
        html: 'Привет ' + ++i,
        className: "welcome"
      });
    }, 2000);
