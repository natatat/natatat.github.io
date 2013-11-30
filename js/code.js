var Code = {
  show: function(){
    $(".images.design").slideUp();
    $(".images.built").slideUp();
    $("a.design").removeClass("actived");
    $("a.hands").removeClass("actived");

    $("div.nav-code").slideToggle();
    var link = $("a.code");
    if ( link.hasClass("actived") ) {
      link.removeClass("actived");
    } else {
      link.addClass("actived");
    }
  }
};
