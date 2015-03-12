var Tanks = {
  init: function(){
    $("span.tanks-vid").removeClass("hidden");
    $("span.shirts-nav").addClass("hidden");

    $("li > a").removeClass("active");
    $("a.tanks").addClass("active");
    $(".img").removeClass().addClass("img tanks_1").attr("src", "images/tanks/tanks_1.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", Tanks.showNext);
  },
  showNext: function(){
    var currentImg = $(".img");
    currentImg.removeClass().addClass("img tanks_2");
    currentImg.attr("src", "images/tanks/tanks_2.jpg");

    Nav.showBack();
    Nav.hideForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-back", Tanks.showPrevious);
  },
  showPrevious: function(){
    var currentImg = $(".img");
    currentImg.removeClass().addClass("img tanks_1");
    currentImg.attr("src", "images/tanks/tanks_1.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", Tanks.showNext);
  }
}