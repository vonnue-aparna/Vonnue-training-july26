console.log("hello");

const aTags = document.querySelectorAll("nav-link");

aTags.forEach((aTag) => {
  aTag.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

function renderFN() {}
