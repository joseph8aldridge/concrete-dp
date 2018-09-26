$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
     loop: true,
     center: true,
     items: 1,
     touchDrag: true,
     mouseDrag: true,
     // autoplay: true,
     // autoplayTimeout: 4500,
     smartSpeed: 900,
     navText: ['<img src="img/arrow_L.png">','<img src="img/arrow_R.png">'],
     
     responsive: {
        1170:{
           nav: true,
           stagePadding: 100
        },
        780:{
           nav: true
        }
     }
 });
});
function addClass(){
    var btnTablet = document.getElementById('btn-circle-tablet');
    btnTablet.setAttribute("class", "btn-circle-tablet--open");
    btnTablet.getAttribute('class');
}
var btnClick = document.getElementById('btn-search');
btnClick.onclick = addClass;

$(document).mouseup(function (e){ // событие клика по веб-документу
        var form = $("#search_form"); // тут указываем ID элемента
        if (!form.is(e.target) // если клик был не по нашему блоку
            && form.has(e.target).length === 0) { // и не по его дочерним элементам
            $('#btn-circle-tablet').removeClass('btn-circle-tablet--open');
            // $('.header__main').removeClass('header__main-mobile-search-wrapper');
        }
    });
