$(function(){
	
	//menu bar
		$('.menubar').on('click',function(){
			$('.bartop, .barbot').toggleClass('clicked');
			$('#nav-menu').toggleClass('opened');
			
		});



	//console.log("left: " + obj.left + "px, top: " + obj.top + "px");
//section1

		$('.s1_img06').animate({top:'-20.5%'},3000);		
	
		$('#section1').mousemove(
			function(e){
				
				var offset = $(this).offset();
				var xP = e.pageX - offset.left;
				var yP = e.pageY - offset.top;
				var XPercent = Math.round(xP / $(this).width() * 10);
				var YPercent = Math.round(yP / $(this).height() * 10);
				//	console.log(xP);
			/*	$(this).find('.imgWrap').each(		
					function(){
						var diffX = $('#section1').width() - $(this).width() - (xP / 10)  ;
						var diffY = $('#section1').height() - $(this).height() - (yP / 10);		
						var myX = diffX * (XPercent / 100); 
						var myY = diffY * (YPercent / 100);							
						var calw = $(window).width() / 100 - myX
						var calh = $(window).height() / 100 - myY

						if(xP < $(window).width() / 2){
							$('.imgWrap').animate({left:calw},{duration: 50, queue: false, easing: 'linear'});							
						}else if(xP >= $(window).width() / 2){
							$('.imgWrap').animate({left: calw*(-1)},{duration: 50, queue: false, easing: 'linear'});
						}
						if(yP < $(window).height() / 2){
							$('.imgWrap').animate({top: calh*(-1)},{duration: 50, queue: false, easing: 'linear'});							
						}else if(yP >= $(window).height() / 2){
							$('.imgWrap').animate({top:calh*(-1)},{duration: 50, queue: false, easing: 'linear'});
						}
					});*/
		
			$('.s1_img01').css({'transform': 'translateX(' + (8 - (xP * 0.025) ) + 'px)'+ 'translateY(' + (8 - (yP * 0.025)  )+ 'px)'});
			$('.s1_img02').css({'transform': 'translateX(' + (8 - (xP * 0.015) ) + 'px)'+ 'translateY(' + (8 - (yP * 0.015)  )+ 'px)'});
			$('.s1_img03').css({'transform': 'translateX(' + (8 - (xP * 0.015) ) + 'px)'+ 'translateY(' + (8 - (yP * 0.015)  )+ 'px)'});
			$('.s1_img04').css({'transform': 'translateX(' + (8 - (xP * 0.010) ) + 'px)'+ 'translateY(' + (8 - (yP * 0.010)  )+ 'px)'});
			$('.s1_img05').css({'transform': 'translateX(' + (8 - (xP * 0.005) ) + 'px)'+ 'translateY(' + (8 - (yP * 0.005)  )+ 'px)'});
			$('.s1_img06').css({'transform': 'translateX(' + (8 - (xP * 0.004) ) + 'px)'+ 'translateY(' + (8 - (yP * 0.004)  )+ 'px)'});
			$('.s1_img07').css({'transform': 'translateX(' + (8 - (xP * 0.015) ) + 'px)'+ 'translateY(' + (8 - (yP * 0.015)  )+ 'px)'});
			$('.s1_img08').css({'transform': 'translateX(' + (8 - (xP * 0.020) ) + 'px)'+ 'translateY(' + (8 - (yP * 0.020)  )+ 'px)'});
	
				

				});



				function swing() {
				$('.s1_img03 img').animate({'top':'-15px'},1000).animate({'top':'0px'},1000, swing);
				}
					swing();

	
$(window).scroll(function () { 
	var scrollValue = $(document).scrollTop(); 
//	console.log(scrollValue); 
});






$(window).scroll(function(){


	var clogo1offset = $(".clogo-col-1 .clogo").offset().top;
	var clogo2offset = $(".clogo-col-2 .clogo").offset().top;
	var clogo3offset = $(".clogo-col-3 .clogo").offset().top;
		
		//console.log(clogo1offset);
//section5
	//client logoºÎºÐ
	
	if($(document).scrollTop() > clogo1offset -700 ){
		$(".clogo-col-1 .clogo").addClass('on');
	} else {$(".clogo-col-1 .clogo").removeClass('on');}

	if($(document).scrollTop() > clogo1offset -500 ){
		$(".clogo-col-2 .clogo").addClass('on');
	} else {$(".clogo-col-2 .clogo").removeClass('on');}

	if($(document).scrollTop() > clogo1offset - 300 ){
		$(".clogo-col-3 .clogo").addClass('on');
	} else {$(".clogo-col-3 .clogo").removeClass('on');}






$(window).scroll(function() {

	

	var offset = $(window).scrollTop();
	offset     = offset * (-0.04);
	offset2 = offset - 180 ;
	var offsets = $(window).scrollTop();
	offsets = offsets * (-0.17)  ;
	
/*
	
	var s2_text = $(".s2_text").offset().top;
	var section4 = $("#section4").offset().top;
		var offsettext = $(window).scrollTop();
		var opacitys = 0
		opacitys += 0.01;
		var opacityss = $(window).scrollTop() / 10000;
		var opacitysss = 1 - opacityss
		offsettext     = offsettext * (-0.04);
	$('.s2_squigg').css({    
		'transform': 'translateY(' + offsets + 'px)' + 'rotateZ(' + offset2 + 'deg)'		
	});
	$('.s2_ball_f').css({		
		'transform': 'translateY(' + offsets + 'px)'	
	});	
//	if($(document).scrollTop() > s2_text - 100 && $(document).scrollTop() < s2_text + 500){
		
	
		$('.s2_text').css({
			'transform': 'scaleX(' + opacitysss * 0.7 + ')' + 'scaleY(' + opacitysss * 0.7 + ')' + 'scaleZ(' + opacitysss * 0.7 + ')',
				'opacity' : opacitysss
		});
//	} else {
//		$('.s2_text').css({
//			'transform': 'scaleX(1)' + 'scaleY(1)' + 'scaleZ(1)'
//		});
//	}

	var scrolltop = $(document).scrollTop()
	var clogo1offset = $("#section3").offset().top;
	if ($(document).scrollTop() > clogo1offset  )
	{

		$('#section3 .s3bg').css({ opacity: opacityss });
	}*/
//rhino
	var offerphotography = $(".offer_photography").offset().top;
	var section3 = $('#section3').offset().top;
	
	if ($(document).scrollTop() > section3 && $(document).scrollTop() < offerphotography ){
		$('.rhinoWrap').delay(1000).css('opacity','0.9');
	}else{
		$('.rhinoWrap').delay(1000).css('opacity','0');	
	}
});
});

//parallax
$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
//section1

	var s2top = $('#section2').offset().top;
	var movement2 =  (scrolled - s2top) * 0.001  ;


	$('.s2_ball_f').css({'transform': 'translateY(' + (movement2 * (-45) )  + 'px)'});
	$('.s2_squigg').css({'transform': 'translateY(' + (movement2 * (-40) )  + 'px)'+ 'rotateZ(' + (movement2 * (-10) )  + 'deg)'});
	
	if (scrolled > s2top)
	{$('.s2_text').css({'transform': 'scaleX(' + (1 - (movement2 * 0.5)  )  + ')'+ 'scaleY(' + (1 - (movement2 * 0.5)  )  + ')' + 'scaleY(' + (1 - (movement2 * 0.5)  )  + ')' ,  'opacity': 1 - (movement2 )})
	}
	











//section3

	var offer = $('.offer_list > div').offset().top;
	var movement31 =  (scrolled - offer) * 0.005  ;
	//console.log(movement31);
	
	$('.offer_list > div:nth-child(odd)').css({'transform': 'translateX(' + (movement31 * (-70) + 50)  + 'px)' + 'skewX(' + ((-1) - (movement31 * 3)) + 'deg)'});
	$('.offer_list > div:nth-child(even)').css({'transform': 'translateX(' + (movement31 * (70) + 50)  + 'px)' + 'skewX(' + ((-1) - (movement31 * 3)) + 'deg)'});



//section4	
	var s4cont1 = $('.s4_01').offset().top;
	var s4cont2 = $('.s4_02').offset().top;
	var s4cont3 = $('.s4_03').offset().top;
	var s4cont4 = $('.s4_04').offset().top;
	var s4cont5 = $('.s4_05').offset().top;
	var s4cont6 = $('.s4_06').offset().top;
	var s4cont7 = $('.s4_07').offset().top;
	var movement41 = (scrolled - s4cont1) * 0.15  ;
	var movement42 = (scrolled - s4cont2) * 0.15  ;
	var movement43 = (scrolled - s4cont3) * 0.15  ;
	var movement44 = (scrolled - s4cont4) * 0.15  ;
	var movement45 = (scrolled - s4cont5) * 0.15  ;
	var movement46 = (scrolled - s4cont6) * 0.15  ;
	var movement47 = (scrolled - s4cont7) * 0.15  ;

	$('.s4_01 .s4inner').css('opacity', (1-(movement41 *0.01)));
	$('.s4_02 .s4inner').css({'top':0-(movement42 *.5)+'px' , 'opacity': (1-(movement42 *0.01))});
	$('.s4_03 .s4inner').css('opacity', (1-(movement43 *0.01)));
	$('.s4_04 .s4inner').css({'top':0-(movement44 *.5)+'px' , 'opacity': (1-(movement44 *0.01))});
	$('.s4_05 .s4inner').css('opacity', (1-(movement45 *0.01)));
	$('.s4_06 .s4inner').css({'top':0-(movement46 *.5)+'px' , 'opacity': (1-(movement46 *0.01))});
	$('.s4_07 .s4inner').css('opacity', (1-(movement47 *0.01)));



//section5

	var s5top = $('#section5').offset().top;
	var movement5 =  (scrolled - s5top) * 0.005  ;

	if (scrolled > s5top){ 
		$('#section5').css({'background-color': 'rgba( 239,239,239,'+ movement5 +')'});
	}else {
		$('#section5').css({'background-color': 'rgba( 239,239,239,0)'});
	}





//section6
	var namescroll = $('#section6').offset().top;
	var movement6 = (scrolled - namescroll) * 0.1  ;

    $('.name01').css('top',0-((movement6 *.5))+'px');
	$('.name02').css('top',0-((movement6 *.6))+'px');
	$('.name03').css('top',0-((movement6 *.4))+'px');
	$('.name04').css('top',0-((movement6 *.55))+'px');

//section7
	var s7top = $('#section7').offset().top;
	var movement7 =  (scrolled - s7top) * 0.0045  ;
	var movement7minus =  1- ((scrolled - s7top) * 0.001) ;
	//console.log(movement7);
	//console.log(movement7minus);
	if (scrolled > s7top - 500 && scrolled <= s7top +700 ){ 
		$('.s7bg').css({'opacity': movement7 });
	}else if(scrolled > s7top + 700){
		$('.s7bg').css({'opacity': movement7minus});
	}else{
		$('.s7bg').css({'opacity': 0 });
	}


//section8
	var moves = $('#section8').offset().top;
	var movement8 =  (scrolled - moves) * 0.005  ;

	
	$('.s802, .s805').css({'transform': 'translateY(' + (movement8 * (-50) + 50)  + 'px)'});
	$('.s803').css({'transform': 'scaleX(' + (0.8-(movement8 * (-0.15))  )+ ')'+ 'scaleY(' + (0.8-(movement8 * (-0.15))  ) + ')' + 'skewX(' + (0.8 -(movement8 * (-2.5))  ) + 'deg)'});
	$('.s804').css({'transform': 'translateY(' + (movement8 * (-10) + 50)  + 'px)'+ 'rotateZ(' + movement8 * (-5)  + 'deg)'});
	$('.s806').css({'transform': 'translateY(' + movement8 * (-5)  + 'px)'});
	
//section8 bg



	if (scrolled > moves){ 
		$('#section8').css({'background-color': 'rgba( 255, 209, 220,'+ movement8 * 1.01 +')'});
	}else {
		$('#section8').css({'background-color': 'rgba( 255, 209, 220,0)'});
	}

}  //func parallaxScroll ends here




});

		
		
	

