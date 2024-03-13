let nav = document.getElementsByClassName('nav');
let logo = document.getElementsByClassName('logo')
let quick_contact = document.getElementById('quick_contact')


/**
 * To control the nav bar:
 * Has the effect of changing the color of the navigation bar
 * if we scroll a certain height
 * Return: Void
 */

window.onscroll = function (e) {
  if (window.scrollY > 50) {quick_contact.style.opacity = 0;}
  if (window.scrollY < 50) {quick_contact.style.opacity = 1;}
  if (window.scrollY > 150)
  {
    quick_contact.style.zIndex = -100;
    for (let i = 0; i < logo.length; i++){
      logo[i].style.opacity = 1;
      nav[i].style.background = "var(--main-bg-color)"
    }
  }
  else{
    quick_contact.style.zIndex = 100;
    for (let i = 0; i < logo.length; i++){
      logo[i].style.opacity = 0;
      nav[i].style.background = "transparent"
    }
  }
};




/**
   * On Mobile devices or smaller screen widths
   * nav_toogle - To toogle the navigation bar with a click of the menu button
   * @nav_toggle_on: The switch to tell if the navigation bar is hidden or displayed
   * Return: Nothing
*/
let menu_bar = document.getElementById("menu_bar");
let nav_menu_button = document.getElementById("nav_menu_button");

let nav_toggle_on = false;
function nav_toogle() {
  if (nav_toggle_on == false) {
    menu_bar.style.zIndex = 42;
    nav_toggle_on = true;
  }
  else if (nav_toggle_on == true) {
    menu_bar.style.zIndex = -39;
    nav_toggle_on = false;
  }
}


/**
 * Light and Dark Mode
 */
let dark = true
function light_dark(){
  if (dark == true) {
    /**
     * --main-bg-color:  rgb(31, 31, 31);
    --minor-bg-color: rgb(51, 49, 49);
    --light-bg-color: rgb(221, 221, 251);
    --text-color: aliceblue;
    --color-golden: wheat;
     */
    document.documentElement.style.setProperty('--main-bg-color', 'rgb(249, 246, 240)')
    document.documentElement.style.setProperty('--minor-bg-color', 'rgb(82, 82, 84)')
    document.documentElement.style.setProperty('--light-bg-color', 'rgb(84, 84, 86)')
    document.documentElement.style.setProperty('--text-color', 'rgb(43, 42, 42)')
    document.documentElement.style.setProperty('--color-golden', 'blue')
    nav_menu_button.style.background = "url('css/images/menu_transparent_dark.webp') no-repeat"
    nav_menu_button.style.backgroundSize = '100% 100%'
    dark = false
  }
  else
  if (dark == false){
    document.documentElement.style.setProperty('--main-bg-color', 'rgb(31, 31, 31)')
    document.documentElement.style.setProperty('--minor-bg-color', 'rgb(51, 49, 49)')
    document.documentElement.style.setProperty('--light-bg-color', 'rgb(221, 221, 251)')
    document.documentElement.style.setProperty('--text-color', 'aliceblue')
    document.documentElement.style.setProperty('--color-golden', 'wheat')
    nav_menu_button.style.background = "url('css/images/menu_transparent_light.webp') no-repeat"
    nav_menu_button.style.backgroundSize = '100% 100%'
    dark = true
  }
}