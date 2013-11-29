function bindEventHandlers(){
  $("#container").on("click", "a.hands", showBuiltImages);

  $("#container").on("click", "a.pallet", Pallet.init);
  $("#container").on("click", "a.books", Books.init);
  $("#container").on("click", "a.tanks", Tanks.init);
  $("#container").on("click", "a.shirts", Shirts.init);

  $("#container").on("click", "a.code", Code.show);
  $(".footer").on("click", "a.contact", Contact.show);

  $("#container").on("click", "a.nav-forward", Pallet.showNext);
  $("#container").on("click", "a.nav-back", Pallet.showPrevious);
};

function showBuiltImages(){
  $(".images").slideToggle();
  var link = $("a.hands");
  if ( link.hasClass("actived") ) {
    link.removeClass("actived");
  } else {
    link.addClass("actived");
  }
};

$(document).ready(function(){
  bindEventHandlers();
});