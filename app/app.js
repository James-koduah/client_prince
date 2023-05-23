let nav_toggle_on = false;
let menu_bar = document.getElementById("menu_bar")
let nav_menu_button = document.getElementById("nav_menu_button")
function nav_toogle() {
  if (nav_toggle_on == false) {
    menu_bar.style.zIndex = 999;
    nav_toggle_on = true;
  }
  else if (nav_toggle_on == true) {
    menu_bar.style.zIndex = -11;
    nav_toggle_on = false
  }
}