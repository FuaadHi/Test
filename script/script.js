var toggler = document.querySelector(".toggler"),
  list = document.querySelector(".links ul"),
  themer = document.querySelector(".theme i"),
  body = document.querySelector("body"),
  preloader = document.querySelector(".preloader");
top_arrow = document.querySelector(".fa-arrow-left");
window.addEventListener("load", () => {
  preloader.style.display = "none";
});
document.addEventListener("scroll", () => {
  if (scrollY > 0) {
    top_arrow.style.display = "block";
  } else top_arrow.style.display = "none";
});
top_arrow.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
document.onclick = (e) => {
  if (!e.target.classList.contains("toggler")) {
    if (list.classList.contains("active")) {
      list.classList.remove("active");
    }
  }
};
toggler.addEventListener("click", () => {
  list.classList.toggle("active");
});
themer.addEventListener("click", () => {
  body.classList.toggle("theme");
  themer.classList.toggle("fa-moon");
});
