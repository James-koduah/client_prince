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
  if (window.scrollY > 80)
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
    document.documentElement.style.setProperty('--main-bg-color', 'rgb(249, 246, 240)')
    document.documentElement.style.setProperty('--minor-bg-color', 'rgb(246, 221, 244)')
    document.documentElement.style.setProperty('--light-bg-color', 'rgb(84, 84, 86)')
    document.documentElement.style.setProperty('--text-color', 'rgb(68, 64, 64)')
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

let images = document.querySelectorAll('img');
for (let i = 0; i < images.length; i++){
  images[i].addEventListener('click', ()=>{
    full_display(this, images[i].src)
  })
}
/**
 * full_display - Display Pictures in Full Screen Mode
 * @pic_name: The Name of the Picture File to be displayed
 * Return: Nothing
 */
let display_on = false
let full_display_element = document.getElementById("full_display")
let full_display_img = document.getElementById("full_display_img")
function full_display(picture, source) {
  full_display_element.style.zIndex = 100;
  full_display_img.src = `${source}`;
  display_on = true
}
/**
 * full_display_close - Close the full display
 */
function full_display_close(){
  full_display_element.style.zIndex = -39;
  display_on = false
}
/**
 * Any picture you use in the html recent and featured works number must reflect here
 */
let featured = ['10', '7', '12', '31', '2'];
let recent = ['8', '9', '11', '30', '15', '22']
let stonedesign = []
for(i = 0; i < 31; i++) stonedesign.push(`${i}`)
var currentArray;
function full_display_change(direction){
  
}

addEventListener('keydown', (e) => {
  if (display_on){
    if (e.key == 'ArrowLeft') full_display_change('>')
    if (e.key == 'ArrowRight') full_display_change('<')
  }
})