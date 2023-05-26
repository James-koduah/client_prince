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

display = document.getElementById("full_display")
display_pic = document.getElementById("full_display_pic")
display_close = document.getElementById("full_display_pic")
var picture_name;
function full_display(pic_name, pic_size='large') {
  display_pic.style.background = `url('css/images/works/${pic_name}.png') no-repeat`
  display_pic.style.backgroundSize = "100% 100%"
  picture_name = pic_name
  display.style.zIndex = 100
  if (pic_size == 'large') {
    display_pic.style.width = "100%"
    display_pic.style.height = "80%"
  }
  if (pic_size == 'medium') {
    display_pic.style.width = "80%"
    display_pic.style.height = "60%"
  }
  if (pic_size == 'small') {
    display_pic.style.width = "80%"
    display_pic.style.height = "50%"
  }
  if (pic_size == 'flat'){
    display_pic.style.width = "100%"
    display_pic.style.height = "30%"
  }
}

function full_display_close(){
  display.style.zIndex = -3
  console.log(picture_name)
}

function full_display_change(direction) {
  //Just a mock of the actual thing
  let number = picture_name.split("_")
  number = number[1]
  number = Number(number)
  if (direction == '>') {
    if (number < 7) number++;
    display_pic.style.background = `url('css/images/works/pic_${number}.png') no-repeat`
    display_pic.style.backgroundSize = "100% 100%"
    picture_name = `pic_${number}`
  }
  if (direction == '<') {
    if (number > 1) number--;
    display_pic.style.background = `url('css/images/works/pic_${number}.png') no-repeat`
    display_pic.style.backgroundSize = "100% 100%"
    picture_name = `pic_${number}`
  }
}

window.onload = function (){
  let element = document.getElementsByClassName('dis_metric');
  for (let i = 0; i < element.length; i++){
    // width = element[i].id
    // console.log(width)
    // element[i].style.width = `${width}%`
    let id = element[i].id
    console.log(id)
    if (id == 100){
      element[i].style.background = 'var(--glow-color)'
    }
    else{
      id = Number(id)
      id += 5
      element[i].style.background = `linear-gradient(0deg, var(--glow-color), transparent ${id}%)`
    }
  }
}
