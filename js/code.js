var Code = {
  show: function(){
    $(".images.design").hide();
    $(".images.built").hide();
    $("div.nav-code").slideToggle();
    var link = $("a.code");
    if ( link.hasClass("actived") ) {
      link.removeClass("actived");
    } else {
      link.addClass("actived");
    }
  }
};
