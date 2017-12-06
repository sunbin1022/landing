$(function(){
	$('nav li:lt(5)').click(function(){
		$('html,body').animate({scrollTop:$('.page').eq($(this).index()).offset().top-58}, 800);
	})
	$('nav li').eq(5).click(function(){
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
 var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://"); document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F6772fc7014d2050b7cfa33656ec16312' type='text/javascript'%3E%3C/script%3E")) 