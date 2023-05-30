let divs = {
    'stoneDesign' : {
        'name': 'Stone Design',
        'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Fusce fermentum nisi sed convallis fermentum. Mauris at neque massa.\
        Etiam commodo tempus nibh, nec tincidunt libero dignissim faucibus',
        "path": "css/images/works/stone_design/stone_design",
        'displayPictures': [
            [7, 1],
            [2, 0],
            [12, 0],
            [31, 2]
        ]
    },
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
    let work_text_p = document.createElement('p')
    work_text_p.innerHTML = `${divs[elem]["text"]}`
    let grid_pics = document.createElement('div')
    grid_pics.classList.add('grid_pics')
    let pictures = divs[elem]["displayPictures"]
    for (let pics of pictures){
        let item = document.createElement('img')
        item.src = divs[elem]["path"] + pics[0] + '.jpg'
        if (pics[1] == 1) item.classList.add('pics', 'long_pic')
        else if (pics[1] == 2) item.classList.add('pics', 'wide_pic')
        else item.classList.add('pics')
        grid_pics.appendChild(item)
    }

    work_text.appendChild(work_text_h3)
    work_text.appendChild(work_text_p)
    main_body.appendChild(work_text)
    main_body.appendChild(grid_pics)
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