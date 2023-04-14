const nav = document.querySelector("nav");
navLinks = nav.querySelector("ul.nav-list a");
const handleScroll = (e) => {
  e.preventDefault();
  const link = e.currentTarget;
  const href = link.href;
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  //   window.scrollTo({
  //     top: elem?.getBoundingClientRects().top - 40,
  //     behavior: "smooth",
  //   });
  elem.scrollIntoView();
};

navLinks.forEach((link) => addEventListener(click, handleScroll));
