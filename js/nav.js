var Nav = {
  showBack: function(){
    $("a.nav-back").removeClass("hidden");
    $("span.left").addClass("hidden");
  },
  hideBack:function(){
    $("a.nav-back").addClass("hidden");
    $("span.left").removeClass("hidden");
  },
  hideForward: function(){
    $("a.nav-forward").addClass("hidden");
    $("span.right").removeClass("hidden");
  },
  showForward: function(){
    $("a.nav-forward").removeClass("hidden");
    $("span.right").addClass("hidden");
  }
}