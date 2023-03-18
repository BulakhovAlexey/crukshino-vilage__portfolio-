// Включить/выключить FLS (Full Logging System) (в работе)
//window["FLS"] = true;

// Соединение файла основного стиля
import "../scss/style.scss"

// ========================================================================================================================================================================================================================================================
// Функциональность ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js"

/* Проверка поддержки webp, Добавление класса webp или же no-webp для HTML */
/* (i) Требуется для правильного отображения webp от css */
flsFunctions.isWebp()

/* Добавление класса touch для HTML Если браузер мобильный */
flsFunctions.addTouchClass()

/* Добавление loaded для HTML После полной загрузки страницы */
flsFunctions.addLoadedClass()

/* Модуль для работы с меню (Бургер) */
// flsFunctions.menuInit();

// Добавление BG у хедера при скроле, добавляет к header класс showBg
//flsFunctions.addBgToHeader();

// учет высоты адресной строки для блоков 100VH on mobile
// CSS: к элементу которому нужно задать 100VH помимо height: 100% задать height: calc(var(--vh, 1vh) * 100);
// HTML: Добавить атр data-fullscreen

// flsFunctions.fullVHfix();

/*
модуль "спойлери"
Сниппет (HTML): spollers
базовые стили scss/base/spollers»;
data-spollers="768,min" включится при ширине меньше указанной ( max - больше)
data-spollers + data-one-spoller - режим аккордеон
data-spollers-speed - скорость по умолчания 500 мс
data-spoller-close - закрытие по клику вне блока
*/

//flsFunctions.spollers();

/*
Модуль "tabi"
Документація: https://template.fls.guru/template-docs/modul-taby.html
Сниппет (HTML): tabs
*/

// flsFunctions.tabs();

/*
Модуль "покажите еще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/

// flsFunctions.showMore();

/*
Модуль эффекта волны
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/

// flsFunctions.rippleEffect();

/*
Модуль курсора Catepto
Документация:
Сниппет (HTML):
*/

// flsFunctions.customCursor(true);

/*
Модуль Popap
CSS: scss/base.scss - popup
<a href="#" data-popup="#popup" class="link">Я попап</a> по ID или классу
<button type="button" data-popup="#video" data-popup-youtube="6S5Zw2WuyFE">Видео</button>
Сниппет (HTML): pl, pop
*/

// import './libs/popup.js'

/*
Модуль паралакса
родителю - data-prlx-parent
элементу - data-prlx
*/

// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js"

/* Работа с полями формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */

flsForms.formFieldsInit({
  viewPass: false,
  autoHeight: false,
})

/* Отправка формы*/
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
flsForms.formSubmit()

/* Модуль формы «количество» */
// flsForms.formQuantity();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Выберите рабочий модуль. */
// import './libs/select.js'

/* Календарный рабочий модуль */
// import './files/forms/datepicker.js'

/* (В работе) Маска с масками.*/
/*
Подключение и настройки выполняются в файле js/files/forms/inputmask.js
Документация на работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сніппет(HTML):
*/
import "./files/forms/inputmask.js"

/* Слайдер рабочий модуль */
/*
Подключение и настройки выполняются в файле js/files/forms/range.js
Документация на работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сніппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройки, выполненные в файле js/files/tippy.js
Документация на работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сніппет (HTML): tip (добавляет атрибут с подсказкой дляhtml тега)
*/
import "./files/tippy.js"

// ========================================================================================================================================================================================================================================================
// Работа с слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка плагина ползунка ползунка и новые ползунки выполняется в файле js/files/sliders.js
Документация на работе в шаблоне: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документация плагина: https://swiperjs.com/
Сніппет(HTML): swiper
*/
import "./files/sliders.js"

// ========================================================================================================================================================================================================================================================
// Модули прокрутки страниц ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна прокрутки
Документация по работе в шаблоне: в HTML мы добавляем в блок атрибутов data-simplebar
Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сніппет(HTML): 
*/
//import "./files/scroll/simplebar.js";

// Ленивый (отсроченный) загрузка картин
// Документация на работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// Наблюдатель на объектах атрибута data-watch
// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):
import "./libs/watcher.js"

// модульПоекранноїПрокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
// import './libs/fullpage.js'

// Модуль паралакса
// Документація: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):
// import './libs/parallax.js'

// Функции работы с взломщиком
import * as flsScroll from "./files/scroll/scroll.js"

// Гладкая навигация на странице
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
//flsScroll.pageNavigation();

// Функциональность добавляет классы в заголовок во время прокрутки
// Документація: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
//flsScroll.headerScroll();

// Функціонал липкого блоку
// flsScroll.stickyBlock();

// Модуль цифровой встречной анимации
// Документація: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сніппет(HTML):
/* <div data-watch class="counters">
	<div data-digits-counter data-digits-counter-speed="4500" class="counters__item">1500</div>
	<div data-digits-counter class="counters__item">500</div>
	<div data-digits-counter class="counters__item">800</div>
</div> */

// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация на работе в шаблоне: 
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/
import "./files/gallery.js"

// ========================================================================================================================================================================================================================================================
// Масонрі сітка ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні:
Документація плагіна: 
Сніппет(HTML):
*/
// import "./files/isotope.js";

// ========================================================================================================================================================================================================================================================
// Другие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
// к элементу добавить атр data-da=".className, 768, 1(2,3..first,last)"
// первый праметр - класс блока куда перносим
// второй праметр - разрешение когда переносим
// третий праметр - позиция первым, вторым, и т/д/

// import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Другой ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Мы подключаем файлы с их кодом */
import "./files/script.js"
//============================================================================================================================================================================================================================================
