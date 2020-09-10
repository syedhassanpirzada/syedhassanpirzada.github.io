//Meters to centimeters
function LengthConverter(valNum) {
  document.getElementById("outputMeters").innerHTML = valNum / 100;
}
//Grams to Kilograms
function weightConverter1(valNum) {
  document.getElementById("outputKG").innerHTML = valNum / 1000;
}
//Kilogram to gram
function weightConverter2(valNum) {
  document.getElementById("outputG").innerHTML = valNum * 1000;
}
//Meter to Centimeter
function lengthConverter2(valNum) {
  document.getElementById("outputCentiMeters").innerHTML = valNum * 1000;
}
