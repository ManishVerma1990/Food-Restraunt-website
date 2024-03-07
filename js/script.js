//navbar scroll
let nav = document.querySelector(".navigation-wrap");
console.log(nav.classList);
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
  console.log(nav.classList);
};

// nav-links hide on click
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navLinks.forEach((e) => {
  e.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

// counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 5786, 2500);
  counter("count3", 0, 1440, 3000);
  counter("count4", 0, 7110, 3000);
});
