var Shirts = {
  init: function(){
    $("li > a").removeClass("active");
    $("a.shirts").addClass("active");

    $("span.tanks-vid").addClass("hidden");
    $("span.shirts-nav").removeClass("hidden");

    $("#container").on("click", "a.gcb", Shirts.gcb);
    $("#container").on("click", "a.sunsout", Shirts.sunsout);
    $("#container").on("click", "a.turkey", Shirts.turkey);
    $("#container").on("click", "a.supagay", Shirts.supagay);

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
  supagay: function() {
    $(".shirts-nav > a").removeClass("active");
    $("a.supagay").addClass("active");
    $(".img").removeClass().addClass("img supagay_1").attr("src", "images/shirts/supagay_1.jpg");

    Nav.hideBack();
    Nav.showForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-forward", Shirts.showGay2);
  },
  showGcb2: function(){
    var currentImg = $(".img");
    currentImg.removeClass().addClass("img gcb_2");
    currentImg.attr("src", "images/shirts/gcb_2.jpg");

    Nav.showBack();
    Nav.hideForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-back", Shirts.gcb);
  },
  showGay2: function(){
    var currentImg = $(".img");
    currentImg.removeClass().addClass("img supagay_2");
    currentImg.attr("src", "images/shirts/supagay_2.jpg");

    Nav.showBack();
    Nav.hideForward();
    Nav.removeHandlers();
    $("#container").on("click", "a.nav-back", Shirts.supagay);
  }
};