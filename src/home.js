const content = document.getElementById("content");

export function loadHome() {
  // main
  const main = document.getElementById("main");

  // clear main
  main.innerHTML = "";
  main.setAttribute("class", "home");

  const mainTitle = document.createElement("h1");
  const mainContent = document.createElement("p");
  mainTitle.textContent = "Welcome to our restaurant!";
  mainContent.textContent = "We serve the best food in town!";
  main.append(mainTitle, mainContent);
}

export function loadDefaultPage() {
  const nav = document.createElement("nav");
  nav.id = "nav";
  const navTitle = document.createElement("h2");
  navTitle.textContent = "Restaurant Page";
  nav.appendChild(navTitle);
  const navList = document.createElement("ul");
  const navHome = document.createElement("li");
  const navMenu = document.createElement("li");
  const navContact = document.createElement("li");
  const navAbout = document.createElement("li");
  navHome.textContent = "Home";
  navMenu.textContent = "Menu";
  navContact.textContent = "Contact";
  navAbout.textContent = "About";
  navList.append(navHome, navMenu, navContact, navAbout);
  nav.appendChild(navList);
  content.appendChild(nav);

  // main
  const main = document.createElement("main");
  main.id = "main";
  content.appendChild(main);
  loadHome();

  // footer
  const footer = document.createElement("footer");
  footer.id = "footer";
  const footerContent = document.createElement("p");
  footerContent.textContent = "Made by @caykay";
  footer.appendChild(footerContent);
  content.appendChild(footer);
}
