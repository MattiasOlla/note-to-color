import { noteName2Wavelength } from "./frequencies.js";

window.onload = document
  .getElementById("note-select")
  .addEventListener(
    "change",
    (e) =>
      (document.getElementById("output").innerText = noteName2Wavelength(
        e.target.value
      ))
  );
