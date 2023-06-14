/**
 * Add the full display functionality to all <img> elements
 */
let images = document.querySelectorAll('img');
  for (let i = 0; i < images.length; i++){
    images[i].setAttribute('onclick', 'full_display(this)')
  }


/**
 * Full Display section
 */
let full_display_running = false;
let full_display_section = document.getElementById('full_display')
let full_display_img = document.getElementById('full_display_img')
/**
 * Close the Full Display
 */
function full_display_close(){
full_display_section.style.zIndex = -40;
full_display_running = false
}


/**
 * Open the Full Display
 */
function full_display(image){
image_source = image.src
full_display_img.src = image_source
full_display_section.style.zIndex = 40
full_display_running = true
}


/**
 * Handle the event where the user presses the device backbutton 
 * instead of the |X| at the top of the page
 */
jQuery(document).ready(function($) {
if (window.history && window.history.pushState) {
    window.history.pushState('forward', null, './#forward');
    $(window).on('popstate', function() {
        if (full_display_running == true){
            full_display_close()
            if (screen.width < 800) alert('Please Use the | X |')
        }
    });

}
});