$(document).ready(function(){
	//new WOW().init();
	$('.fa').hide();
	$('#Projects').hide();
	$('.Project').hide();
	$('.fa-apple').show();
	$("#buttons").hide();
	var current = 0;
	var onlyOnce = true;
	var noAnimation;
	if ( $( window ).width() > 880 || noAnimation === false ) {
		noAnimation = false;
	}
	else{
		noAnimation = true;
		positionFixed = false;
	}
	document.addEventListener("touchstart", function(){
		noAnimation = true;
		positionFixed = false;
	}, false);
	document.addEventListener("touchmove", function(){
		noAnimation = true;
		positionFixed = false;
	}, false);

	var height = $('.Heading').offset().top -   $("#OneLine").offset().top - $("#OneLine").height();
	var oldValues = {
		height1 :  $('.Mail').offset().top,
		MailWidth : $('.Mail').offset().left,
		GithubWidth:$('.Github').offset().left ,
		TwitterWidth:$('.Twitter').offset().left,
		LinkedinWidth:$('.Linkedin').offset().left
	};

	 positionFixed = false;
	$( window ).resize(function() {
		$('.contactInfo').css({ position:"static",height:"auto",width:"auto", margin:"auto"});
	//	onlyOnce = false;
  	//	height = $('.Heading').offset().top -   $("#OneLine").offset().top - $("#OneLine").height();
		
			oldValues = {
			height1 :  $('.Mail').offset().top,
			MailWidth : $('.Mail').offset().left,
			GithubWidth:$('.Github').offset().left ,
			TwitterWidth:$('.Twitter').offset().left,
			LinkedinWidth:$('.Linkedin').offset().left,
			height2: $('.Mail').position().top,
			MailWidth2 : $('.Mail').position().left,
			GithubWidth2:$('.Github').position().left ,
			TwitterWidth2:$('.Twitter').position().left,
			LinkedinWidth2:$('.Linkedin').position().left
			};
		
		if( $( window ).width() > 880 && noAnimation === false){
			noAnimation = false;
		}
		else{
			positionFixed = false;
			noAnimation = true;
		}
	});

	$(window).scroll(function(){
		var num = $(this).scrollTop();

	

		if(num > $("#OneLine").offset().top+$("#OneLine").height() && onlyOnce===true && !(noAnimation) === true){
			$('.contactInfo').css({position:"relative"});
			onlyOnce = false;
			width = $('.Mail').offset().left -20;
			height =  num - 200;
			console.log("width Mail " + width + " height Mail " + height);
			$(".Mail").animate({left:'-=' + width + 'px',top:"+="+height+'px'},1000,function(){});

			width =$(document).width() - $('.Github').offset().left - $('.Github').width() - 20;
			console.log("width Github " + width + " height Github " + height);
			$(".Github").animate({top:"+="+height+'px',left:"+="+width+'px'},1000,function(){});

			width = $('.Twitter').offset().left - 20;
			height += 250;
			console.log("width Twitter " + width + " height Twitter " + height);
			$(".Twitter").animate({top:"+="+height+'px',left:"-="+width+'px'},1000,function(){});

			width = $(document).width() - $('.Linkedin').offset().left - $('.Linkedin').width()- 20;
			console.log("width Linkedin " + width + " height Linkedin " + height);	
			$(".Linkedin").animate({top:"+="+height+'px',left:"+="+width+'px'},1000,function(){
				$('.contactInfo').css({position:"fixed", height:"auto",width:"5vw"});
				$('.Mail').css({left:"1%",top:"200px",margin:"0"});
				$('.Github').css({left:"94%",top:"200px",margin:"0"});

				$('.Twitter').css({left:"1%",top:"450px",margin:"0"});
				$('.Linkedin').css({left:"94%",top:"450px",margin:"0"});
				
			});
			onlyOnce = false;

		}
		if (num < $("#OneLine").offset().top+$("#OneLine").height() && onlyOnce===false && !(noAnimation) === true) {
			$('.contactInfo').css({ position:"static",height:"auto",width:"auto", margin:"auto"});

			onlyOnce = true;
			width = oldValues.MailWidth;
			height =oldValues.height1;
			$(".Mail").offset({top:height,left:width});
			width = oldValues.GithubWidth;
			$(".Github").offset({top:height,left:width});
			width = oldValues.TwitterWidth;
			$(".Twitter").offset({top:height,left:width});
			width = oldValues.LinkedinWidth;
			$(".Linkedin").offset({top:height,left:width});
			height = oldValues.height2;
			width = oldValues.MailWidth2;
			$(".Mail").position({top:height,left:width});
			width = oldValues.GithubWidth2;
			$(".Github").position({top:height,left:width});
			width = oldValues.TwitterWidth2;
			$(".Twitter").position({top:height,left:width});
			width = oldValues.LinkedinWidth2;
			$(".Linkedin").position({top:height,left:width});

			$('.contactInfo').css({ position:"static",height:"auto",width:"auto", margin:"auto"});

		}

	
		if(num > $("#RemindVoice").offset().top){
			$("down").hide();
			$("#up").fadeIn(500);
		}
		else{
			$("#up").fadeOut(500);
		}
		if (num < ($("#Projects").offset().top)) {
			$("#up").hide();
			$("#down").fadeIn(500);
			
		}
		if (num >= $("#Projects").offset().top) {$("#down").fadeOut(500);};
		
	});
	$('#down').click(function(){
		$('html, body').stop().animate({scrollTop: $('#Projects').offset().top+5},1000);
		
	});

	$('#up').click(function(){
		$('html, body').stop().animate({scrollTop: $('html, body').offset().top},1000);
	});
	

	var showProjects = function(){
		
		$('#Projects').show(2000);
		$('.Project').show();
		new WOW().init();
		$("#up").hide();
		$("#buttons").show();
		if($('body').innerWidth() > 680){
			$("#down").fadeIn(1000);
		}

		$("#y2").show("slide", {direction: "left"},1000);
	};

	var showTwitter = function(){
		$('.fa-twitter').fadeIn({duration:800, complete: showgithub});
	};


	var showMail = function(){
		$('.fa-envelope-o').fadeIn({duration:1000, complete: showTwitter});
	}

	 var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	 $('#Name').addClass('animated rubberBand').one(animationEnd, showMail);
	
	
	var showLinkedin = function(){
		$('.fa-linkedin').fadeIn({duration:800, complete: showProjects});
	};

	var showgithub = function(){
		$('.fa-github').fadeIn({duration:800, complete: showLinkedin});
	};
	var hovered =function(){	
		var width = $(this).width();
		var height = $(this).height();
		$(this).find('.fa').stop(true,true).animate({fontSize: "3vw"},500);
		$(this).height(height);
		$(this).width(width);
	};

	var notHovering = function(){
		$(this).find('.fa').stop(true,true).animate({fontSize: "5vw"},300);
		$(this).height('auto');
	};

	$('.contactInfo').hover(hovered,notHovering);
	
});
