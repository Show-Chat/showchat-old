jQuery(document).ready(function() {
	window.alert=function(){}
    jQuery("#ShowChat").click(function() {toggleFullScreen();});
    jQuery("#Show-Chat").click(function() {toggleFullScreen2();});
    jQuery(".exitFull").click(function() {toggleFullScreen2();});        
	 if( jQuery('.cptch_reload_button').length ) {
		 jQuery('.cptch_reload_button').click();
	 }
	if( jQuery('#stream').length ) {
		var audio = document.getElementById('stream');audio.volume = 0.5;
	}
});
function toggleFullScreen2() {
    jQuery(".exitFull").toggle();
    jQuery("#api-showchat").toggleClass('resizable');
}
function toggleFullScreen() {
  if (!document.fullscreenElement && 
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  
        element = document.getElementById("api-showchat"); 
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
