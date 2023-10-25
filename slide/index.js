const prevSlideBtn = document.getElementById("prevSlide");
const display = document.getElementById("display");
const nextSlideBtn = document.getElementById("nextSlide");
let activeSlide = 0;
let slides = [
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
];

function nextSlide() {
  activeSlide++;
  if(activeSlide>slides.length-1){
    activeSlide = 0
    renderUI(slides[activeSlide])
  }
  renderUI(slides[activeSlide]);
}
function prevSlide() {
  activeSlide--;
  if(activeSlide<0){
    activeSlide = slides.length-1
    renderUI(slides[activeSlide])
  }
  renderUI(slides[activeSlide]);
}
function renderUI(src) {
  display.src = src;
}
nextSlideBtn.addEventListener("click",nextSlide)
prevSlideBtn.addEventListener("click",prevSlide)