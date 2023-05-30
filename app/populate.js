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