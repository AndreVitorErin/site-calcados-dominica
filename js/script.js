$(document).ready(function () {
  $('#tituloSocial').click(function () {
    $('#descricaoSocial').fadeToggle(1000);
  });
  $('#tituloCasual').click(function () {
    $('#descricaoCasual').fadeToggle(1000);
  });
});

var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = 'block';
  setTimeout(carousel, 3000);
}
