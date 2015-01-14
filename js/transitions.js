$(function() {
  setTimeout(function() {
    $('#logo, h3').fadeIn(700, function(){
      setTimeout(fadeLinks, 300);
    });
  },125);
});

function fadeLinks() {
  var links = $('#links a');

  $(links).each(function(i){
    var $self = $(this);
    setTimeout(function() {
      $self.show();
      $self.addClass('animated fadeInDown');
    }, i * 200);
  });
}
