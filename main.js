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


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const gltfLoader = new GLTFLoader()
const rgbeLoader = new RGBELoader()

// Sets the color of the background
//renderer.setClearColor(0xFEFEFE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);



let ufo;

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

const group = new THREE.Group();
scene.add(group);


// Sets orbit control to move the camera around
const orbit = new OrbitControls(camera, renderer.domElement);

// Camera positioning
camera.position.set(group.position.x + 0, group.position.y + 20, group.position.z + -30);
orbit.update()

// GLTF Object
rgbeLoader.load('./Environment/MR_INT-001_NaturalStudio_NAD.hdr', function(texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;

  gltfLoader.load('./UFO/scene.gltf', function(gltf) {
    const model = gltf.scene;
    //scene.add(model)
    ufo = model;
    // Add Sphere Material
    const sphere = new Sphere(0xff0000, 15)
    //scene.add(sphere.getMesh())

    group.add(ufo, sphere.getMesh())
    scene.add(group)
  });
})

// Sets a 12 by 12 gird helper
const gridHelper = new THREE.GridHelper(12, 12);
scene.add(gridHelper);

// Sets the x, y, and z axes with each having a length of 4
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

// Add Ground Material
const ground = new Ground(0xffffff, {x: 3000, y: 3000})
scene.add(ground.getGroundMesh())


// Create Gravity
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.81, 0)
});

// Ground Physics
const groundPhys = new GroundPhysics({x: 1500, y: 1500, z: 0.1})
world.addBody(groundPhys.getBody())
groundPhys.setQuaternionFromEuler(-Math.PI / 2, 0, 0)


// Add sphere physics body
const spherePhys = new SpherePhysics(20, {x: 0, y: 50, z: 0});
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
  if (ufo)
    ufo.rotation.y = time / 3000;
  renderer.render(scene, camera);

  ground.mergePhysics(groundPhys.getPosition(), groundPhys.getQuaternion());
  group.position.copy(spherePhys.getPosition(), spherePhys.getQuaternion())
  camera.position.set(group.position.x + 0, group.position.y + 150, group.position.z + -250);

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener('keydown', function(event) {
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
})

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