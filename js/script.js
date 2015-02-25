$(document).ready(function(){

/**************************************************************************************************************/

		var $heightwd = $(window).height();
		var $widthwd = $(window).width();
    
	///////////////////////////TAILLE IMAGE SLIDER
	
  //$('.slider2').css('height',$heightwd+'px');
  //$('.slider2').css('width',$widthwd+'px');

  /*$(window).resizeend({
	    onDragEnd: sliderresize,
	    runOnStart: true
	});

	function sliderresize () {
		if ($widthwd > 992) {
			$('.slider').css('height',$heightwd+'px');
		} else {
			$('.slider').css('height','auto');
		}
	};*/

	///////////////////////////MENU COULISSANT

	if ($widthwd > 992) {
		$(".cadre-menu").hover(
			function() {
		    $(".cadre-menu").animate({marginLeft:"100px"}, 400 );
		  	},
		  	function(){
		    $(".cadre-menu").animate({marginLeft:"0"}, 300 );
		  	})};

	///////////////////////////TAILLE MARGE TEXTE IMAGE SLIDER 

	function verticalAlignCenter() {
    $(".verticalaligncenter").each(function() {
        var $elem = $(this);
        var elemHeight = $elem.height();
        if (elemHeight == 0)    // perhap's an element is no loaded
            return;
        var $container = $elem.parent();
        var paddingTop = Math.floor(($container.height() - elemHeight) / 2);
        if (paddingTop > 0)
            $elem.css("top", paddingTop);
	//        $elem.removeClass("verticalaligncenter");
    	});
	}	

	setInterval( function(){
    verticalAlignCenter();

	}, 250);

	///////////////////////////APPARITION FONDU

	var $titre_page = $('.titre_page_2');
	var $img_titre_page = $('img_titre_page');
	$titre_page.fadeTo(2500, 1);
	$img_titre_page.fadeTo(3500, 1);

	///////////////////////////SCROLL
	
	$('a[href^="#"]').click(function(){  
    var the_id = $(this).attr("href");  
  
    $('html, body').animate({scrollTop:$(the_id).offset().top}, 'slow');  
    	return false;  
	}); 

	///////////////////////////SWIPEBOX

	$('.swipebox').swipebox();

  ///////////////////////////TUBULAR VIDEO

  /*$('.slider').tubular({videoId: 'Scxs7L0vhZ4'});
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }*/
    //////////////////////////PROGRESSIV LOADING

    /*// Check if elem is in viewport
      function isElementInViewport(elem) {
          var $elem = elem;

          // Get the scroll position of the page.
          var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
          var viewportTop = $(scrollElem).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          // Get the position of the element on the page.
          var elemTop = Math.round($elem.offset().top);
          var elemBottom = elemTop + $elem.height();

          return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
      }

      // Check if it's time to start the animation.
      function checkAnimation(elem) {
          var $elem = elem;
          if ($elem.hasClass('start')) return;
          if (isElementInViewport($elem)) {
              $elem.addClass('start');

              //animated progress bars
                      bar_width = $elem.attr('aria-valuenow');
                      $elem.css('width',bar_width + '%');
          }


      // Capture scroll events
      $(window).scroll(function () {
          $('.progress-bar').each(function(){
              checkAnimation($(this));
          });
      });*/


/**************************************************************************************************************/
	});

/*(function($){
    $.resizeend = function(el, options){
        var base = this;
        
        base.$el = $(el);
        base.el = el;
        
        base.$el.data("resizeend", base);
        base.rtime = new Date(1, 1, 2000, 12,00,00);
        base.timeout = false;
        base.delta = 200;
        
        base.init = function(){
            base.options = $.extend({},$.resizeend.defaultOptions, options);
            
            if(base.options.runOnStart) base.options.onDragEnd();
            
            $(base.el).resize(function() {
                
                base.rtime = new Date();
                if (base.timeout === false) {
                    base.timeout = true;
                    setTimeout(base.resizeend, base.delta);
                }
            });
        
        };
        base.resizeend = function() {
            if (new Date() - base.rtime < base.delta) {
                setTimeout(base.resizeend, base.delta);
            } else {
                base.timeout = false;
                base.options.onDragEnd();
            }
        };
        
        base.init();
    };
    
    $.resizeend.defaultOptions = {
        onDragEnd : function() {},
        runOnStart : false
    };
    
    $.fn.resizeend = function(options){
        return this.each(function(){
            (new $.resizeend(this, options));
        });
    };



})(jQuery);	*/