document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;
document.getElementById("currentyear").textContent = new Date().getFullYear();

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});
