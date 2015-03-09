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

    Code.hideGithub();
  },
  showGithub: function(){
    $("a.github").hide();
    Code.linkNotActive();
    $(this).closest("li").find("a.github").show();
  },
  hideGithub: function(){
    $("a.github").hide();
    Code.linkNotActive();
  },
  linkActive: function(){
    $(this).closest("li").find("a.proj-link").addClass("active");
  },
  linkNotActive: function(){
    $("a.proj-link").removeClass("active");
  }
};
