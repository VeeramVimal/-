"use strict";

const diceBtn = document.querySelector(".button-section");
const adviceNumber = document.querySelector(".advice-number");
const kural_line_1 = document.querySelector(".line-1");
const kural_line_2 = document.querySelector(".line-2");
const adviceText = document.querySelector(".quotes");
// const apiUrl = "https://api.adviceslip.com/advice";

const apiJson = "data/thirukkural.json"

//Button click event
diceBtn.addEventListener("click", () => {
  let clickNo = 0;
  //Request Data
  fetch(apiJson)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the JSON data
  })
    .then((response) => {
      const kural = response.kural[0]; 
      // Extract data
      const kuralNumber = kural.Number;
      const kuralLine1 = kural.Line1;
      const kuralLine2 = kural.Line2;
      const kuralTranslation = kural.mv;

      // Inject to DOM
      adviceNumber.innerHTML = `திருக்குறள் # ${kuralNumber}`;
      kural_line_1.innerHTML = `${kuralLine1}`
      kural_line_2.innerHTML = `${kuralLine2}`
      adviceText.innerHTML = ` ${kuralTranslation}`
    }).catch(error => console.error(error));
});
