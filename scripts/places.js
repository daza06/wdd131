document.getElementById("lastModified").textContent =
  `Last Modification: ${document.lastModified}`;
document.getElementById("currentyear").textContent = new Date().getFullYear();

const temperature = 62;
const windSpeed = 8;

function calculateWindChill(temp, wind) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(wind, 0.16) +
    0.4275 * temp * Math.pow(wind, 0.16)
  ).toFixed(1);
}

const windChill = document.querySelector("#windChill");

if (temperature <= 65 && windSpeed > 7) {
  windChill.textContent = `${calculateWindChill(temperature, windSpeed)} °F`;
} else {
  windChill.textContent = "N/A";
}
