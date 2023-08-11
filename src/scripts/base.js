// header section
// function to add header animation
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const threshold = 70;
  const header = document.querySelector(".header");

  if (scrollTop > threshold) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
