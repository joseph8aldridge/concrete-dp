function addClass(){
    var btnTablet = document.getElementById('btn-circle-tablet');
    console.log(btnTablet);
    btnTablet.setAttribute("class", "btn-circle-tablet--open");
    btnTablet.getAttribute('class');
    console.log(btnTablet.getAttribute('class'));
}
var btnClick = document.getElementById('btn-circle1');
console.log(btnClick);
btnClick.onclick = addClass;

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
