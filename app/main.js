

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
welcome_slides[0].className += ' fade_left'
function change_slide(current){
    let movements = [" fade_left", " fade_right", " fade_up"]
    let next = current + 1
    if (next > 2) next = 0
    welcome_slides[current].style.display = 'none'
    welcome_slides[current].className = 'slideW'
    welcome_slides[next].style.display = 'block'
    welcome_slides[next].className += movements[next]
}