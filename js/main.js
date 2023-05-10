 $(document).ready(function(){
	
	
	
	// Header Sticky

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
		$(".topbar").addClass("sticky-scroll");
		} else {
		$(".topbar").removeClass("sticky-scroll");
		}
		
		if (scroll >= 1000) {
		$(".topbar2").addClass("sticky");
		$(".topbar2").addClass("sticky-scroll");
		} else {
		$(".topbar2").removeClass("sticky");
		$(".topbar2").removeClass("sticky-scroll");
		}
		
		if (scroll >= 450) {
		$(".topbar3").addClass("sticky");
		$(".topbar3").addClass("sticky-scroll");
		} else {
		$(".topbar3").removeClass("sticky");
		$(".topbar3").removeClass("sticky-scroll");
		}


		
		
	});
	
	// Menu
	
	$('.nav-toggle').on('click', function(){
		if($('.menu').hasClass('menu-active')){
			$('.menu').removeClass('menu-active');
			$('.nav-toggle').removeClass('nav-active');
			$('.menu').slideUp();
		}else{
			$('.menu').addClass('menu-active');
			$('.nav-toggle').addClass('nav-active');
			$('.menu').slideDown();
		}
		
		
	});


	$('.nav-toggle2').on('click', function(){

		
		if($('.menu').hasClass('menu-show')){

			$('.menu').removeClass("menu-show");
			
		}else{
			$('.menu').addClass("menu-show");
			

		}	
		if($('.nav-toggle2').hasClass('nav-active')){

			$('.nav-toggle2').removeClass("nav-active");
			
		}else{
			$('.nav-toggle2').addClass('nav-active');
		}
		});
	
		
	
	
	
	// Popup Video
	
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	  disableOn: 700,
	  type: 'iframe',
	  mainClass: 'mfp-fade',
	  removalDelay: 160,
	  preloader: false,

	  fixedContentPos: false
	});
	
	// Popup Gallery
	
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});
	
	$('.popup-gallery2').magnificPopup({
		delegate: '.popup',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});

	// Testimonial Slider
	
	$('.testimonial-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,	  
		dots: false,
		arrows: false,
		focusOnSelect: false,
		autoplay: true,
		autoplaySpeed: 2000
	});
	
	$('.testimonial-slider2').slick({
		slidesToShow: 2,
		slidesToScroll: 1,	  
		dots: false,
		arrows: false,
		focusOnSelect: false,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	
	});
	$('.testimonial-slider3').slick({
		slidesToShow: 1,
		slidesToScroll: 1,	  
		dots: false,
		arrows: false,
		focusOnSelect: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		fade: true,
	});


	// slider with thumbnails

	$('.testimonial-slider4').slick({
		 fade: true,
		 arrows: false,
		 slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
		 autoplaySpeed: 4000,
		 asNavFor: '.testimonial-thumb'
	});
	 
	  $(".testimonial-thumb").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '20px',
        arrows: false,
        slidesToShow: 3,
		focusOnSelect: true,
		autoplay: true,
  		autoplaySpeed: 4000,
		asNavFor: '.testimonial-slider4',
		responsive: [
			{
			  breakpoint: 1025,
			  settings: {
				slidesToShow: 3,
				dots:false,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			  	fade:true,
				slidesToShow: 1
				
			  }
			}
			
			 ]
      });


	  $('.testimonial-slider5').slick({
		slidesToShow: 1,
		slidesToScroll: 1,	  
		dots: true,
		arrows: false,
		focusOnSelect: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		fade: true,
	});

	  $('.testimonial-slider6').slick({
		slidesToShow: 1,
		slidesToScroll: 1,	  
		dots: false,
		arrows: true,
		focusOnSelect: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
	});

	 $('.testimonial-slider7').slick({
		slidesToShow: 3,
		slidesToScroll: 1,	  
		dots: false,
		arrows: false,
		focusOnSelect: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});



	 $('.portfolio-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,	  
		dots: false,
		arrows: true,
		focusOnSelect: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// App Screenshot Slider

	 $('.appshot-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,	  
		dots: true,
		arrows: false,
		focusOnSelect: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode:false
				}
			},
			{
				breakpoint: 482,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode:false
				}
			}
		]
	});

	//causes slider

	 $('.causes-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,	  
		dots: false,
		arrows: true,
		focusOnSelect: false,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Button Effect
	
	var ink, d, x, y;
	$(".btn-effect-1").on('click' , function(e){
		if($(this).find(".ink").length === 0){
			$(this).prepend("<span class='ink'></span>");
		}
			 
		ink = $(this).find(".ink");
		ink.removeClass("animate");
		 
		if(!ink.height() && !ink.width()){
			d = Math.max($(this).outerWidth(), $(this).outerHeight());
			ink.css({height: d, width: d});
		}
		 
		x = e.pageX - $(this).offset().left - ink.width()/2;
		y = e.pageY - $(this).offset().top - ink.height()/2;
		 
		ink.css({top: y+'px', left: x+'px'}).addClass("animate");
	});
	
	
	// #Anchor Handle
	
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// countdown 1

	$('#countdown').countdown('2021/06/22', function(event) {
    var $this = $(this).html(event.strftime(''
 
    + '<div class="countdown-box"><span class="countdown-time">%D</span> <span class="countdown-label">DAYS</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%H</span> <span class="countdown-label">HOURS</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%M</span> <span class="countdown-label">MINUTES</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%S</span> <span class="countdown-label">SECONDS</span></div> '));
  });
	
	// countdown 2

	$('#countdown2').countdown('2021/11/12', function(event) {
    var $this = $(this).html(event.strftime(''
 
 	+ '<div class="countdown-box"><span class="countdown-time">%w</span> <span class="countdown-label">WEEKS</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%D</span> <span class="countdown-label">DAYS</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%H</span> <span class="countdown-label">HOURS</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%M</span> <span class="countdown-label">MINUTES</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%S</span> <span class="countdown-label">SECONDS</span></div> '));
  });


	// countdown 3

	$('#countdown3').countdown('2021/12/8', function(event) {
    var $this = $(this).html(event.strftime(''
 
    + '<div class="countdown-box"><span class="countdown-time">%D</span> <span class="countdown-label">DAYS</span></div> '  
    + '<div class="countdown-box"><span class="countdown-time">%H</span> <span class="countdown-label">HOURS</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%M</span> <span class="countdown-label">MINUTES</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%S</span> <span class="countdown-label">SECONDS</span></div> '));
  });

	// search box

	$('.search-box a').click(function() {
	  $('.search-form').slideToggle('slow', function() {
	    $('.search-box').toggleClass("display_close");
	  });
	});

	// banner slider

	$('.banner-slider1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,	  
		dots: false,
		arrows: true,
		focusOnSelect: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	// revolution slider 1

	$('.revolution-slider').revolution(
    {
        dottedOverlay:"none",
        delay:6000,
        startwidth:1170,
        //startheight:windowsHeight,
		startheight:900,
        onHoverStop:"on",
        hideThumbs:10,
        fullWidth:"on",
		fullScreen: 'off',
        forceFullWidth:"off",
        navigationType:"none",
        shadow:0,
        spinner:"spinner4",
        hideTimerBar:"on"
		
    });

	// revolution slider 2

    $('.revolution-slider-2').revolution(
    {
        dottedOverlay:"none",
        delay:6000,
        startwidth:1170,
		startheight:1000,
        onHoverStop:"on",
        hideThumbs:10,
        fullWidth:"on",
		fullScreen: 'off',
        forceFullWidth:"off",
        shadow:0,
        spinner:"spinner4",
        hideTimerBar:"on"
		
    });

    // revolution slider 2

    $('.revolution-slider-3').revolution(
    {
        delay:6000,
        startwidth:1170,
		startheight:900,
        onHoverStop:"on",
        fullWidth:"on",
		fullScreen: 'off',
        forceFullWidth:"off",
        shadow:0,
        spinner:"spinner4",
        hideTimerBar:"on"
		
    });

	
});

