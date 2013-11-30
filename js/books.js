var Books = {
  init: function(){
    $("span.tanks-vid").addClass("hidden");
    $("span.shirts-nav").addClass("hidden");

    $("li > a").removeClass("active");
    $("a.books").addClass("active");
    $(".img").removeClass().addClass("img books_1").attr("src", "images/books/books_1.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", Books.showNext);
  },
  showNext: function(){
    var currentImg = $(".img");
    currentImg.removeClass().addClass("img books_2");
    currentImg.attr("src", "images/books/books_2.jpg");

    Nav.showBack();
    Nav.hideForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-back", Books.showPrevious);
  },
  showPrevious: function(){
    var currentImg = $(".img");
    currentImg.removeClass().addClass("img books_1");
    currentImg.attr("src", "images/books/books_1.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", Books.showNext);
  }
}