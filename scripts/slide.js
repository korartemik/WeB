/*
1. $ - относится к библиотеке jQuery, предоставляет удобный синтаксис для работы с DOM
2. Внутри $ - название класса, с которым будут происходить разные манипуляции
3. slick - кастомный метод библиотеки slick.js, она принимает объект с настройками слайдера, их может быть очень много,
настройки слайдера:
  3 картинки показываются на экране,
  передвигается при скроле на одну,
  автоматически каждые 2000мс передвигается
 */
$('.rev_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});