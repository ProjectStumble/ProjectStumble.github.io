/*Function carousel from W3 school JavaScript Carousel at https://www.w3schools.com/howto/howto_js_slideshow.asp
Lines 5-17
-NE
 */
var slideIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("bgSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 6000);

}

