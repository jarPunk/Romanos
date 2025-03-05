import convertirARomano from "./romanos.js";
const numeroRomano = document.querySelector("#numero-romano");
const formRomano = document.querySelector("#romanos-form");
const romanoDiv = document.querySelector("#romano-div");

formRomano.addEventListener("submit", (event) => {
  event.preventDefault();

  const number = Number.parseInt(numeroRomano.value);

  if (isNaN(number) || number < 1 || number > 500) {
    romanoDiv.innerHTML = "<p style='color:red;'>Por favor, introduce un número entre 1 y 500.</p>";
    return;
  }

  const resultado = convertirARomano(number);
  romanoDiv.innerHTML = "<p>Número en romano: " + resultado + "</p>";
});
