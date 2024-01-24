import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';


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
import { FarmMaterial } from './MaterialObjects/farmMaterial';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { FarmLand } from './MaterialObjects/farmLand';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  55,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );
const helper = new THREE.CameraHelper( camera );
scene.add( helper );

// Set Renderer for 3D models
const renderer = new THREE.WebGLRenderer({antialias: true, alpha: false });
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

// Prompt for game
const promptToView = document.getElementById('enter-prompt')
promptToView.textContent = ""

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
const farmLoader = new GLTFLoader(loadingManager)


let group = new THREE.Group(); // Group for the UFO
let farm = new THREE.Group();

const divContainer = new Portal({
  text: "<-- Contacts", 
  x: 6,
  y: 0,
  z: 20
})
const divContainer_1 = new Portal({
  text: "Portfolio -->", 
  x: -6,
  y: 0,
  z: 20
})

const loader = new FontLoader();
loader.load(
  'node_modules/three/examples/fonts/droid/droid_sans_mono_regular.typeface.json',
  (droidFont) => {
    const textGeometry = new TextGeometry('Noah Schlickeisen\nSoftware Developer', {
      height: 10,
      size: 10,
      font: droidFont,
    });
    const textMaterial = new THREE.MeshNormalMaterial();
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    const textMesh2 = new THREE.Mesh(textGeometry, textMaterial);
    const textMesh3 = new THREE.Mesh(textGeometry, textMaterial);
    const textMesh4 = new THREE.Mesh(textGeometry, textMaterial);
    

    // Center the text within its geometry
    textGeometry.center();

    // Set the initial position at the center of the orbit
    const radius = 300;
    const initialAngle = Math.PI; // Adjust this angle as needed
    textMesh.position.x = Math.cos(initialAngle) * radius;
    textMesh.position.z = Math.sin(initialAngle) * radius;

    textMesh2.position.x = Math.sin(initialAngle) * radius;
    textMesh2.position.z = Math.cos(initialAngle) * radius;

    textMesh3.position.x = -Math.sin(initialAngle) * radius;
    textMesh3.position.z = -Math.cos(initialAngle) * radius;

    textMesh4.position.x = -Math.cos(initialAngle) * radius;
    textMesh4.position.z = -Math.sin(initialAngle) * radius;

    textMesh.rotation.y = Math.PI / 2;
    textMesh2.rotation.y = Math.PI / 2;
    textMesh3.rotation.y = Math.PI;
    textMesh4.rotation.y = 3 * Math.PI / 2;
     


    // Create a variable to control the orbit animation
    let angle = initialAngle;
    let angle2 = initialAngle;


    // Create animation function
    function animateText() {
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const x2 = Math.sin(angle2) * radius;
      const z2 = Math.cos(angle2) * radius;

      const x3 = -Math.sin(angle2) * radius;
      const z3 = -Math.cos(angle2) * radius;

      const x4 = -Math.cos(angle) * radius;
      const z4 = -Math.sin(angle) * radius;

      
      // Update textMesh position
      textMesh.position.x = x;
      textMesh.position.z = z;

      textMesh2.position.x = x2;
      textMesh2.position.z = z2;

      textMesh3.position.x = x3;
      textMesh3.position.z = z3;

      textMesh4.position.x = x4;
      textMesh4.position.z = z4;

      // Calculate the angle between the text and the center of the orbit
      const angleToCenter = -Math.atan2(0 - textMesh.position.z, 0 - textMesh.position.x);

      // Set the rotation based on the calculated angle
      textMesh.rotation.y = angleToCenter + Math.PI / 2;
      textMesh2.rotation.y = angleToCenter;
      textMesh3.rotation.y = angleToCenter + Math.PI;
      textMesh4.rotation.y = angleToCenter + 3 * Math.PI / 2;

      // Increment angle for the next frame
      angle -= 0.001;
      angle2 += 0.001;

      requestAnimationFrame(animateText);
    }

    animateText();

    scene.add(textMesh);
    scene.add(textMesh2);
    scene.add(textMesh3);
    scene.add(textMesh4);
  }
);



var newDiv = document.createElement("div");

newDiv.id = "myDiv"
newDiv.className = "custom-class"; // Set a CSS class

const geometry = new THREE.BoxGeometry( 3, 5, 3 ); 
const material = new THREE.MeshBasicMaterial( {
  color: 0x080FF80, 
  transparent: true, // Enable transparency
  opacity: 0.5,
}); 
const cube = new THREE.Mesh( geometry, material ); 
cube.position.y = 2


var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6 );
hemiLight.position.set( 0, 500, 0 );

var keyLight = new THREE.AmbientLight(0xfffff, 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%'), 0.75)
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%'), 0.25);
backLight.position.set(100, 0, -100).normalize();


scene.add(hemiLight)


const grid = new THREE.GridHelper(20, 20);

scene.add(grid)




let ufoModel;
let farmModel;

// GLTF Object
rgbeLoader.load('./Environment/MR_INT-001_NaturalStudio_NAD.hdr', function(texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;

  ufoModel = new UFO({
    gltfLoader: gltfLoader
  });


  var farmL = new FarmLand({
    scene: scene
  })

  group = ufoModel.getGLTF();
  group.scale.set(0.05,0.05,0.05)
  scene.add(group);
})

// Camera positioning
camera.position.set(group.position.x + 0, group.position.y , group.position.z );
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
  vecShape: 3, 
  vecPos: {x: 0, y: 10, z: 0}
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

// const geo = new THREE.BoxGeometry( 20, 1, 100);
// const mat = new THREE.MeshBasicMaterial( { color: 0Xf3b48b} );
// const cub = new THREE.Mesh( geo, mat );
// cub.color = 0x00ff00
// cub.scale.set(1, 0.25, 1)
// cub.position.set(3.5, 0, 0)
// scene.add( cub );

// Convert degrees to radians
const degreesToRadians = degrees => degrees * (Math.PI / 180);

const calcXCord = (radius, thetaDegrees, phiDegrees) => {
  // Convert degrees to radians
  const thetaRadians = degreesToRadians(thetaDegrees)
  const phiRadians = degreesToRadians(phiDegrees)

  // Calculate X
  return radius * Math.sin(thetaRadians) * Math.cos(phiRadians)
}

const calcZCord = (radius, thetaDegrees, phiDegrees) => {
  // Convert degrees to radians
  const thetaRadians = degreesToRadians(thetaDegrees)
  const phiRadians = degreesToRadians(phiDegrees)

  // Calculate X
  return radius * Math.sin(thetaRadians) * Math.sin(phiRadians)
}

const calcYCord = (radius, thetaDegrees) => {
  // Convert degrees to radians
  const thetaRadians = degreesToRadians(thetaDegrees)

  return radius * Math.cos(thetaRadians)
}



const starGeo = new THREE.SphereGeometry(15, 32, 16);
const starMat = new THREE.MeshBasicMaterial( { color: 0xfffff0 } ); 


for(var i = 0; i < 5000; i++) {
  const str = new THREE.Mesh( starGeo, starMat ); 
  const random_size = 0.04 + Math.random() * 0.03;
  str.scale.set(random_size, random_size, random_size)
  const random_theta = Math.floor(Math.random() * 181);
  const random_phi = Math.floor(Math.random() * 181);
  str.position.set(calcXCord(710, random_theta, random_phi), calcYCord(710, random_theta), calcZCord(710, random_theta, random_phi))
  scene.add(str)
}

const moveUpTrigger = document.getElementById("moveUp");
const moveDownTrigger = document.getElementById("moveDown");
const moveRightTrigger = document.getElementById("moveRight");
const moveLeftTrigger = document.getElementById("moveLeft");

moveUpTrigger.addEventListener("click", () => {
  const interval = setInterval(moveForward(spherePhys.getBody(), 17), 100)
  
  moveUpTrigger.addEventListener("mouseup", () => {
    clearInterval(interval)
  });
});


moveDownTrigger.addEventListener("mousedown", () => {
  const interval = setInterval(moveBackward(spherePhys.getBody(), 17), 100)
  
  moveDownTrigger.addEventListener("mouseup", () => {
    clearInterval(interval)
  });
});

moveRightTrigger.addEventListener("mousedown", () => {
  const interval = setInterval(moveRight(spherePhys.getBody(), 17), 100)
  
  moveRightTrigger.addEventListener("mouseup", () => {
    clearInterval(interval)
  });
});

moveLeftTrigger.addEventListener("click", () => {
  const interval = setInterval(moveLeft(spherePhys.getBody(), 17), 100)
  
  moveLeftTrigger.addEventListener("mouseup", () => {
    clearInterval(interval)
  });
});

// Start the animation loop
function animate(time) {
  world.step(timeStep)
  if (group)
    group.rotation.y = time / 3000;
  renderer.compile(scene, camera);

  ground.mergePhysics(groundPhys.getPosition(), groundPhys.getQuaternion());
  group.position.copy(spherePhys.getPosition(), spherePhys.getQuaternion());

  // Camera angle appearing as if its looking straight
  //camera.position.set(group.position.x + 0, group.position.y + 1  , group.position.z -10);

  // Adjust the camera position and target to make it look down
  const cameraHeight = 3; // Adjust the height as needed
  const lookAtTarget = new THREE.Vector3(group.position.x, group.position.y, group.position.z);
  lookAtTarget.y -= 0; // Look down from a certain height
  camera.position.set(group.position.x, group.position.y + cameraHeight, group.position.z - 15);
  
  camera.lookAt(lookAtTarget);


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
  console.log("Div Container x: ", group.position.x)
  if (divContainer.inContainer({
    x: group.position.x, 
    z: group.position.z 
  })){
    divContainer.hightlight();
    promptToView.textContent = "Click enter to go to link"

    if (event.keyCode === 13) {
      window.open(divContainer.link, '_blank')
    }

  } else {
    divContainer.unHighlight();
    promptToView.textContent = ""
  }
}

function moveSaucer(event){
  if (event.keyCode >= 37 && event.keyCode <= 40) {
    event.preventDefault();
  }

  switch(event.keyCode){
    case 39:
      console.log("Moving Right")
      moveRight(spherePhys.getBody(), 2)
      break;
    case 37:
      console.log("Moving Left")
      moveLeft(spherePhys.getBody(), 2)
      break;
    case 38:
      console.log("Moving Forward")
      moveForward(spherePhys.getBody(), 2)
      break;
    case 40:
      console.log("Moving Backward")
      moveBackward(spherePhys.getBody(), 2)
      break;
  }
}

function moveRight(body, force) {
  const impulseForce = new CANNON.Vec3(force * -1, 0, 0); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}

function moveLeft(body, force) {
  const impulseForce = new CANNON.Vec3(force, 0, 0); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}

function moveForward(body, force) {
  const impulseForce = new CANNON.Vec3(0, 0, force); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}

function moveBackward(body, force) {
  const impulseForce = new CANNON.Vec3(0, 0, force * -1); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}


