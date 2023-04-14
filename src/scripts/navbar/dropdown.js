const dropdown = document.querySelector(".dropdown");

const select = dropdown.querySelector(".select");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll("ul.menu li");
const selected = dropdown.querySelector(".selected");

select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  menu.classList.toggle("menu-open");
});

options.forEach((option) => {
  function themeSelector() {
    const selectedIcon = selected.getElementsByClassName("lucide")[0];
    const optionIcon = option.getElementsByClassName("lucide")[0];
    // create a shallow copy and replace with current theme icon
    const tempIcon = optionIcon.cloneNode(true);
    optionIcon.setAttribute("id", "icon-active");
    selectedIcon.replaceWith(tempIcon);
    select.classList.remove("select-clicked");
    menu.classList.remove("menu-open");
    // change styles
    const root = document.querySelector(":root");
    if (optionIcon.getAttribute("class") === "lucide lucide-gamepad") {
      root.style.setProperty("--background", "#001437");
      root.style.setProperty("--primary", "#7898fb");
      root.style.setProperty("--secondary", "#5ce5d5");
      root.style.setProperty("--tertiary", "#c3f85f");
    }
    if (optionIcon.getAttribute("class") === "lucide lucide-gauge") {
      root.style.setProperty("--background", "#08053d");
      root.style.setProperty("--primary", "#a6f3ef");
      root.style.setProperty("--secondary", "#440bd4");
      root.style.setProperty("--tertiary", "#ff4d82");
    }
    if (optionIcon.getAttribute("class") === "lucide galaxy") {
      root.style.setProperty("--background", "#0f0827");
      root.style.setProperty("--primary", "#613f81");
      root.style.setProperty("--secondary", "#c574ee");
      root.style.setProperty("--tertiary", "#41b3f0");
    }
  }
  option.addEventListener("click", themeSelector);
});
