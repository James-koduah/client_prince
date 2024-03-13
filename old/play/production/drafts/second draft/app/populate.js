function populate_side(n){
    let side_pics = document.getElementById("side_pics")
    for (let i = 0; i < n; i++){
        let panel = document.createElement('div')
        panel.classList.add('side_panel_pictures')
        side_pics.appendChild(panel)
    }
}

populate_side(50)