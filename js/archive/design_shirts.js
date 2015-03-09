var DesignShirts = {
  init: function(){
    $("li > a").removeClass("active");
    $("a.d-shirts").addClass("active");

    $("span.prints-nav").addClass("hidden");

    Nav.removeHandlers();
    DesignShirts.showGcb();
  },
  showGcb: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img gcb")
      .attr("src", "images/design/shirts/gcb.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", DesignShirts.showSun);
  },
  showSun: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img sunsout")
      .attr("src", "images/design/shirts/sunsout.jpg");

    Nav.showBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", DesignShirts.showTurkey1);
    $("#container").on("click", "a.nav-back", DesignShirts.showGcb);
  },
  showTurkey1: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img turkey_1")
      .attr("src", "images/design/shirts/turkey_1.jpg");

    Nav.showBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", DesignShirts.showTurkey2);
    $("#container").on("click", "a.nav-back", DesignShirts.showSun);
  },
  showTurkey2: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img turkey_2")
      .attr("src", "images/design/shirts/turkey_2.jpg");

    Nav.showBack();
    Nav.hideForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-back", DesignShirts.showTurkey1);
  }
};