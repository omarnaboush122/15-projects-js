const dateFooter = document.querySelector(".date");

const date = new Date();
dateFooter.innerHTML = date.getFullYear();

const navBar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
  if (this.scrollY > navBar.getBoundingClientRect().height) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
});
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");
const linksHeight = links.getBoundingClientRect().height;

navToggle.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const allLinks = document.querySelectorAll(".scroll-link");

allLinks.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    const fixedNav = navBar.classList.contains("fixed-nav");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    let topPosition = element.offsetTop - navHeight;

    if (!fixedNav) {
      topPosition -= navHeight;
    }
    if (navHeight > 82) {
      topPosition += containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: topPosition,
    });
    linksContainer.style.height = 0;
  });
});
