import * as THREE from '/build/three.module.js';

//! To display somthing, we need 3 things: scene, camera and renderer.
// so that we can render the scene with camera.

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//* Camera : PerspectiveCamera among 2 types
// args = [filed of view, aspect ratio, near, far]
// near, far 에 따라 시야에 보여지고 안보여지고

const renderer = new THREE.WebGL1Renderer(); // displays on page
renderer.setSize(window.innerWidth, window.innerHeight); 
//* viewport와 함께
// 3번째 인자는 resolution과 관련
document.body.appendChild(renderer.domElement); // Add a <canvas/> to DOM

const geometry = new THREE.BoxGeometry(); // create cube
const material = new THREE.MeshBasicMaterial({color:0x00ff00}); // coloring
const cube = new THREE.Mesh(geometry, material);// with Mesh
scene.add(cube);
camera.position.z = 5; // default coordinate is (0,0,0)
// camera.position.x = 2;
// camera.position.y = 2;

//! How to display the element?
// render, animate loop
// typical screen is refreshed 60 times per second
renderer.render( scene, camera ); // render를 통해 element를 띄움.

const animate = function () { 
  requestAnimationFrame( animate ); // 자체를

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();