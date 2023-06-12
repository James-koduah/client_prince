

/**
 * This block of code is for the slide_show on the welcome page
 * I am using a setInterval to display different divs
 */
let welcome_slides = document.getElementsByClassName('slideW')
let welcome = document.getElementById('welcome')


welcome_slides[0].style.display = "block"
welcome_slides[0].className += ' fade_up'
let movements = [" fade_up", " fade_right", " fade_left"]
let team_pic = "url(resources/image_resources/team.webp) no-repeat"
if (screen.width < 500){
    team_pic = "url(resources/image_resources/team_small.webp) no-repeat"
}
let wallpaper = true
function change_slide(current){
    if (wallpaper == true){
        welcome.style.background = team_pic;
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
    welcome_slides[current].className = 'slideW'
    welcome_slides[next].style.display = 'block'
    welcome_slides[next].className += movements[next]
}


let first_display_pics = document.getElementsByClassName('picture_first_display')
let pic_num = 6;
for (let i = 0; i < first_display_pics.length; i++){
    let img = document.createElement('img')
    img.src = `resources/stonedesign/stonedesign_${pic_num}.webp`
    first_display_pics[i].appendChild(img)
    pic_num++
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
    console.log("running")
}


window.onscroll = function (e) {
    // console.log(window.scrollY )
    if (window.scrollY > 800 && window.scrollY < 1000) {run = false, cleared = true; console.log("cleared"); clearInterval(welcome_slide_show)}
    if (window.scrollY < 750) {
        run = true;
        if (cleared == true) {welcome_slide_show = setInterval(slides, 10000); console.log("restarted")}
        cleared = false;
    }
  };