var Shirts = {
  init: function(){
    $("span.tanks-vid").addClass("hidden");

    $("li > a").removeClass("active");
    $("a.shirts").addClass("active");
    $(".img").removeClass().addClass("img gcb_1").attr("src", "images/shirts/gcb_1.jpg");

    $("#container").on("click", "a.nav-forward", Shirts.showNext);
    $("#container").on("click", "a.nav-back", Shirts.showPrevious);
    Nav.hideBack();
    Nav.showForward();
  },
  showNext: function(){
    var currentImg = $(".img");
    if ( currentImg.hasClass("gcb_1") ) {
      currentImg.removeClass("gcb_1").addClass("gcb_2");
      currentImg.attr("src", "images/shirts/gcb_2.jpg");
      Nav.showBack();
    } else if ( currentImg.hasClass("gcb_2") ) {
      currentImg.removeClass("gcb_2").addClass("sunsout_1");
      currentImg.attr("src", "images/shirts/sunsout_1.jpg");
    } else if ( currentImg.hasClass("sunsout_1") ) {
      currentImg.removeClass("sunsout_1").addClass("turkey_1");
      currentImg.attr("src", "images/shirts/turkey_1.jpg");
      Nav.hideForward();
    }
  },
  showPrevious: function(){
    var currentImg = $(".img");
    if ( currentImg.hasClass("gcb_2") ) {
      currentImg.removeClass("gcb_2").addClass("gcb_1");
      currentImg.attr("src", "images/shirts/gcb_1.jpg");
      Nav.hideBack();
    } else if ( currentImg.hasClass("sunsout_1") ) {
      currentImg.removeClass("sunsout_1").addClass("gcb_2");
      currentImg.attr("src", "images/shirts/gcb_2.jpg");
    } else if ( currentImg.hasClass("turkey_1") ) {
      currentImg.removeClass("turkey_1").addClass("sunsout_1");
      currentImg.attr("src", "images/shirts/sunsout_1.jpg");
      Nav.showForward();
    }
  }
};