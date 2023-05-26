let menu_bar = document.getElementById("menu_bar");
let nav_menu_button = document.getElementById("nav_menu_button");
let nav = document.getElementsByClassName('nav');


/**
   * On Mobile devices or smaller screen widths
   * nav_toogle - To toogle the navigation bar with a click of the menu button
   * @nav_toggle_on: The switch to tell if the navigation bar is hidden or displayed
   * Return: Nothing
*/
let nav_toggle_on = false;
function nav_toogle() {
  if (nav_toggle_on == false) {
    menu_bar.style.zIndex = 999;
    nav_toggle_on = true;
  }
  else if (nav_toggle_on == true) {
    menu_bar.style.zIndex = -11;
    nav_toggle_on = false;
  }
}


/**
 * To control the nav bar:
 * Has the effect of changing the color of the navigation bar
 * if we scroll a certain height
 * Return: Void
 */
window.onscroll = function (e) {
  if (window.scrollY > 150)
  {
    for (let i = 0; i < nav.length; i++){
      nav[i].style.background = 'var(--quotes-bg-color)'
    }
  }
  else{
    for (let i = 0; i < nav.length; i++){
      nav[i].style.background = 'transparent'
    }
  }
};


/**
 * full_display - Display Pictures in Full Screen Mode
 * @pic_name: The Name of the Picture File to be displayed
 * @pic_size: The ratio aspect of the picture to be displayed (Portrait, LandScape...)
 * @picture_name: Global variable to store the current Picture being displayed
 *                Helps in other helper functions to the full display feature
 * Return: Nothing
 */
display = document.getElementById("full_display")
display_pic = document.getElementById("full_display_pic")
display_close = document.getElementById("full_display_pic")
var picture_name;

function full_display(pic_name, pic_size='large') {
  display_pic.style.background = `url('css/images/works/${pic_name}.webp') no-repeat`;
  display_pic.style.backgroundSize = "100% 100%";
  picture_name = pic_name;
  display.style.zIndex = 100;
  if (pic_size == 'large') {
    display_pic.style.width = "100%";
    display_pic.style.height = "80%";
  }
  if (pic_size == 'medium') {
    display_pic.style.width = "80%";
    display_pic.style.height = "60%";
  }
  if (pic_size == 'small') {
    display_pic.style.width = "80%";
    display_pic.style.height = "50%";
  }
  if (pic_size == 'flat'){
    display_pic.style.width = "100%";
    display_pic.style.height = "30%";
  }
}

/**
 * full_display_close - Close the full display
 */
function full_display_close(){
  display.style.zIndex = -3
}

/**
 * full_display_change - Display the next picture in the reel
 * @direction: Wheather to display the Previous or Next picture
 * Return: Nothing
 */
function full_display_change(direction) {
  //Just a mock of the actual thing
  let number = picture_name.split("_")
  number = number[1]
  number = Number(number)
  if (direction == '>') {
    if (number < 7) number++;
    display_pic.style.background = `url('css/images/works/pic_${number}.webp') no-repeat`
    display_pic.style.backgroundSize = "100% 100%"
    picture_name = `pic_${number}`
  }
  if (direction == '<') {
    if (number > 1) number--;
    display_pic.style.background = `url('css/images/works/pic_${number}.webp') no-repeat`
    display_pic.style.backgroundSize = "100% 100%"
    picture_name = `pic_${number}`
  }
}

window.onload = function (){
  let element = document.getElementsByClassName('dis_metric');
  for (let i = 0; i < element.length; i++){
    let id = element[i].id
    if (id == 100){
      element[i].style.background = `linear-gradient(0deg, var(--glow-color), var(--glow-color), var(--glow-color), blue 99%)`
    }
    else{
      id = Number(id)
      id += 5
      element[i].style.background = `linear-gradient(0deg, var(--glow-color), var(--glow-color), transparent ${id}%)`
    }
  }
}
