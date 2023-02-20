// JavaScript Document

$(function() {
    var array = [
    "/assets/img/top/rimg_a.jpg",
    "/assets/img/top/rimg_b.jpg"
    ];
  
    var l = array.length;
    var r = Math.floor(Math.random()*l);
    var imgurl = array[r];
    $("img.randomimg").attr({"src":imgurl});


$('.logo_load').fadeIn(400);
setTimeout(function(){$('.loader').fadeOut(800);},1000);

	$(".nav__top").addClass("active");
	$('.nav__top a').attr('href','javascript:void(0)');
	//swipeshow
	$("#twitter").swipeshow({
    autostart: false,
	interval: 10000,
    mouse: true,
	$next: $("#swipeNext"),
	$previous: $("#swipePrev")
	});
	},1000);
