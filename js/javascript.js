/*global $*/
$(function () {
    "use strict";
    $(".body, .html, myslide").height($(window).height());

    $('.carousel').carousel();

    /* //Play, Pause and Stop Video
    $('.close, .lightbox').on("click", function () {
         $('iframe').attr('src', $('iframe').attr('src'));
    });
    */
});

//Play, Pause and Stop Video
// global variable for the player
	var player;

	// this function gets called when API is ready to use
	function onYouTubePlayerAPIReady() {
	  // create the global player from the specific iframe (#video)
	  player = new YT.Player('video', {
	    events: {
	      // call this function when player is ready to use
	      'onReady': onPlayerReady
	    }
	  });
	}

	function onPlayerReady(event) {
	  
	  // bind events
	  var playButton = document.getElementById("play-button");
	  playButton.addEventListener("click", function() {
	    player.playVideo();
	  });
	  
	  var pauseButton = document.getElementById("lightbox");
	  pauseButton.addEventListener("click", function() {
	    player.pauseVideo();
	  });

	  var stopButton = document.getElementById("stop-button");
	  stopButton.addEventListener("click", function() {
	    player.stopVideo();
	  });
	  
	}

	// Inject YouTube API script
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//wow called
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
});
wow.init();

// chevron button
$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        var scrollHeigt = $(window).scrollTop();
        if (scrollHeigt > $(window).height()) {
            $(".chevrin-up").fadeIn(500);
        } else if (scrollHeigt < $(window).height()) {
            $(".chevrin-up").fadeOut(500);
        }
    });
    $(".chevrin-up").on("click", function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });
});
