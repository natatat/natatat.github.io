function bindEventHandlers(){
  $("#container").on("click", "a.hands", showBuiltImages);
  $("#container").on("click", "a.design", showDesignImages);

  $("#container").on("click", "a.pallet", Pallet.init);
  $("#container").on("click", "a.books", Books.init);
  $("#container").on("click", "a.tanks", Tanks.init);
  $("#container").on("click", "a.shirts", Shirts.init);

  $("#container").on("click", "a.d-shirts", DesignShirts.init);
  $("#container").on("click", "a.d-prints", DesignPrints.init);
  $("#container").on("click", "a.d-internship", DesignInternship.init);

  $("#container").on("click", "a.code", Code.show);
  $("#container").on("mouseenter", "a.proj-link", Code.showGithub);
  $("#container").on("mouseleave", "a.proj-link", Code.hideGithub);
  $("#container").on("mouseenter", "a.github", Code.linkActive);

  $(".footer").on("click", "a.contact", Contact.show);
};

function showBuiltImages(){
  Nav.hideBack();
  Nav.showForward();
  Nav.removeHandlers();
  $("#container").on("click", "a.nav-forward", Pallet.show2);

  $(".images.design").hide();
  $(".images.built").slideToggle();
  $("a.design").removeClass("actived");
  $("a.code").removeClass("actived");
  $(".nav-code").slideUp();

  var link = $("a.hands");
  if ( link.hasClass("actived") ) {
    link.removeClass("actived");
  } else {
    link.addClass("actived");
  }
};

function showDesignImages(){
  Nav.hideBack();
  Nav.showForward();
  Nav.removeHandlers();
  $("#container").on("click", "a.nav-forward", DesignShirts.showSun);

  $(".images.built").hide();
  $(".images.design").slideToggle();
  $("a.hands").removeClass("actived");
  $("a.code").removeClass("actived");
  $(".nav-code").slideUp();

  var link = $("a.design");
  if ( link.hasClass("actived") ) {
    link.removeClass("actived");
  } else {
    link.addClass("actived");
  }
};

$(document).ready(function(){
  bindEventHandlers();
});