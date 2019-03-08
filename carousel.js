(function ( $ ) {
 	$.salahSlider = function(element, options) {

 		var Slider = this;
 		var $target = $(element);
        
        // This is the easiest way to have default options.
        var settings = $.extend({
        	images: [],
        	autoplay: true,
        	loop: true,
        	timeout: 2000
        }, options );
 
        Slider.currentImage = 0;

	  	Slider.generateCarouselItem = function (src, index) {
	  		return 	"<div class='carouselItem' data-item='"+index+"' style='display: "+(index == 0 ? 'block' : 'none')+"'>"
				  	+"	<img src='"+src+"' />"
				  	+"</div>";
	  	}

	  	Slider.init = function () {

			$(settings.images).each(function(index, val) {
				$target.append(Slider.generateCarouselItem(val, index));
			});

			Slider.autoplay();
	  	}

	  	Slider.autoplay = function () {
	  		setInterval(function() {
	  			Slider.getItemByData(Slider.currentImage).fadeOut(function() {
	  				if (Slider.currentImage +1 <= settings.images.length -1) {
	  					Slider.currentImage++;
	  				} else {
	  					Slider.currentImage = 0;
	  				}
	  				Slider.getItemByData(Slider.currentImage).fadeIn()
	  			});
	  		}, settings.timeout);
	  	}

	  	Slider.loop = function () {

	  	}

	  	Slider.getItemByData = function(item) {
	  		return $(".carouselItem[data-item='"+item+"']");
	  	}

	  	Slider.init();
	}
    $.fn.salahSlider = function( options ) {
		var $self = $(this);
    	if (undefined === $self.data('salahSlider')) 
		{
			var Slider = new $.salahSlider(this, options);
			$self.data('salahSlider', Slider);
		}
    	return $self;
    };
}( jQuery ));