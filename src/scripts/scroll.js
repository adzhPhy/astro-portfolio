const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-content");
    } else {
      entry.target.classList.add("hide-content");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hide-content");
hiddenElements.forEach((el) => observer.observe(el));
