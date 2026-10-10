const products = [
  {
    id: "dz-0001",
    name: "Wood",
  },
  {
    id: "dz-0002",
    name: "Metal",
  },
  {
    id: "dz-0003",
    name: "Copper",
  },
  {
    id: "dz-0004",
    name: "Steel",
  },
  {
    id: "dz-0005",
    name: "Ceramic",
  },
];

const productSelect = document.querySelector("#productName");

products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;
document.getElementById("currentYear").textContent = new Date().getFullYear();
