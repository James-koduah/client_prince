function populate_side(n){
    let side_pics = document.getElementById("side_pics")
    for (let i = 1; i < n; i++){
        let panel = document.createElement('div')
        panel.classList.add('side_panel_pictures')
        let panel_img = document.createElement('img')
        panel_img.src = 'css/images/works/stonedesign/stonedesign_' + i % 30 + '.webp';
        panel_img.setAttribute('id', `stonedesign_${i % 30}`)
        panel_img.setAttribute('onclick', 'full_display(this)')
        panel.id ='featuredwork_7'
        panel.appendChild(panel_img)
        side_pics.appendChild(panel)
    }
}

populate_side(80)