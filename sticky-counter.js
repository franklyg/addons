
//<script type="text/javascript" src="assets/addons/sticky-counter.js"></script>
//<link rel="stylesheet" type="text/css" href="assets/addons/main.css">
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

$(function(){
	$('body').append('<div class="cta viewing" id="viewing-lp" style="opacity: 1;"><p>13 others are viewing this offer right now - <span class="count-up bl">171:18</span> <br><a href="#form-top">Claim Your Trial Botttle Now!</a></p></div>')
	$('#viewing-lp.viewing').css({
		'background': 'rgba(0, 0, 0, 0.8) none repeat scroll 0 0',
		'border-radius': '5px',
		'bottom': '10px',
		'color': '#FF0000',
		'font-weight': 'bold',
		'height': 'auto',
		'left': 'inherit',
		'padding': '10px 15px',
		'position': 'fixed',
		'right': '10px',
		'text-align': 'center',
		'width': 'auto',
		'z-index': '999',
		'opacity': 0,
		'transition': 'all ease 0.5s', 
		'-moz-transition': 'all ease 0.5s',
		'-webkit-transition': 'all ease 0.5s',
		'-o-transition': 'all ease 0.5s'
	});
	$('#viewing-lp.viewing p').css({
	    'color': '#FF0000',
	    'font-family': "'Open Sans', sans-serif ",
	    'text-align': 'center',
	    'font-size': '16px',
	    'font-weight': 'normal'
	});
	$('#viewing-lp.viewing a').css({
	    'background': 'rgba(0, 0, 0, 0) none repeat scroll 0 0',
	    'box-shadow': 'none',
	    'color': '#fff',
	    'font-family': "'Montserrat', sans-serif ",
	    'font-size': 'inherit',
	    'height': 'auto',
	    'top': 0,
	    'right': 0,
	    'left': 0,
	    'margin': 0,
	    'padding': 0,
	    'position': 'relative',
	    'text-align': 'center',
	    'text-decoration': 'underline',
	   	'width': 'auto',
	   	'display': 'block',
	   	'float': 'none',
	   	'font-size': '16px'
		
	}); 
	// $(window).on('scroll', function(){
	// 	// if( $(this).scrollTop() >= $('#section-1').offset().top ) {
	// 	if( $(this).scrollTop() >= '400px' ) {			
	// 		console.log('ok')
	// 		$('#viewing-lp.viewing').css({
	// 			'opacity': '1 !important'
	// 		});
	// 	}
	// });
});
$(document).ready(function(){
	var idDisplayOnScroll = $('#viewing-lp');
    function showOnScroll() {
      if (window.scrollY > 100) {
      	$(idDisplayOnScroll).css({
      		'opacity': 1
      	})
      	// idDisplayOnScroll.style.opacity = 1;
      }else{
      	$(idDisplayOnScroll).css({
      		'opacity': 0
      	})
        // idDisplayOnScroll.style.opacity = 0;
      }
    }
    $(window).on("scroll", showOnScroll);   
  });
