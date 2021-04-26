(function($) {
	"use strict";
	$(document).ready(function() {
		$( '.main-menu ul li' ).each( function() {
			var sub = $( this ).find( '.sub-menu' );
			if ( sub.length ) {
				$( this ).addClass( 'has-sub' );
			}
		});

		if ($( window ).width() > 1200) {
	  		var t=0; // the height of the highest element (after the function runs)
			var t_elem;  // the highest element (after the function runs)
			$( '.main-menu .sub-menu' ).each(function () {
			    var _this = $(this);
			    if ( _this.outerHeight() > t ) {
			        t_elem = this;
			        t = _this.outerHeight();
			    }
			    $( '.menu-bg' ).css( 'height', t + 'px' );
			});
			$( '.main-menu .sub-menu' ).each(function () {
				var _this = $(this);
			    _this.css( 'height', t + 'px' );
			});
			$( '.main-menu li h2' ).css( 'height', t + 'px' );
			$( '.main-menu > ul > li' ).mouseover(function () {
				$( this ).addClass( 'active' );
				$( this ).parents( '.main-menu' ).addClass( 'open' );
				$( this ).parents( '.mid-header' ).addClass( 'open' );
			});
			$( '.main-menu > ul > li' ).mouseout(function () {
				$( this ).removeClass( 'active' );
				$( this ).parents( '.main-menu' ).removeClass( 'open' );
				$( this ).parents( '.mid-header' ).removeClass( 'open' );
			});
	  	}

	  	if ($( window ).width() < 1200) {
	  		$( '.has-sub > a' ).on( 'click', function(e) {
				e.preventDefault();
			    $( this ).toggleClass( 'active' );
			    $( this ).parent().find( '> .sub-menu' ).slideToggle();
			    $( this ).parent().toggleClass( 'active' );
			    $( '.has-sub > a' ).not( this ).parent().removeClass( 'active' );
			    $( '.has-sub > a' ).not( this ).removeClass( 'active' );
			    $( '.has-sub > a' ).not( this ).parent().find( '> .sub-menu' ).slideUp();
			});
	  	}

	  	$( '.head-bar a' ).on( 'click', function(e) {
			e.preventDefault();
		    $( this ).parents( 'body' ).find( '.main-menu' ).toggleClass( 'open' );
		    $( this ).parents( '.site-header' ).toggleClass( 'open' );
		    $( this ).toggleClass( 'open' );
		});
		

		$('.main-slider').slick({
		  	infinite: true,
		  	slidesToShow: 1,
		  	slidesToScroll: 1,
		  	autoplay: true,
		  	autoplaySpeed: 3000,
		  	prevArrow: '<span class="prev slick-control"><i class="las la-angle-left"></i></span>',
		  	nextArrow: '<span class="next slick-control"><i class="las la-angle-right"></i></span>',
		});

		$('.main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		  	$( this ).find( '.item-content' ).addClass( 'fadeInUp animated show' );
		});

		$('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  	$( this ).find( '.item-content' ).removeClass( 'fadeInUp animated show' );
		});

		$( '.searchForm .open' ).on( 'click', function (e) {
			e.preventDefault();
			$( this ).parents( '.searchForm' ).addClass( 'open' );
		});

		$( '.searchForm .close' ).on( 'click', function (e) {
			e.preventDefault();
			$( this ).parents( '.searchForm' ).removeClass( 'open' );
		});

		$( '.backtop' ).on( 'click', function(e) {
			e.preventDefault();
		    $( 'html, body' ).animate({scrollTop: 0}, 1000);
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 48){  
		    	$('.mid-header').addClass("sticky");
		    	$('.site-main').addClass("sticky");
		  	}
		  	else{
		    	$('.mid-header').removeClass("sticky");
		    	$('.site-main').removeClass("sticky");
		  	}

		  	if ($(this).scrollTop() > 300) {
		        $('.backtop').fadeIn();
		    } else {
		        $('.backtop').fadeOut();
		    }
		});
	});
})(jQuery);
new WOW().init();