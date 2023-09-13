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
import { FarmMaterial } from './MaterialObjects/farmMaterial';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { FarmLand } from './MaterialObjects/farmLand';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  2,
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

// const divContainer = new Portal({
//   text: "hello world", 
//   x: 0,
//   y: 0,
//   z: 0
// })

// scene.add(divContainer.getElement());

var keyLight = new THREE.AmbientLight(0xfffff, 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%'), 0.75)
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%'), 0.25);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight)
scene.add(backLight)

var mtlLoader = new MTLLoader();

const highlightMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(1, 1),
  new THREE.MeshBasicMaterial({
    side: THREE.DoubleSide,
    visible: true
  })
);
highlightMesh.rotateX(-Math.PI / 2);
highlightMesh.position.set(1.5, 0, 1.5);
scene.add(highlightMesh);

const fm = new FarmMaterial({
  obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
  mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
  png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
  scene: scene,
  position: {x: 0.5, y: 0, z: 0.5},
  rotation: 0,
})

const fmm = new FarmMaterial({
  obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
  mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
  png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
  scene: scene,
  position: {x: 1.5, y: 0, z: 1.5},
  rotation: 0,
})

const grid = new THREE.GridHelper(20, 20);

scene.add(grid)

// mtlLoader.load('./Landscape/Obj/Crops/White_Flower_Grass.mtl', function(materials) {
//     materials.preload();
//     const objLoader = new OBJLoader().setMaterials(materials)
  
//     objLoader.load("./Landscape/Obj/Crops/White_Flower_Grass.obj", obj => {
//       var texture = new THREE.TextureLoader().load("./Landscape/Obj/Crops/White_Flower_Grass.png");
//       obj.traverse(function (child) {
//         if (child instanceof THREE.Mesh) {
//           child.material.map = texture;
//         }
//       })
//       scene.add(obj)
//     });
//   })

//scene.add(farmLand.getObject())


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



  // var farmLand = new FarmMaterial({
  //   obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
  //   mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
  //   png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
  //   scene: scene,
  //   position: {
  //     x: 20,
  //     y: 0,
  //     z: 0
  //   }
  // })
  // var farmLand = new FarmMaterial({
  //   obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
  //   mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
  //   png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
  //   scene: scene,
  //   position: {
  //     x: 0,
  //     y: 0,
  //     z: 20
  //   }
  // })

  // var farmLand = new FarmMaterial({
  //   obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
  //   mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
  //   png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
  //   scene: scene,
  //   position: {
  //     x: -20,
  //     y: 0,
  //     z: 0
  //   }
  // })


  
  // farmModel = new FarmGround({
  //   gltfLoader: farmLoader
  // });

  // farm.add(farmModel.getGLTF())
  // scene.add(farm)

  group = ufoModel.getGLTF();
  group.scale.set(0.05,0.05,0.05)
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

// Start the animation loop
function animate(time) {
  world.step(timeStep)
  if (group)
    group.rotation.y = time / 3000;
  renderer.render(scene, camera);

  ground.mergePhysics(groundPhys.getPosition(), groundPhys.getQuaternion());
  group.position.copy(spherePhys.getPosition(), spherePhys.getQuaternion());
  //ufoModel.getGLTF().position.copy(spherePhys.getPosition(), spherePhys.getQuaternion());
  camera.position.set(group.position.x + 0, group.position.y + 167, group.position.z + -250);
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
  const impulseForce = new CANNON.Vec3(-2, 0, 0); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}

function moveLeft(body) {
  const impulseForce = new CANNON.Vec3(2, 0, 0); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}

function moveForward(body) {
  const impulseForce = new CANNON.Vec3(0, 0, 2); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}

function moveBackward(body) {
  const impulseForce = new CANNON.Vec3(0, 0, -2); // Change the force values as needed
  body.applyImpulse(impulseForce, body.position)
}


