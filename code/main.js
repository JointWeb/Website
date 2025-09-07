function setHeader() {
     const pageHeaders = ["Whoever You Are", "Wherever You Are on Life's Journey", "Whatever You Have Done", "You Are Welcomed Here"];
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
