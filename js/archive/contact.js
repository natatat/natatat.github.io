var Contact = {
  show: function(){
    $("div.contact").toggle();
    var link = $("a.contact");
    if ( link.hasClass("actived") ) {
      link.removeClass("actived");
    } else {
      link.addClass("actived");
    }
  }
};