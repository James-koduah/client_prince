let images = document.querySelectorAll('img');
  for (let i = 0; i < images.length; i++){
    images[i].setAttribute('onclick', 'full_display(this)')
  }
  /**
   * Full Display section
   */
  let full_display_section = document.getElementById('full_display')
  let full_display_img = document.getElementById('full_display_img')
  /**
   * Close the Full Display
   */
  function full_display_close(){
    full_display_section.style.zIndex = -40;
  }


  /**
   * Open the Full Display
   */
  function full_display(image){
    image_source = image.src
    full_display_img.src = image_source
    full_display_section.style.zIndex = 40
  }