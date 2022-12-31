import IMAGES from "./images/menu-items/index.js";

export function loadMenu() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  // clear classes and add menu class
  main.setAttribute("class", "menu");

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Menu";

  const mainContent = document.createElement("div");
  mainContent.classList.add("menu-items");
  mainContent.append(...getMenuItems());

  main.append(mainTitle, mainContent);
  // main.appendChild(menu);
}

function getMenuItems() {
  const cards = [];
  for (const item of Object.keys(IMAGES)) {
    // console.log(item);
    cards.push(createCard(item));
  }

  return cards;
}

function createCard(id = null) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-price");

  cardImg.src = IMAGES[id].src;
  cardTitle.textContent = IMAGES[id].name ?? "No Name";
  cardText.textContent = IMAGES[id].description ?? "No description";
  cardPrice.textContent = IMAGES[id].price ? `$${IMAGES[id].price}` : "$0.00";

  cardBody.append(cardTitle, cardText, cardPrice);
  card.append(cardImg, cardBody);

  return card;
}
