const templeGrid = document.querySelector(".temple-grid");
const pageTitle = document.querySelector("#title");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Fort Collins Colorado",
    location: "Fort Collins, Colorado",
    dedicated: "2016, October, 16",
    area: 42000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/fort-collins-colorado-temple/fort-collins-colorado-temple-50577-main.jpg",
  },
  {
    templeName: "Boise Idaho",
    location: "Boise, Idaho",
    dedicated: "1984, May, 25",
    area: 35868,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-65241-main.jpg",
  },
  {
    templeName: "Albuquerque New Mexico",
    location: "Albuquerque, New Mexico",
    dedicated: "2000, March, 5",
    area: 34245,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg",
  },
];

function displayTemples(filteredTemples) {
  templeGrid.innerHTML = "";

  filteredTemples.forEach((temple) => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

    templeGrid.appendChild(card);
  });
}

function filterTemples(filter) {
  let filtered = temples;

  if (filter === "old") {
    filtered = temples.filter((temple) => parseInt(temple.dedicated) < 1900);
    pageTitle.textContent = "Old Temples";
  } else if (filter === "new") {
    filtered = temples.filter((temple) => parseInt(temple.dedicated) > 2000);
    pageTitle.textContent = "New Temples";
  } else if (filter === "large") {
    filtered = temples.filter((temple) => temple.area > 90000);
    pageTitle.textContent = "Large Temples";
  } else if (filter === "small") {
    filtered = temples.filter((temple) => temple.area < 10000);
    pageTitle.textContent = "Small Temples";
  } else {
    pageTitle.textContent = "Home";
  }

  displayTemples(filtered);
}

document
  .querySelector("#home")
  .addEventListener("click", () => filterTemples("home"));
document
  .querySelector("#old")
  .addEventListener("click", () => filterTemples("old"));
document
  .querySelector("#new")
  .addEventListener("click", () => filterTemples("new"));
document
  .querySelector("#large")
  .addEventListener("click", () => filterTemples("large"));
document
  .querySelector("#small")
  .addEventListener("click", () => filterTemples("small"));

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;
document.getElementById("currentyear").textContent = new Date().getFullYear();
