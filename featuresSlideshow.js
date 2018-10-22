var featuresSlideIndex =1;
showSlides(featuresSlideIndex);

function plusSlides(n){
    showSlides(featuresSlideIndex += n);
}

function currentSlide(n) {
    showSlides(featuresSlideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("featuresSlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){featuresSlideIndex = 1}
    if (n < 1) {featuresSlideIndex = slides.length}
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[featuresSlideIndex-1].style.display = "block";
    dots[featuresSlideIndex-1].className += " active";
}


