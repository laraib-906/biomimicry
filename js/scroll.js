function viewport() {
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
var height = viewport().height;
$(document).on('wheel', function(e) {
e.preventDefault();
$('html, body').stop(true).animate({
  scrollTop: (e.originalEvent.deltaY > 0 ? '+=' : '-=') + $(window).height() + 'px'
});
});