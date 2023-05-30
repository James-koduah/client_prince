let divs = {
    'featured_work' : {
        'name': 'Featured Work',
        "path": "css/images/works/featured_work/featured_work",
        'displayPictures': [
            [7, 1],
            [2, 0],
            [12, 0],
            [31, 2]
        ]
    },
    'recent_work' : {
        'name': 'Recent Work',
        "path": "css/images/works/recent_work/recent_work",
        'displayPictures': [
            [8, 0],
            [9, 0],
            [11, 0],
            [30, 0],
            [15, 0],
            [22, 0]
        ]
    }
}
let work_section = document.getElementById('works')
for (let elem in divs){
    let main_body = document.createElement('div')
    main_body.classList.add('work_container')
    main_body.id = `${elem}`
    let work_text = document.createElement('div')
    work_text.classList.add('work_text')
    let work_text_h3 = document.createElement('h3')
    work_text_h3.innerHTML = `${divs[elem]["name"]}`
    let grid_pics = document.createElement('div')
    grid_pics.classList.add('grid_pics')
    let pictures = divs[elem]["displayPictures"]
    for (let pics of pictures){
        let pic_div = document.createElement('div')
        pic_div.classList.add('pics')
        if (pics[1] == 1) pic_div.classList.add('long_pic')
        if (pics[1] == 2) pic_div.classList.add('wide_pic')
        let pic_div_img = document.createElement('img')
        pic_div_img.src = divs[elem]["path"] + pics[0] + '.jpg'
        pic_div_img.setAttribute('id', `${elem}_${pics[0]}`)
        pic_div_img.classList.add('work_grid_img')
        pic_div_img.setAttribute('onclick', "full_display(this)")
        pic_div.appendChild(pic_div_img)
        grid_pics.appendChild(pic_div)
    }
    
    main_body.appendChild(grid_pics)
    work_text.appendChild(work_text_h3)
    main_body.appendChild(work_text)
    work_section.appendChild(main_body)
}

 /**
 *  let img = document.createElement('img');
      img.id = 'imgId';
      img.src = '/uploads/media/default/0001/05/e9f3899d915c17845be51e839d5ba238f0404b07.png';
      document.body.appendChild(img);
      img.addEventListener("click", imgSize);
      function imgSize() {
        let myImg = document.querySelector("#imgId");
        let realWidth = myImg.naturalWidth;
        let realHeight = myImg.naturalHeight;
        alert("Original width=" + realWidth + ", " + "Original height=" + realHeight);
      }
 */