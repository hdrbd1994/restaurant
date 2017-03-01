$(document).ready(function () {

	$('#js-main-slider').pogoSlider({
		autoplay: true,
		autoplayTimeout: 3000,
		displayProgess: true,
		preserveTargetSize: true,
		targetWidth: 1000,
		targetHeight: 368,
		responsive: true
	}).data('plugin_pogoSlider');

});

var $ = jQuery;
// extend jQuery
$.fn.extend({
    flippy: function (options) {
        var settings = {
            // stop after iteration through all items
            stop: false,
            // time (seconds) between flipps
            interval: 3,
            // speed (ms) of animations
            speed: 1000,
            // distance to fade out
            distance: "20px"
        };
        settings = $.extend(settings, options);
        return this.each(function () {
            // store instance of this
            var $this = $(this);
            // top position of child element
            var topPo = $this.children().eq(1).css('top');
            // interval counter
            var count = 1;
            // interval
            var timer = setInterval(function () {
                // animate item away
                $this.children().eq(0).animate({
                    top: settings.distance,
                    opacity: 0
                }, settings.speed, function () {
                    // move item to the back of the line
                    $(this).css({
                        top: topPo,
                    }).remove().appendTo($this);
                });
                // animate second item in
                $this.children().eq(1).animate({
                    top: 0,
                    opacity: 1
                }, settings.speed / 5);
                // increment
                count++;
                // if stop is true and count equals list length
                if (settings.stop && count === $this.children().length) {
                    // clear timer
                    clearInterval(timer);
                }
            }, settings.interval * 1000);
        });
    }
});




/*Back to elements*/


$(window).scroll(function(){
    
    
    if($(this).scrollTop()>50){
        $('.btt').fadeIn(200);
    }
    else{
        $('.btt').fadeOut(200);
    }
    
});

$('.btt').click(function(){
    
    $('body,html').animate({
        
        scrollTop:0
    },1500);
    
});



$('#menu1').click(function(){
    
    $('body,html').animate({
        
        scrollTop:$('.gallery').offset().top
    },1500);
    
});

$('#review1').click(function(){
    
    $('body,html').animate({
        
        scrollTop:$('.roll').offset().top
    },1500);
    
});


$('#ingr').click(function(){
    
    $('body,html').animate({
        
        scrollTop:$('#vegt').offset().top
        
    },1500);
    
});

$('#abt').click(function(){
    
    $('body,html').animate({
        
        scrollTop:$('#rabt').offset().top
        
    },1500);
    
});

$('#res').click(function(){
    
    $('body,html').animate({
        
        scrollTop:$('#rres').offset().top
        
    },1500);
    
});


$(document).ready(function(){
    
 
 $('#cross').click(function(){
     
     $(".box").hide(500);

 });
    
    $('.msg').click(function(){
        
        $('.box').show(500);
        
    });
    
});
