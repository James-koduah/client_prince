/**
 * populate the first_display section
*/
let first_display_pics = document.getElementsByClassName('picture_first_work')
let pic_num = 0;
for (let i = 0; i < first_display_pics.length; i++){
    let img = document.createElement('img')
    img.src = `resources/stonedesign/stonedesign_${pic_num}.webp`
    first_display_pics[i].appendChild(img)
    pic_num++
}