var Code = {
  show: function(){
    $("div.nav-code").slideToggle();
    var link = $("a.code");
    if ( link.hasClass("actived") ) {
      link.removeClass("actived");
    } else {
      link.addClass("actived");
    }
  }
};