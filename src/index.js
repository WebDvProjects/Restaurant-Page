// import { loadPage } from "./pageload";
import { loadHome, loadDefaultPage } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import { loadContact } from "./contact.js";

import "./css/reset.css";
import "./css/styles.css";

loadDefaultPage();

const navLinks = document.querySelectorAll("li");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const page = e.target.textContent;
    switch (page) {
      case "Home":
        loadHome();
        break;
      case "Menu":
        loadMenu();
        break;
      case "About":
        loadAbout();
        break;
      case "Contact":
        loadContact();
        break;
      default:
        break;
    }
  });
});

window.onload = function () {};
