var Shirts = {
  init: function(){
    $("li > a").removeClass("active");
    $("a.shirts").addClass("active");

    $("span.tanks-vid").addClass("hidden");
    $("span.shirts-nav").removeClass("hidden");

    $("#container").on("click", "a.gcb", Shirts.gcb);
    $("#container").on("click", "a.sunsout", Shirts.sunsout);
    $("#container").on("click", "a.turkey", Shirts.turkey);

    Nav.removeHandlers();
    Shirts.gcb();
  },
  gcb: function(){
    $(".shirts-nav > a").removeClass("active");
    $("a.gcb").addClass("active");
    $(".img").removeClass().addClass("img gcb_1").attr("src", "images/shirts/gcb_1.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", Shirts.showGcb2);
  },
  sunsout: function(){
    $(".shirts-nav > a").removeClass("active");
    $("a.sunsout").addClass("active");
    $(".img").removeClass().addClass("img sunsout_1").attr("src", "images/shirts/sunsout_1.jpg");
    Nav.hideBack();
    Nav.hideForward();
  },
  turkey: function(){
    $(".shirts-nav > a").removeClass("active");
    $("a.turkey").addClass("active");
    $(".img").removeClass().addClass("img turkey_1").attr("src", "images/shirts/turkey_1.jpg");
    Nav.hideBack();
    Nav.hideForward();
  },
  showGcb2: function(){
    var currentImg = $(".img");
    currentImg.removeClass().addClass("img gcb_2");
    currentImg.attr("src", "images/shirts/gcb_2.jpg");

    Nav.showBack();
    Nav.hideForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-back", Shirts.gcb);
  }
};