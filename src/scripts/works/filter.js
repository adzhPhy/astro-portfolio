const workDiv = document.querySelector(".work-cards");
const worksClone = workDiv.cloneNode(true); // temp clone to restore default
const works = workDiv.querySelectorAll(".work-card");
const workTags = workDiv.querySelectorAll(".work-tag");

const handleWorkFilter = (e) => {
  const tag = e.target?.innerText;
  works.forEach((work) => {
    if (work.textContent.includes(tag)) {
      const tempWork = work.cloneNode(true);
      workDiv.replaceChildren(tempWork);
    }
    if (tag === "All") {
      workDiv.replaceChildren(worksClone);
    }
  });
};

workTags?.forEach((tag) => addEventListener("click", handleWorkFilter));
