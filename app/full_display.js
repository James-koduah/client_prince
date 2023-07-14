


/**
 * Add the full display functionality to all <img> elements
 */
let all_image_elements = document.querySelectorAll('img');
  for (let i = 0; i < all_image_elements.length; i++){
    all_image_elements[i].setAttribute('onclick', 'full_display(this)')
  }


/**
 * Full Display section
 */
let full_display_running = false;
let full_display_section = document.getElementById('full_display')
let full_display_img = document.getElementById('full_display_img')
var current_image;
/**
 * Close the Full Display
 * @go_back: This should be true if the custom close button is pressed
 *           This is to implement the browser's previous history function
 *           If it is left at false, It means we are using the browsers built-in button
 *           Which automatically calls the browsers previous history function
 */
function full_display_close(go_back=false){
    full_display_section.style.zIndex = -40;
    full_display_img.src = 'image_placeholder.webp'
    full_display_running = false;
}


/**
 * Open the Full Display
 * @image: The function is passed as full_display(this).
 *         This means that each image that is clicked returns itself as an argument
 */
function full_display(image){
    window.location = "#picture"
    let image_source = image.src
    full_display_img.src = image_source
    full_display_section.style.zIndex = 40
    full_display_running = true
    current_image = image_source;
}

/**
 * Full_display_change
 * @direction: Next or Previous Picture
 */

function full_display_change(direction){
}


/**
 * Handle the event where the user presses the device backbutton 
 * instead of the |X| at the top of the page
 */
jQuery(document).ready(function($) {
if (window.history && window.history.pushState) {
    $(window).on('popstate', function() {
        if (full_display_running == true){
            full_display_close()
        }
    });
}
});