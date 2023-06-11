

/**
 * This block of code is for the slide_show on the welcome page
 * I am using a setInterval to display different divs
 */
let welcome_slides = document.getElementsByClassName('slideW')
let n = 0;
let welcome_slide_show = setInterval(()=>{
    if (n > 2) n = 0
    change_slide(n)
    n++
}, 10000)

welcome_slides[0].style.display = "block"
welcome_slides[0].className += ' fade_up'
function change_slide(current){
    let movements = [" fade_up", " fade_right", " fade_left"]
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