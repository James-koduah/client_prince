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
    full_display_running = false;
    if (go_back) window.history.back(); // if we are using our custom button. The browsers back button automatically implements this
}


/**
 * Open the Full Display
 * @image: The function is passed as full_display(this).
 *         This means that each image that is clicked returns itself as an argument
 */
function full_display(image){
    let image_source = image.src
    full_display_img.src = image_source
    full_display_section.style.zIndex = 40
    full_display_running = true
    window.history.pushState('forward', null, 'picture'); // We add to the browsers history so that we can go back to the main-page if we close this div
    current_image = image_source;
}

/**
 * Full_display_change
 * @direction: Next or Previous Picture
 */

function full_display_change(direction){
    let split_name = current_image.split('_')
    let split_name_second = split_name[1]
    
    if (direction == '>'){

    }
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