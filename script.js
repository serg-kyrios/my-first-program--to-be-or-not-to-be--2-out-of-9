'use script'
//Берём кнопку вперёд
let btnRight = document.querySelector(".btnRight");
// Берём слайды
let slides = document.querySelectorAll("img");
// Объявляем переменную i 
let i = 0;
 
// Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener("click", function () {
    // Увеличиваем переменную i
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }
})


// // Получаем видимую часть слайда
// let viewport = document.getElementById("viewport").offsetWidth;
// // Получаем кнопку вперёд
// let btnNext = document.getElementById("next");
// // Получаем кнопку назад
// let btnPrev = document.getElementById("prev");
// // Получаем элемент со всеми слайдами
// let slider = document.querySelector("div.slider");
// // Получаем элементы показа слайда
// let viewSliders = document.querySelectorAll(".viewSlide");
// // Объявляем переменную номера слайда
// let viewSlide = 0;
 
// // Назначаем цвет индикатор слайда зелёный
// viewSliders[0].style.backgroundColor = "green";
 
// // Обработка клика на кнопку вперёд
// btnNext.addEventListener("click", function () {
//     // Делаем индикатор слайда красный
//     viewSliders[viewSlide].style.backgroundColor = "red";
//     // Условие, если номер слайда меньше четырёх
//     if (viewSlide < 4) { // Если верно то
//         // Увеличиваем номер слайда на один
//         viewSlide++;
//     } else { // Иначе
//         // Номер слайда равен нулю
//         viewSlide = 0;
//     }
//     // Закрашиваем индикатор слайда в зелёный
//     viewSliders[viewSlide].style.backgroundColor = "green";
//     // Меняем позицию всего слайда
//     slider.style.left = -viewSlide * viewport + "px";
// });
 
// // Обработка клика на кнопку назад
// btnPrev.addEventListener("click", function () {
//     // Делаем индикатор слайда красный
//     viewSliders[viewSlide].style.backgroundColor = "red";
//     // Условие, если номер слайда больше нуля
//     if (viewSlide > 0) { // Если верно то
//         // Уменьшаем номер слайда
//         viewSlide--; 
//     } else { // Иначе
//         // Номер слайда равен четырём
//         viewSlide = 4; 
//     }
//     // Закрашиваем индикатор слайда в зелёный
//     viewSliders[viewSlide].style.backgroundColor = "green";
//     // Меняем позицию всего слайда
//     slider.style.left = -viewSlide * viewport + "px";
// });
