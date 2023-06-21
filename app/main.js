let flicker = document.querySelector('#flicker')
function tumble(){
    flicker.className += ' flicker'
    setTimeout(()=>{flicker.className = ''},1000)
    
}

/**
 * This block of code is for the slide_show on the welcome page
 * I am using a setInterval to display different divs
 */
let welcome_slides = document.getElementsByClassName('slide')
let welcome = document.getElementById('welcome')


welcome_slides[0].style.display = "block"
welcome_slides[0].className += ' fade_up'
let movements = [" fade_up", " fade_right", " fade_left"]
let wallpaper = true
function change_slide(current){
    if (wallpaper == true){
        welcome.style.background = "url(resources/image_resources/team_small.webp) no-repeat";
        welcome.style.backgroundSize = '100% 100%'
        welcome.style.backgroundAttachment = "fixed"
        wallpaper = false
    }
    else{
        welcome.style.background = "url(resources/image_resources/about.webp) no-repeat";
        welcome.style.backgroundSize = '120% 100%'
        welcome.style.backgroundAttachment = "fixed"
        wallpaper = true
    }
    let next = current + 1
    if (next > 2) next = 0
    welcome_slides[current].style.display = 'none'
    welcome_slides[current].className = 'slide'
    welcome_slides[next].style.display = 'block'
    welcome_slides[next].className += movements[next]
}

let run = true
cleared = false
let n = 0;
let welcome_slide_show = setInterval(slides, 10000)
function slides(){
    if (n > 2) n = 0
    change_slide(n)
    n++
    if (run == false) clearInterval(welcome_slide_show)
}

let nav = document.querySelector('nav')
let yScroll = 100;
window.onscroll = function (e) {
    //Stop the hompage background change animations
    if (window.scrollY > 800 && window.scrollY < 1000) {run = false, cleared = true;  clearInterval(welcome_slide_show)}
    if (window.scrollY < 750) {
        run = true;
        if (cleared == true) {welcome_slide_show = setInterval(slides, 10000);}
        cleared = false;
    }

    // Control the navbar disappearing and appearing during scroll
    if (window.scrollY > yScroll){
        nav.style.top = '-20vh' 
        yScroll = window.scrollY       
    }
    else{
        nav.style.top = '0'
        yScroll = window.scrollY
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
    menu_bar.style.zIndex = 20;
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
let darknominal = getComputedStyle(document.documentElement).getPropertyValue('--light-dark');
dark = true
if (darknominal == 'light') dark = false;
let day_night = document.getElementById('day_night')
function light_dark(){
  if (dark == true) {
    document.documentElement.style.setProperty('--main-bg-color', '#fff')
    document.documentElement.style.setProperty('--soft-bg-color', '#f4f4f4')
    document.documentElement.style.setProperty('--main-bg-color-faded', '#f9f6f0b3')
    document.documentElement.style.setProperty('--minor-bg-color', '#f6ddf4')
    document.documentElement.style.setProperty('--opposite-bg-color', '#545456')
    document.documentElement.style.setProperty('--text-color', '#2b2a2a')
    document.documentElement.style.setProperty('--color-border', '#686868')
    document.documentElement.style.setProperty('--extreme-text-color', '#000000')
    document.documentElement.style.setProperty('--about-text-color', '#4f4c50')
    document.documentElement.style.setProperty('--main-menu', '#fbfafb')
    document.documentElement.style.setProperty('--main-menu-div', '#626161')
    day_night.name = 'sunny-outline'
    dark = false
  }
  else
  if (dark == false){
    document.documentElement.style.setProperty('--main-bg-color', '#000000')
    document.documentElement.style.setProperty('--soft-bg-color', '#212020')
    document.documentElement.style.setProperty('--main-bg-color-faded', '#1f1f1fb3')
    document.documentElement.style.setProperty('--minor-bg-color', '#333133')
    document.documentElement.style.setProperty('--opposite-bg-color', '#f9f6f0')
    document.documentElement.style.setProperty('--text-color', '#cac6c6')
    document.documentElement.style.setProperty('--color-border', '#f7f4ed')
    document.documentElement.style.setProperty('--extreme-text-color', '#ffffff')
    document.documentElement.style.setProperty('--about-text-color', '#bebcbf')
    document.documentElement.style.setProperty('--main-menu', '#000000')
    document.documentElement.style.setProperty('--main-menu-div', '#c0c0c0')
    dark = true
    day_night.name = 'moon-outline'
  }
}
  