const figureImg = document.querySelector('figure img');
const Imgs = document.querySelectorAll('.slide img');

Imgs.forEach(function(img) {
    // console.log(img);
    img.addEventListener('click',function(e) {
        // console.log(e.target.src);
        // console.log(figureImg.src);
        figureImg.src = e.target.src;
    })
})
  
