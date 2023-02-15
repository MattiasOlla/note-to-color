const A = 440; // Hz
const cLight = 299792458; // m/s

const notes = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];

const visibleLightMaxNm = 750;

function note2frequency(noteName) {
  return A * 2 ** (notes.indexOf(noteName) / 12);
}

function frequency2wavelength(frequency) {
  return cLight / frequency;
}

function findVisibleLightOctave(frequency) {
  let octaves = 0;
  let wavelengthNm;
  while (
    (wavelengthNm = frequency2wavelength(frequency) * 1e9) > visibleLightMaxNm
  ) {
    octaves += 1;
    frequency *= 2;
  }
  return [wavelengthNm, octaves];
}

export function noteName2Wavelength(noteName) {
  const noteFrequency = note2frequency(noteName);
  const [wavelengthAsLight, numOctaves] = findVisibleLightOctave(noteFrequency);
  const wavelengthAsLightRounded = wavelengthAsLight.toFixed(2);
  return `${noteName}: ${wavelengthAsLightRounded} nm (${numOctaves} octaves up)`;
}
