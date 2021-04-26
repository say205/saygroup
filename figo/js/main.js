
var GLF = GLF || {};

(function ($) {
    "use strict";

    var $body = $('body');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        is_mobile = true;
    }

    GLF.element = {
        init: function() {
            GLF.element.slickslider();
            GLF.element.countdown();
            GLF.element.menutab();
            GLF.element.mainmenu();
            GLF.element.masonry();
            GLF.element.filter();
    	},

        slickslider: function() {       
            $( '.main-slider' ).slick({
				arrows: false,
			});
			$( '.product-slider' ).slick({
				infinite: false,
				arrows: true,
				slidesToShow: 4,
				prevArrow: '<i class="fal fa-long-arrow-left"></i>',
	      		nextArrow: '<i class="fal fa-long-arrow-right"></i>',
			});
			$( '.deals-slider' ).slick({
				arrows: true,
				slidesToShow: 1,
				prevArrow: '<i class="fal fa-long-arrow-left"></i>',
	      		nextArrow: '<i class="fal fa-long-arrow-right"></i>',
			});
			$( '.bs-slider' ).slick({
				arrows: true,
				slidesToShow: 1,
				prevArrow: '<i class="fal fa-angle-left"></i>',
	      		nextArrow: '<i class="fal fa-angle-right"></i>',
			});
			$('.slider-for').slick({
			  	slidesToShow: 1,
			  	slidesToScroll: 1,
			  	arrows: false,
			  	fade: true,
			  	asNavFor: '.slider-nav'
			});
			$('.slider-nav').slick({
				arrows: true,
			  	slidesToShow: 1,
			  	slidesToScroll: 1,
			  	asNavFor: '.slider-for',
			  	prevArrow: '<i class="fal fa-long-arrow-left"></i>',
	      		nextArrow: '<i class="fal fa-long-arrow-right"></i>',
			});
			$( '.category-slider' ).slick({
				arrows: true,
				slidesToShow: 5,
				prevArrow: '<i class="fal fa-long-arrow-left"></i>',
	      		nextArrow: '<i class="fal fa-long-arrow-right"></i>',
			});
			$( '.slick4colfulllong' ).slick({
				arrows: true,
				dots: true,
				slidesToShow: 4,
				prevArrow: '<i class="fal fa-long-arrow-left"></i>',
	      		nextArrow: '<i class="fal fa-long-arrow-right"></i>',
			});
			$( '.pro2-slider' ).slick({
				arrows: true,
				dots: true,
				slidesToShow: 2,
				prevArrow: '<i class="fal fa-long-arrow-left"></i>',
	      		nextArrow: '<i class="fal fa-long-arrow-right"></i>',
			});
			$( '.slick2coldots' ).slick({
				arrows: false,
				dots: true,
				slidesToShow: 2,
			});
			$( '.slick5colfulllong' ).slick({
				arrows: true,
				dots: true,
				slidesToShow: 5,
				prevArrow: '<i class="fal fa-long-arrow-left"></i>',
	      		nextArrow: '<i class="fal fa-long-arrow-right"></i>',
			});
			$( '.collection-slider' ).slick({
				arrows: true,
				dots: true,
				slidesToShow: 5,
				prevArrow: '<i class="fal fa-long-arrow-left"></i>',
	      		nextArrow: '<i class="fal fa-long-arrow-right"></i>',
			});
			
			var product_thumb = $( '.product-main-image' ).slick({
				infinite: true,
				arrows: true,
				slidesToShow: 1,
				prevArrow: '<i class="far fa-chevron-left"></i>',
	      		nextArrow: '<i class="far fa-chevron-right"></i>',
			});

			product_thumb.on('afterChange', function(event, slick, currentSlide, nextSlide){
			  	$('.product-control a').removeClass( 'active' );
			  	$('.product-control a[data-index="' + currentSlide + '"]').addClass( 'active' );
			});

			$('.product-control a').on( 'click', function(e){
				e.preventDefault();
				var index = $(this).data('index');
				$('.product-control a').not( this ).removeClass( 'active' );
				$( this ).addClass( 'active' );
				product_thumb.slick('slickGoTo', index);
			});
        },
        
        countdown: function() {
        	setInterval(function(){
		        var obj = $('.countdown-data');
		        obj.each(function() {
		            var end = $(this).data('end');
		            var gmt = $(this).data('gmt');
		            var d = new Date();
		            var n = d.getTime();
		            var n = Math.floor(n/1000);
		            var cd = end - (n + (gmt*3600));
		            var days = hours = minutes = seconds = 0;
		            if( cd > 0){
		                var sec_num = parseInt(cd, 10);
		                var days = Math.floor(sec_num / 86400);
		                var hours   = Math.floor(sec_num / 3600) % 24;
		                var minutes = Math.floor(sec_num / 60) % 60;
		                var seconds = sec_num % 60 ;
		                if(seconds < 10){
		                    var seconds = '0'+ seconds; 
		                }
		                if(minutes < 10){
		                    var minutes = '0'+ minutes; 
		                }
		            }
		            $(this).find('.days').text(days);
		            $(this).find('.hours').text(hours);
		            $(this).find('.minutes').text(minutes);
		            $(this).find('.seconds').text(seconds);
		        });
		    },1000);
        },

        menutab: function() {
        	$('.menu-tab li').on( 'click', function(){
				var tab_id = $(this).attr('data-tab');

				$('.menu-tab li').removeClass('active bg-tab');
				$('.content-tab .tab').removeClass('active');

				$(this).addClass('active bg-tab');
				$("#"+tab_id).addClass('active');
			});
        },

        mainmenu: function() {
        	$( '.canvas-menu .sub-menu' ).each(function() {
				$( this ).parent().addClass( 'has-child' ).find( '> a' ).append( '<span class="arrow"><i class="fal fa-chevron-right"></i></span>' );
			});

			$( '.canvas-menu .arrow' ).on( 'click', function(e) {
				e.preventDefault();
				var width = $( '.hamburg-box' ).width();
				var cur = $( this ).parent().text();
				$( this ).parents( '.hamburg-menu' ).find( '.hamburg-title' ).text(cur);
				$( this ).parents( '.hamburg-menu' ).find( '.hamburg-back' ).fadeIn();
				$( this ).parents( 'li' ).find( '> ul' ).addClass( 'current' ).animate({left: 0});
			});

			var canvasTitle = $( '.hamburg-title' ).text();
			$( '.hamburg-back' ).on( 'click', function(e) {
				e.preventDefault();

				var index = $( this ).parents( '.hamburg-box' ).find( '.canvas-menu li' ).children( '.current' );
					index.last().removeClass( 'current' ).animate({left: '100%'});

				var newtext = index.last().parents( 'ul' ).parents( 'li' ).find( '> a' ).text();
					$( this ).parents( '.hamburg-menu' ).find( '.hamburg-title' ).text(newtext);

				var check = $( '.canvas-menu .current' ).length;
					if (check == 0) {
						$( '.hamburg-title' ).text( canvasTitle );
						$( '.hamburg-back' ).fadeOut();
					}
			});
			
			var hb = $( '.hamburg-box' ).height();
			var hh = $( '.hamburg-header' ).height();
			var hf = $( '.hamburg-footer' ).height();
			$( '.hamburg-content' ).css( 'height', hb - hh - hf );
			
			$( '.button-menu' ).on( 'click', function(e) {
				e.preventDefault();
				$( this ).parent().find( '.hamburg-box' ).addClass( 'open' );
				$( this ).parents( 'body' ).addClass( 'open' );
			});

			$(document).mouseup(function(e) {
	            var container = $( '.hamburg-box' );
	            if (!container.is(e.target) && container.has(e.target).length === 0) {
	                container.removeClass( 'open' );
	                container.parents( 'body' ).removeClass( 'open' );
	            }
	        });
	        $( '.hamburg-close' ).on( 'click', function(e) {
	        	e.preventDefault();
	        	$( this ).parents( '.hamburg-box' ).removeClass( 'open' );
	        	$( this ).parents( 'body' ).removeClass( 'open' );
	        });
        },

        masonry: function() {
        	$( window ).load( function() {
		        var $grid = $('.masonry-grid').masonry({
				  	itemSelector: '.grid-item',
				  	percentPosition: true,
				  	columnWidth: '.grid-sizer'
				});
				$( '.grid-item' ).each( function() {
					var left = $( this ).css('left');
					if (left != '0px') {
						$( this ).addClass('align-right');
					}
				});
		    });
        },

        filter: function() {
        	$( '.filter-left .filter' ).on( 'click', function(e) {
        		e.preventDefault();
        		var open_title 	= $( this ).data( 'open_title' );
        		var close_title = $( this ).data( 'close_title' );
        		var cur_title 	= $( this ).text();
        		if (cur_title == open_title) {
        			$( this ).text(close_title);
        		} else {
        			$( this ).text(open_title);
        		}
        		$( this ).toggleClass( 'open' );
        		$( this ).parents( '.filter-box' ).find( '.filter-sub' ).toggleClass( 'open' );
        		$( '.sortby-inner .sortby-sub' ).removeClass( 'open' );
        	});
        	$( '.sortby-inner a' ).on( 'click', function(e) {
	    		e.preventDefault();
	    		var open_title 	= $( '.filter-left .filter' ).data( 'open_title' );
		    	$( this ).parent().find( '.sortby-sub' ).toggleClass( 'open' );
		    	$( '.filter-sub' ).removeClass( 'open' );
		    	$( '.filter-left .filter' ).removeClass( 'open' );
			    $( '.filter-left .filter' ).text(open_title);
	    	});
        	$( '.field-check label' ).on( 'click', function() {
		    	if ($( this ).find( 'input' ).is(':checked')) {
		    		$( this ).addClass( 'active' );
		    	} else {
		    		$( this ).removeClass( 'active' );
		    	}
	    	});
	    	$( '.sortby-sub .field-check label' ).on( 'click', function() {
	    		var title = $( this ).find( '.sort-name' ).text();
	    		$( '.sortby-sub .field-check label' ).not( this ).removeClass( 'active' );
	    		$( this ).parents( '.sortby-inner' ).find( '.sort' ).text(title);
		    	if ($( this ).find( 'input' ).is(':checked')) {
		    		$( this ).addClass( 'active' );
		    	} else {
		    		$( this ).removeClass( 'active' );
		    	}
	    	});
	    	$( '.btn-clear' ).on( 'click', function(e) {
	    		e.preventDefault();
		    	$( this ).parents( 'form' ).find( 'label' ).removeClass( 'active' );
		    	$( this ).parents( 'form' ).find( 'input' ).prop('checked', false); 
	    	});
	    	$( '.filter-right a' ).on( 'click', function(e) {
	    		e.preventDefault();
		    	$( '.filter-right a' ).not( this ).removeClass( 'active' );
		    	$( this ).addClass( 'active' );
	    	});
	    	$(document).mouseup(function(e) {
			    var filter_container = $( '.filter-box' );
			    var sortby_container = $( '.sortby-sub' );
			    var open_title 	= $( '.filter-left .filter' ).data( 'open_title' );

			    if (!filter_container.is(e.target) && filter_container.has(e.target).length === 0) {
			    	$( '.filter-left .filter' ).removeClass( 'open' );
			    	$( '.filter-left .filter' ).text(open_title);
			        filter_container.find( '.filter-sub' ).removeClass( 'open' );
			    }

			    if (!sortby_container.is(e.target) && sortby_container.has(e.target).length === 0) {
			        sortby_container.removeClass( 'open' );
			    }
			});
			$( '.filter-column h3' ).on( 'click', function(e) {
	    		e.preventDefault();
		    	$( this ).parent().toggleClass( 'notactive' );
	    	});
        },
    }

    GLF.onReady = {
        init: function() {
            GLF.element.init();
        }
    };

    GLF.onLoad = {
        init: function() {
            
        }
    };

    GLF.onScroll = {
        init: function() {
            
        }
    };

    GLF.onResize = {
        init: function() {
            
        }
    };

    $(document).ready(GLF.onReady.init);
    $(window).scroll(GLF.onScroll.init);
    $(window).resize(GLF.onResize.init);
    $(window).load(GLF.onLoad.init);

})(jQuery);