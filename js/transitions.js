function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {

  $(function() {
    setTimeout(function() {
      $('#subtitle, h2').fadeIn(1000, function(){
        setTimeout(fadeProjects, 1300);
      });
    },125);
  });

  function fadeProjects() {
    var projects = $('#projects');

    $(projects).each(function(i){
      var $self = $(this);
      setTimeout(function() {
        $self.show();
        $self.addClass('animated fadeInDown');
      }, i * 200);
    });
  }
}
