var Books = {
  init: function(){
    $("span.tanks-vid").addClass("hidden");

    $("li > a").removeClass("active");
    $("a.books").addClass("active");
    $(".img").removeClass().addClass("img books_1").attr("src", "images/books/books_1.jpg");

    $("#container").on("click", "a.nav-back", Books.showPrevious);
    $("#container").on("click", "a.nav-forward", Books.showNext);
    Nav.hideBack();
    Nav.showForward();
  },
  showNext: function(){
    var currentImg = $(".img");
    if ( currentImg.hasClass("books_1") ) {
      currentImg.removeClass("books_1").addClass("books_2");
      currentImg.attr("src", "images/books/books_2.jpg");
      Nav.showBack();
      Nav.hideForward();
    }
  },
  showPrevious: function(){
    var currentImg = $(".img");
    if ( currentImg.hasClass("books_2") ) {
      currentImg.removeClass("books_2").addClass("books_1");
      currentImg.attr("src", "images/books/books_1.jpg");
      Nav.hideBack();
      Nav.showForward();
    }
  }
}