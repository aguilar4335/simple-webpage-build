const home = document.getElementById("home");
const contact = document.getElementById("contact");
const features = document.getElementById("features");
const about = document.getElementById("about");

home.addEventListener("click", () => {
  // alert("Home button clicked!");\\
  window.location.href = "index.html";

  // Accessibility setup
  home.setAttribute("role", "button");
  home.setAttribute("tabindex", "0");

  window.location.href = targetPage;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent default scroll
    el.click();
  }
});
contact.addEventListener("click", () => {
  // alert("Home button clicked!");\\
  window.location.href = "contact.html";

  // Accessibility setup
  contact.setAttribute("role", "button");
  contact.setAttribute("tabindex", "0");

  window.location.href = targetPage;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent default scroll
    el.click();
  }
});
features.addEventListener("click", () => {
  // alert("Home button clicked!");\\
  window.location.href = "features.html";

  // Accessibility setup
  features.setAttribute("role", "button");
  features.setAttribute("tabindex", "0");

  window.location.href = targetPage;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent default scroll
    el.click();
  }
});
about.addEventListener("click", () => {
  // alert("Home button clicked!");\\
  window.location.href = "about.html";

  // Accessibility setup
  about.setAttribute("role", "button");
  about.setAttribute("tabindex", "0");

  window.location.href = targetPage;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault(); // Prevent default scroll
    el.click();
  }
});

const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("ham_active")
});