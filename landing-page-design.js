// Navbar/Sidebar
const menuBtn = document.querySelectorAll(".menu-btn");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li");

// Toggle Sidebar Open/Close
menuBtn.forEach((btn) => {
  btn.addEventListener("click", sideNavToggle);
});

function sideNavToggle() {
  // Animation Delay
  let delay = 100;
  // Toggle Open Class
  menu.classList.toggle("menu-open");

  // Sidenav Link Slide Animations
  setTimeout(() => {
    // Reset Animation After All Of Them End
    resetAnimations();
  }, delay * (links.length + 1));

  // Add Animation To Links
  links.forEach((link) => {
    // Opacity
    link.style.opacity = "0";
    // Animation
    link.style.animation = "slideIn 400ms ease-in-out forwards";
    // Delay
    link.style.animationDelay = delay + "ms";

    // Increase Delay For Each Link
    delay += 100;
  });

  /* Reset Animation So They
    Can Be Activated Again */
  function resetAnimations() {
    // Select All Links
    links.forEach((link) => {
      // Remove Animation
      link.style.animation = "none";
      // Set Opacity Back To Default
      link.style.opacity = "1";
    });
  }
}

// Slider
const cntrl = document.querySelectorAll(".slider-cntrl");
const cntrlMob = document.querySelectorAll(".pagination-mobile > li");
const title = document.querySelector(".title");
const subTitle = document.querySelectorAll(".sub-title");
const img = document.querySelector(".thumbnail");
const count = document.querySelector(".slider-count");
const progress = document.querySelector(".progress div");

let id = 0;

// Data
// Array With Image Paths For The Slider
let images = ["images/img-01.jpg", "images/img-02.jpg", "images/img-03.jpg"];

// Progress Width For The Slider
let progressWidth = ["33%", "66%", "100%"];

// Text Variations For The Slider
let text = ["Work", "Action", "Travel"];

// Pagination Contrlos
for (let i = 0; i < cntrl.length; i++) {
  // Add Click Event For All Pagination
  cntrl[i].addEventListener("click", () => {
    // Run The Slider Function
    slider(i);
    // Set Id To Clicked Pagination Index
    id = i;
    // Stop Auto Slide
    stopAutoSlide();
  });
  //Add Click Event For All Pagination On Mobile
  cntrlMob[i].addEventListener("click", () => {
    // Run The Slider Function
    slider(i);
    // Set Id To Clicked Pagination Index
    id = i;
    // Stop Auto Slide
    stopAutoSlide();
  });
}

function slider(i) {
  // Change Thumbnail Image
  img.src = images[i];
  // Progress Progression
  progress.style.width = progressWidth[i];
  // Change Title
  title.innerText = text[i] + " Collection ";
  // Change Sub Title
  subTitle.forEach((sub) => {
    sub.innerText = text[i] + " Collection ";
  });

  // change Slide Number
  count.innerText = "/0" + (i + 1);

  // Remove Active Class From All
  for (let i = 0; i < cntrl.length; i++) {
    cntrl[i].classList.remove("active");
    cntrlMob[i].classList.remove("pag-active");
  }

  // Reset Active Class To Clicked Element
  cntrl[i].classList.add("active");
  cntrlMob[i].classList.add("pag-active");
}

// Slider Automation
function nextSlide() {
  // Increment Img Id
  id++;
  /* Check If Id Is Greater Than
    The Number Of Avalible Slides */
  if (id > cntrl.length - 1) {
    id = 0;
  }
  // Run The Slider Function
  slider(id);
}

// Automate Slider
let autoSlide = setInterval(nextSlide, 10000);

// Stop Automatic Slide
function stopAutoSlide() {
  clearInterval(autoSlide);
}
