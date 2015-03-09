var DesignInternship = {
  init: function(){
    $("li > a").removeClass("active");
    $("a.d-internship").addClass("active");

    $("span.prints-nav").addClass("hidden");

    Nav.removeHandlers();
    DesignInternship.show1();
  },
  show1: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img cradles_1")
      .attr("src", "images/design/cradles/cradles_1.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", DesignInternship.show2);
  },
  show2: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img cradles_2")
      .attr("src", "images/design/cradles/cradles_2.jpg");

    Nav.showBack();
    Nav.hideForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-back", DesignInternship.show1);
  }
};