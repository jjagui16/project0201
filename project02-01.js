/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Jose Aguilar
      Date:   02/19/2026

      Filename: project02-01.js
 */

function FarenheitToCelsius (degree) {
      return (degree -32) / 1.8;
}

function CelsiusToFarenheit (degree) {
      return (degree * 1.8) + 32;
}

document.getElementById("cValue").onchange = function() {
      let cDegree = Number(document.getElementById("cValue").value);
      document.getElementById("fValue").value = CelsiusToFarenheit(cDegree);
}
document.getElementById("fValue").onchange = function() {
      let fDegree = Number(document.getElementById("fValue").value);
      document.getElementById("cValue").value = FarenheitToCelsius(fDegree);
}