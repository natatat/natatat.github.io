var Tanks = {
  init: function(){
    $("li > a").removeClass("active");
    $("a.tanks").addClass("active");
    $("span.tanks-vid").removeClass("hidden");
    $(".img").removeClass().addClass("img tanks_1").attr("src", "images/tanks/tanks_1.jpg");

    $("#container").on("click", "a.nav-back", Tanks.showPrevious);
    $("#container").on("click", "a.nav-forward", Tanks.showNext);
    Nav.hideBack();
    Nav.showForward();
  },
  showNext: function(){
    var currentImg = $(".img");
    if ( currentImg.hasClass("tanks_1") ) {
      currentImg.removeClass("tanks_1").addClass("tanks_2");
      currentImg.attr("src", "images/tanks/tanks_2.jpg");
      Nav.showBack();
      Nav.hideForward();
    }
  },
  showPrevious: function(){
    var currentImg = $(".img");
    if ( currentImg.hasClass("tanks_2") ) {
      currentImg.removeClass("tanks_2").addClass("tanks_1");
      currentImg.attr("src", "images/tanks/tanks_1.jpg");
      Nav.hideBack();
      Nav.showForward();
    }
  }
}