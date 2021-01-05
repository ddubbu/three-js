import * as THREE from 'three';

//! To display somthing, we need 3 things: scene, camera and renderer.
// so that we can render the scene with camera.

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//* Camera : PerspectiveCamera among 2 types
// args = [filed of view, aspect ratio, near, far]

const renderer = new THREE.WebGL1Renderer(); // displays on page
renderer.setSize(window.innerWidth, window.innerHeight); // viewport 인 듯
document.body.appendChild(renderer.domElement); // Add a canvas
