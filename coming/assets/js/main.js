$(document).ready(function () {

	$('#countdown2').countdown('2021/11/12', function(event) {
    var $this = $(this).html(event.strftime(''

    + '<div class="countdown-box"><span class="countdown-time">%D</span> <span class="countdown-label">DAYS</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%H</span> <span class="countdown-label">HOURS</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%M</span> <span class="countdown-label">MINUTES</span></div> '
    + '<div class="countdown-box"><span class="countdown-time">%S</span> <span class="countdown-label">SECONDS</span></div> '));
  });

});

