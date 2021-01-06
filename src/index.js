/* 기본 build */
import * as THREE from 'three';
console.log("hello")
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff ); // 배경색 설정
scene.fog = new THREE.Fog("black", 10, 100)
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGL1Renderer(); // displays on page
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement); // Add a <canvas/> to DOM
/* 기본 build */

const points = []; // 점 순서대로 그려지네. 
//* with 4 points Make closed triangle.
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( -10, 0, 0 ) );

//! what is different between Mesh~ vs Line~ method
const geometry = new THREE.BufferGeometry().setFromPoints( points );
const material = new THREE.LineBasicMaterial({color:0x0000ff});
const line = new THREE.Line(geometry, material);
scene.add(line);


renderer.render( scene, camera ); 
