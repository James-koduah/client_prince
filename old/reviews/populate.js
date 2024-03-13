let main = document.getElementById('main')
let main_divs = document.getElementsByClassName('main_div')
let div_num = 0
let pic_num = 0;
for (let i = 0; i < 32; i++){
    let img = document.createElement('img')
    img.src = `../resources/stonedesign/stonedesign_${pic_num}.webp`
    img.setAttribute('loading', 'lazy')
    main_divs[div_num].appendChild(img)
    div_num++
    if (div_num == main_divs.length) div_num = 0
    pic_num++
}

// pic_num = 0;
// for (let i = 0; i < 30; i++){
//     let img = document.createElement('img')
//     img.src = `../resources/unsifted/raw(${pic_num}).jpg`
//     img.setAttribute('loading', 'lazy')
//     main_divs[div_num].appendChild(img)
//     div_num++
//     if (div_num == main_divs.length) div_num = 0
//     pic_num++
// }
