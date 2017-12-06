$(function(){
	$('nav li').eq(0).click(function(){
		$('html,body').animate({scrollTop:$('.page').eq(0).offset().top-58}, 800);
	})
	$('nav li').eq(1).click(function(){
		$('html,body').animate({scrollTop:$('.page').eq(2).offset().top-58}, 800);
	})
	$('nav li').eq(2).click(function(){
		$('html,body').animate({scrollTop:$('.page').eq(1).offset().top-58}, 800);
	})
	$('nav li').eq(3).click(function(){
		$('html,body').animate({scrollTop:$('.page').eq(4).offset().top-58}, 800);
	})
	$('nav li').eq(4).click(function(){
		$('html,body').animate({scrollTop:$('.page').eq(3).offset().top-58}, 800);
	})
	$('nav li').eq(5).click(function(){
		$('html,body').animate({scrollTop:$('.page').eq(5).offset().top-58}, 800);
	})
	$('nav li').eq(6).click(function(){
		$('html,body').animate({scrollTop:$('#div7').offset().top-58}, 800);
	})
	$('.tiao').click(function(){
		$('html,body').animate({scrollTop:$('#div7').offset().top-58}, 800);
	})

   var navtop=$('nav').offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop()>navtop){
			$('nav').css({
				position:'fixed',
				top:0
			})
		}
		else{
			$('nav').css({
				position:'absolute',	
				top:'650px'	
			})
		}
		var scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
		if(scrolltop>=document.body.clientHeight-$(window).height()||$(window).scrollTop()<navtop){
			$('#form').css('display','none');
		}
		else{
			$('#form').css('display','block');
		}
	})


$('.totop').click(function(){
		var step=0;
		var start=document.body.scrollTop||document.documentElement.scrollTop;
		var end=-document.body.scrollTop||-document.documentElement.scrollTop;
		// var max=100;
		if(start==0){
			return false;
		}
		function move(){
			step+=1;
			$('html,body').scrollTop(Tween.Circular.easeOut(step,start,end,100));
			if(step==100){
				clearInterval(time)
			}
		}
	var time=setInterval(move,17)
document.body.onmousewheel = function(event) {
    event = event || window.event;
    clearInterval(time)
};
})
$("#content2 .contents>div:first").css("display",'block');
$("#content2 li").hover(function(){
$(this).addClass("liactive").siblings().removeClass('liactive');
var index=$(this).index();
$('#content2 .contents>div').eq(index).css('display','block').siblings("div").css('display','none')
})

var nowDate = new Date();
var str = nowDate.getFullYear()+"-"+(nowDate.getMonth() + 1)+"-"+nowDate.getDate()+" "+nowDate.getHours()+":"+nowDate.getMinutes()+":"+nowDate.getSeconds();
document.getElementById("time").value=str;

$('#from').val($('title').html())


$('#div4 ul li').click(function(){
	var index=$(this).index();
	$(this).addClass('active').siblings('li').removeClass('active');
	$(this).parent('ul').siblings('.tabdiv').eq(index).addClass('active').siblings('#div4 .tabdiv').removeClass('active')
})







})
