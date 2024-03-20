function mobile_nav(){
    let menu = document.getElementById('mobile_nav_content')
    if (menu.style.display == '' | menu.style.display == 'none'){
        menu.style.display = 'block'
        let cover = document.createElement('div')
        cover.id = 'mobile_nav_cover'
        cover.addEventListener('click', ()=>{
            mobile_nav()
        })
        document.getElementById('mobile_nav').appendChild(cover)
    }else{
        document.getElementById('mobile_nav_cover').remove()
        menu.style.display = 'none'
    }
}