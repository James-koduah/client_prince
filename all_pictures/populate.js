var main = document.getElementById('main')
let group1 = document.getElementById('group1')
let main_divs = document.getElementsByClassName('main_div')
let current_divs = main_divs.length;
let current_div_number = 0
let pic_num = 0;
for (let i = 0; i < 32; i++){
    let img = document.createElement('img')
    img.src = `../resources/stonedesign/stonedesign_${pic_num}.webp`
    img.setAttribute('loading', 'lazy')
    main_divs[current_div_number].appendChild(img)
    current_div_number++
    if (current_div_number == main_divs.length) current_div_number = 0
    pic_num++
}

let picture_number = 1;
let groupNumber = 2
function populate(){
    let section_identifier = `group${groupNumber}`
    let grouping = document.createElement('div')
    grouping.className = 'group'
    grouping.setAttribute('id', section_identifier)
    for (let i = 0; i < 8; i++){
        div = document.createElement('div');
        div.className = `main_div ${section_identifier}`;
        grouping.appendChild(div)
    }
    
    main.appendChild(grouping)
    let current_div = 0;
    let img_divs = document.getElementsByClassName(section_identifier);
    for (let i = 0; i < 16; i++){
        let img = document.createElement('img')
        img.src = `./all/all(${picture_number}).webp`;
        img_divs[current_div].appendChild(img)
        current_div++
        if (current_div == img_divs.length) current_div = 0;
        picture_number++
        if (picture_number > 155){
            let seemore = document.getElementById('seemore');
            seemore.innerHTML = 'THE END'
            seemore.setAttribute('onclick', '')
            break;
        }
    }





    add_full_display_to_images()
    groupNumber++
}
