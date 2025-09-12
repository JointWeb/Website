//Code to run the header
(function(){

     function setHeader() {
     const pageHeaders = ["Whoever You Are", "Wherever You Are on Life's Journey", "Whatever You Have Done", "You Are Welcome Here"];
     let headerIndex = 0;
     const headerElement = document.getElementById("page-header");

     const interval = setInterval(() => {
          headerElement.textContent = pageHeaders[headerIndex];
          headerIndex++;

          if (headerIndex >= pageHeaders.length) {
               clearInterval(interval);
          }
     }, 3000);
}

setHeader();

})();

//Code for the Hamburger Menu
(function(){

     const hamburger = document.querySelector(".hamburger");
     const navMenu = document.querySelector(".nav-links");

     function makeActive () {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
     }

     hamburger.addEventListener('click', makeActive);

     const main = document.querySelector("main");

     function removeActive () {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
     }

     main.addEventListener('click', removeActive);

})();

//Code for the Slide Show

(function(){

     const churchImages = ["./images/church1.jpg", "./images/church2.jpg", "./images/church3.jpg", "./images/church4.jpg"];

     let currentImage = 0;

     document.getElementById("next").onclick = nextPhoto;

     document.getElementById("back").onclick = backPhoto;

    function nextPhoto(){
        currentImage++;
        if (currentImage > churchImages.length - 1) {
            currentImage = 0;
        }
        document.getElementById("church-images").src = churchImages[currentImage];
    }

    function backPhoto(){
        currentImage--;
        if (currentImage < 0) {
            currentImage = churchImages.length - 1;
        }
        document.getElementById("church-images").src = churchImages[currentImage];
    }

})();
