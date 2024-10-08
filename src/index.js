import "./styles.css";
import createGlobe from "cobe";

let phi = 0;
let canvas = document.getElementById("cobe");

const globe = createGlobe(canvas, {
  devicePixelRatio: 2,
  width: 300 * 2,
  height: 300 * 2,
  phi: 0,
  theta: 0,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.3, 0.3, 0.3],
  markerColor: [0.1, 0.8, 1],
  glowColor: [1, 1, 1],
  markers: [
    // longitude latitude
    { location: [37.7595, -122.4367], size: 0.03 },
    { location: [40.7128, -74.006], size: 0.1 }
  ],
  onRender: (state) => {
    // Called on every animation frame.
    // `state` will be an empty object, return updated params.
    state.phi = phi;
    phi += 0.03;
  }
});
