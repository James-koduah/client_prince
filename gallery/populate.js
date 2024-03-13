var main = document.getElementById('main')
let loading = document.getElementById('loading')
let pic_num = 0;
for (let i = 0; i < 32; i++){
    let img = document.createElement('img')
    img.src = `../old/resources/stonedesign/stonedesign_${pic_num}.webp`
    img.setAttribute('loading', 'lazy')
    main.appendChild(img)
    pic_num++
}

let picture_number = 1;
let groupNumber = 2
function populate(){
    loading.style.display = 'flex'
    window.scrollBy(0,200)
    let section_identifier = `group${groupNumber}`
    let grouping = document.createElement('div')
    grouping.style.display = 'none'
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
    setTimeout(()=>{
        loading.style.display = 'none'
        grouping.style.display = 'flex'
    },2000)
}
