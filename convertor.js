function LengthConverter(valNum) {
  document.getElementById("outputMeters").innerHTML = valNum / 100;
}
function weightConverter1(valNum) {
  document.getElementById("outputKG").innerHTML = valNum / 1000;
}

function weightConverter2(valNum) {
  document.getElementById("outputG").innerHTML = valNum * 1000;
}
function lengthConverter2(valNum) {
  document.getElementById("outputCentiMeter").innerHTML = valNum * 1000;
}
