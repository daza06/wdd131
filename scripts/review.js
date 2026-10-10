let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#reviewCount").textContent = reviewCount;

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;
document.getElementById("currentYear").textContent = new Date().getFullYear();
