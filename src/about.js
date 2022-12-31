export function loadAbout() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  // clear classes and add about class
  main.setAttribute("class", "about");

  const mainTitle = document.createElement("h1");
  const mainContent = document.createElement("p");
  mainTitle.textContent = "About";
  mainContent.textContent = "about content heres";
  main.append(mainTitle, mainContent);
}
