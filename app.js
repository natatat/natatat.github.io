!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b){b.exports={run:function(){"use strict";this._prod()&&ga("send","pageview"),this.delegateEvents()},_prod:function(){"use strict";return-1===window.location.href.indexOf("localhost")?!0:!1},delegateEvents:function(){"use strict";var a=function(){$("a.next").prop("href","#likes"),$("a.next").removeClass("hide"),$("a.top").addClass("hide")},b=function(a){"#likes"===a?$("a.next").prop("href","#more"):"#more"===a&&($("a.next").addClass("hide"),$("a.top").removeClass("hide"))},c=function(){$(document).on("scroll",function(){0===$(window).scrollTop()?a():$(window).scrollTop()+$(window).height()===$(document).height()&&b("#more")}),$(".circle").on("click",function(a){$(a.target).hasClass("portfolio")||(a.preventDefault(),$("html, body").animate({scrollTop:"0px"},500))}),$("a.top").on("click",function(b){b.preventDefault(),$("html, body").animate({scrollTop:"0px"},1e3,a)}),$("a.next").on("click",function(a){a.preventDefault();var c=$("#nav").outerHeight(),d=this.hash;$("html, body").animate({scrollTop:$(d).offset().top-c},1e3,function(){b(d)})})},d=function(){($("body").hasClass("design")||$("body").hasClass("more"))&&($(".title").on("mouseenter",function(){$(".title").html("a development portfolio")}),$(".title").on("mouseleave",function(){$(".title").html("a design portfolio")}))},e=function(){$("body").hasClass("dev")&&($(".title").on("mouseenter",function(){$(".title").html("a design portfolio")}),$(".title").on("mouseleave",function(){$(".title").html("a development portfolio")}))},f=function(){$(".nav-link").on("click",function(a){a.preventDefault();var b=$("#nav").outerHeight(),c=this.hash;$("html, body").animate({scrollTop:$(c).offset().top-b},1e3)})},g=function(){c(),d(),e(),f()};g()}},b.exports.run()},{}]},{},[1]);