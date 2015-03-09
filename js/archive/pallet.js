var Pallet = {
  init: function(){
    $("span.tanks-vid").addClass("hidden");
    $("span.shirts-nav").addClass("hidden");

    $("li > a").removeClass("active");
    $("a.pallet").addClass("active");

    Nav.removeHandlers();
    Pallet.show1();
  },
  show1: function(){
    $(".img").removeClass().addClass("img pallet_1").attr("src", "images/pallet/pallet_1.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", Pallet.show2);
  },
  show2: function(){
    var currentImg = $(".img");
    currentImg.removeClass().addClass("img pallet_2");
    currentImg.attr("src", "images/pallet/pallet_2.jpg");

    Nav.showBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", Pallet.show3);
    $("#container").on("click", "a.nav-back", Pallet.show1);
  },
  show3: function(){
    var currentImg = $(".img");
    currentImg.removeClass().addClass("img pallet_3");
    currentImg.attr("src", "images/pallet/pallet_3.jpg");

    Nav.hideForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-back", Pallet.show2);
  }
};