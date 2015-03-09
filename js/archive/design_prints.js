var DesignPrints = {
  init: function(){
    $("li > a").removeClass("active");
    $("a.d-prints").addClass("active");

    $("span.prints-nav").removeClass("hidden");

    $("#container").on("click", "a.gr8", DesignPrints.gr8);
    $("#container").on("click", "a.cali", DesignPrints.cali);

    Nav.removeHandlers();
    DesignPrints.gr8();
  },
  gr8: function(){
    $(".prints-nav > a").removeClass("active");
    $("a.gr8").addClass("active");

    $(".d-img")
      .removeClass()
      .addClass("d-img gr8_1")
      .attr("src", "images/design/gr8/gr8_1.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", DesignPrints.gr8_2);
  },
  gr8_2: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img gr8_2")
      .attr("src", "images/design/gr8/gr8_2.jpg");

    Nav.showBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", DesignPrints.gr8_3);
    $("#container").on("click", "a.nav-back", DesignPrints.gr8);
  },
  gr8_3: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img gr8_3")
      .attr("src", "images/design/gr8/gr8_3.jpg");

    Nav.showBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", DesignPrints.gr8_4);
    $("#container").on("click", "a.nav-back", DesignPrints.gr8_2);
  },
  gr8_4: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img gr8_4")
      .attr("src", "images/design/gr8/gr8_4.jpg");

    Nav.showBack();
    Nav.hideForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-back", DesignPrints.gr8_3);
  },
  cali: function(){
    $(".prints-nav > a").removeClass("active");
    $("a.cali").addClass("active");

    $(".d-img")
      .removeClass()
      .addClass("d-img cali_1")
      .attr("src", "images/design/cali/cali_1.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", DesignPrints.cali_2);
  },
  cali_2: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img cali_2")
      .attr("src", "images/design/cali/cali_2.jpg");

    Nav.showBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", DesignPrints.cali_3);
    $("#container").on("click", "a.nav-back", DesignPrints.cali);
  },
  cali_3: function(){
    $(".d-img")
      .removeClass()
      .addClass("d-img cali_3")
      .attr("src", "images/design/cali/cali_3.jpg");

    Nav.showBack();
    Nav.hideForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-back", DesignPrints.cali_2);
  }
};