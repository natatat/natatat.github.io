function bindEventHandlers(){
  $("#container").on("click", ".hands", showImages);
  $("#container").on("click", "a.nav-forward", Pallet.showNext);
  $("#container").on("click", "a.nav-back", Pallet.showPrevious);
};

function showImages(){
  $(".images").slideToggle("slideDown");
};

var Pallet = {
  showNext: function(){
    var currentImg = $(".img");
    if ( currentImg.hasClass("pallet_1") ) {
      currentImg.removeClass("pallet_1").addClass("pallet_2");
      currentImg.attr("src", "images/pallet_2.jpg");
      Pallet.showBackNav();
    } else if ( currentImg.hasClass("pallet_2") ) {
      currentImg.removeClass("pallet_2").addClass("pallet_3");
      currentImg.attr("src", "images/pallet_3.jpg");
      Pallet.hideForwardNav();
    }
  },
  showPrevious: function(){
    var currentImg = $(".img");
    if ( currentImg.hasClass("pallet_2") ) {
      $(".img").removeClass("pallet_2").addClass("pallet_1");
      $(".img").attr("src", "images/pallet_1.jpg");
      Pallet.hideBackNav();
    } else if ( currentImg.hasClass("pallet_3") ) {
      $(".img").removeClass("pallet_3").addClass("pallet_2");
      $(".img").attr("src", "images/pallet_2.jpg");
      Pallet.showForwardNav();
    }
  },
  showBackNav: function(){
    $("a.nav-back").removeClass("hidden");
    $("span.left").addClass("hidden");
  },
  hideBackNav:function(){
    $("a.nav-back").addClass("hidden");
    $("span.left").removeClass("hidden");
  },
  hideForwardNav: function(){
    $("a.nav-forward").addClass("hidden");
    $("span.right").removeClass("hidden");
  },
  showForwardNav: function(){
    $("a.nav-forward").removeClass("hidden");
    $("span.right").addClass("hidden");
  }
}

$(document).ready(function(){
  bindEventHandlers();
});