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
    const textGeometry = new TextGeometry('Noah\nSchlickeisen\nWeb-Dev', {
      height: 2,
      size: 2,
      font: droidFont,
    });
    const textMaterial = new THREE.MeshNormalMaterial();
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.z = 50;
    textMesh.position.x = 10;
    textMesh.position.y = 15;
    textMesh.rotation.y = Math.PI ;
    
    
    scene.add(textMesh)
  }
)

// loader.load( './Fonts/BebasNeue-Regular.json', function(font) {

// 	const geometry = new TextGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 6,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	} );

//   const textMesh = new THREE.Mesh(geometry, [
//     new THREE.MeshPhongMaterial({ color: 0xad4000}),
//     new THREE.MeshPhongMaterial({ color: 0xad4000})
//   ])
//   textMesh.position.y = 10
//   textMesh.position.z = -20
//   textMesh.castShadow = true
//   scene.add(textMesh)
// } );

var newDiv = document.createElement("div");

newDiv.id = "myDiv"
newDiv.className = "custom-class"; // Set a CSS class

scene.add(divContainer.getElement());
scene.add(divContainer_1.getElement());

const geometry = new THREE.BoxGeometry( 3, 5, 3 ); 
const material = new THREE.MeshBasicMaterial( {
  color: 0x080FF80, 
  transparent: true, // Enable transparency
  opacity: 0.5,
}); 
const cube = new THREE.Mesh( geometry, material ); 
cube.position.y = 2


function getRoad({startPoint: startPoint}){
        
  const div = 0.5
  const x = (1 + div) 
  const y = (48 + div) 
  let y_index = y * -1
  let x_index = x * -1
  let road = []

  while(y_index < y){
      while(x_index <= x){
          road.push({
              obj: "./Landscape/Obj/Ground/Dirt_1.obj",
              mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
              png: "./Landscape/Obj/Ground/Dirt_2.png",
              rotation: 0,
              position: {x: startPoint.x + x_index, y: 0, z: startPoint.z + y_index}
          })
          x_index += 1
          
      }
      x_index = x * -1
      y_index += 1
  }
  return road

}





scene.add( cube );

var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6 );
hemiLight.position.set( 0, 500, 0 );

var keyLight = new THREE.AmbientLight(0xfffff, 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%'), 0.75)
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%'), 0.25);
backLight.position.set(100, 0, -100).normalize();


scene.add(hemiLight)

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

// const fm = new FarmMaterial({
//   obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
//   mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
//   png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
//   scene: scene,
//   position: {x: 0.5, y: 0, z: 0.5},
//   rotation: 0,
// })

// const fmm = new FarmMaterial({
//   obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
//   mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
//   png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
//   scene: scene,
//   position: {x: 1.5, y: 0, z: 1.5},
//   rotation: 0,
// })

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

const geo = new THREE.BoxGeometry( 20, 1, 100);
const mat = new THREE.MeshBasicMaterial( { color: 0Xf3b48b} );
const cub = new THREE.Mesh( geo, mat );
cub.color = 0x00ff00
cub.scale.set(1, 0.25, 1)
cub.position.set(3.5, 0, 0)
scene.add( cub );





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
  const cameraHeight = 6; // Adjust the height as needed
  const lookAtTarget = new THREE.Vector3(group.position.x, group.position.y, group.position.z);
  lookAtTarget.y -= 0; // Look down from a certain height
  camera.position.set(group.position.x, group.position.y + cameraHeight, group.position.z + -4);
  
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


