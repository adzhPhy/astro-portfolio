const handleScroll = (e) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  const elem = document.getElementById(targetId);
  window.scrollTo({
    top: elem?.getBoundingClientRect().top,
    behavior: "smooth",
  });
};
