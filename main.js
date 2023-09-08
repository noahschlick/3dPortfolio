import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import * as CANNON from 'cannon-es';
import { Box } from './MaterialObjects/box';
import { Sphere } from './MaterialObjects/sphere';
import { Ground } from './MaterialObjects/ground';
import { GroundPhysics } from './PhisicsObjects/GroundPhysics';
import { BoxPhysics } from './PhisicsObjects/BoxPhysics';
import { SpherePhysics } from './PhisicsObjects/SpherePhysics';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { Portal } from './3DCSSObjects/portal';
import { UFO } from './MaterialObjects/ufo';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Set Renderer for 3D models
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sets orbit control to move the camera around
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

// Sets orbit control to move the camera around
const orbit = new OrbitControls(camera, renderer.domElement);

// Set Renderer for CSS models
const labelRenderer = new CSS3DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0px';
labelRenderer.domElement.style.pointerEvents = 'none';
labelRenderer.domElement.style.overflow = 'hidden';
document.body.appendChild(labelRenderer.domElement);

// Set Loading Manager
const loadingManager = new THREE.LoadingManager();
const progressBar = document.getElementById('progress-bar')

loadingManager.onProgress = function(url, loaded, total) {
  progressBar.value = (loaded / total) * 100;
}

const progressBarContainer = document.querySelector('.progress-bar-container')

loadingManager.onLoad = function() {
  progressBarContainer.style.display = 'none';
}

loadingManager.onError = function(url) {
  console.error(`Got a problem loading: ${url}`)
}

const rgbeLoader = new RGBELoader(loadingManager)
const gltfLoader = new GLTFLoader(loadingManager)


let group = new THREE.Group(); // Group for the UFO

const divContainer = new Portal({
  text: "hello world", 
  x: 0,
  y: 0,
  z: 0
})

scene.add(divContainer.getElement());

let ufoModel;

// GLTF Object
rgbeLoader.load('./Environment/MR_INT-001_NaturalStudio_NAD.hdr', function(texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;

  ufoModel = new UFO({
    gltfLoader: gltfLoader
  });

  group = ufoModel.getGLTF();
  scene.add(group);
})

// Camera positioning
camera.position.set(group.position.x + 0, group.position.y + 20, group.position.z + -30);
orbit.update();


// Add Ground Material
const ground = new Ground({
  color: 0xffffff, 
  size: {x: 3000, y: 3000}
})
scene.add(ground.getGroundMesh())


// Create Gravity
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.81, 0)
});

// Ground Physics
const groundPhys = new GroundPhysics({
  x: 1500, 
  y: 1500, 
  z: 0.1
})
world.addBody(groundPhys.getBody())
groundPhys.setQuaternionFromEuler(-Math.PI / 2, 0, 0)


// Add sphere physics body
const spherePhys = new SpherePhysics({
  vecShape: 20, 
  vecPos: {x: 0, y: 50, z: 0}
});
world.addBody(spherePhys.getBody());
spherePhys.setLinearDamping(0.31);

const groundSphereContactMat = new CANNON.ContactMaterial(
  groundPhys.getPhysMat(),
  spherePhys.getPhysMat(),
  
  {restitution: 0.0}
);

world.addContactMaterial(groundSphereContactMat);

const timeStep = 1 / 60;

// Start the animation loop
function animate(time) {
  world.step(timeStep)
  if (group)
    group.rotation.y = time / 3000;
  renderer.render(scene, camera);

  ground.mergePhysics(groundPhys.getPosition(), groundPhys.getQuaternion());
  group.position.copy(spherePhys.getPosition(), spherePhys.getQuaternion());
  //ufoModel.getGLTF().position.copy(spherePhys.getPosition(), spherePhys.getQuaternion());
  camera.position.set(group.position.x + 0, group.position.y + 150, group.position.z + -250);
  //camera.position.set(0, 150, -250);
  labelRenderer.render(scene, camera);

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  labelRenderer.setSize(this.window.innerWidth, this.window.innerHeight);
});

document.addEventListener('keydown', function(event) {
  moveSaucer(event);
  detectLocation(event);
})

function detectLocation(event) {
  console.log("PositionX: ", group.position.x);
  console.log("PositionY: ", group.position.y);
  console.log("Div Container: ", divContainer.position.x);
  console.log("Div Container: ", divContainer.position.y);
  console.log("DC Width: ", divContainer.getWidth());
  console.log("DC Height: ", divContainer.getHeight());

  
}

function moveSaucer(event){
  if (event.keyCode >= 37 && event.keyCode <= 40) {
    event.preventDefault();
  }

  switch(event.keyCode){
    case 39:
      console.log("Moving Right")
      moveRight(spherePhys.getBody())
      break;
    case 37:
      console.log("Moving Left")
      moveLeft(spherePhys.getBody())
      break;
    case 38:
      console.log("Moving Forward")
      moveForward(spherePhys.getBody())
      break;
    case 40:
      console.log("Moving Backward")
      moveBackward(spherePhys.getBody())
      break;
  }
}

function moveRight(body) {
  const impulseForce = new CANNON.Vec3(-20, 0, 0); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}

function moveLeft(body) {
  const impulseForce = new CANNON.Vec3(20, 0, 0); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}

function moveForward(body) {
  const impulseForce = new CANNON.Vec3(0, 0, 20); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}

function moveBackward(body) {
  const impulseForce = new CANNON.Vec3(0, 0, -20); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}


