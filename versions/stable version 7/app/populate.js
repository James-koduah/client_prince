let divs = {
    'stoneDesign' : {
        'name': 'Stone Design',
        'Text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Fusce fermentum nisi sed convallis fermentum. Mauris at neque massa.\
        Etiam commodo tempus nibh, nec tincidunt libero dignissim faucibus',
        'pictureRange': [0, 31]
    },
}


let stone = document.querySelector('#stone_design')
let grid = stone.querySelector('.grid_pics')
let pics = grid.querySelectorAll('.pics')
let pics_long = grid.querySelector('.long_pic')
for (let i = 1; i < pics.length; i++){
    pics[i].style.background = `url(css/images/works/stone_design/stone_design${i}.jpg) no-repeat`;
    pics[i].style.backgroundSize = '100% 100%'
}
pics_long.style.background = 'url(css/images/works/stone_design/stone_design7.jpg) no-repeat';
pics_long.style.backgroundSize = '100% 100%'

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