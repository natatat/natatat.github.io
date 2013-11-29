var Pallet = {
  init: function(){
    $("span.tanks-vid").addClass("hidden");

    $("li > a").removeClass("active");
    $("a.pallet").addClass("active");
    $(".img").removeClass().addClass("img pallet_1").attr("src", "images/pallet/pallet_1.jpg");

    $("#container").on("click", "a.nav-forward", Pallet.showNext);
    $("#container").on("click", "a.nav-back", Pallet.showPrevious);
    Nav.hideBack();
    Nav.showForward();
  },
  showNext: function(){
    var currentImg = $(".img");
    if ( currentImg.hasClass("pallet_1") ) {
      currentImg.removeClass("pallet_1").addClass("pallet_2");
      currentImg.attr("src", "images/pallet/pallet_2.jpg");
      Nav.showBack();
    } else if ( currentImg.hasClass("pallet_2") ) {
      currentImg.removeClass("pallet_2").addClass("pallet_3");
      currentImg.attr("src", "images/pallet/pallet_3.jpg");
      Nav.hideForward();
    }
  },
  showPrevious: function(){
    var currentImg = $(".img");
    if ( currentImg.hasClass("pallet_2") ) {
      currentImg.removeClass("pallet_2").addClass("pallet_1");
      currentImg.attr("src", "images/pallet/pallet_1.jpg");
      Nav.hideBack();
    } else if ( currentImg.hasClass("pallet_3") ) {
      currentImg.removeClass("pallet_3").addClass("pallet_2");
      currentImg.attr("src", "images/pallet/pallet_2.jpg");
      Nav.showForward();
    }
  }
};