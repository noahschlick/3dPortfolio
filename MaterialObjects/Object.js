import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
import { Portal } from '../3DCSSObjects/portal';
import { UFO } from './ufo';
import { Ground } from './ground';

export class ufoScene {

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        // Set Renderer for 3D models
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        // Sets orbit control to move the camera around
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1;

        // Sets orbit control to move the camera around
        this.orbit = new OrbitControls(this.camera, this.renderer.domElement);

        // Set Renderer for 3D CSS models
        this.labelRenderer = new CSS3DRenderer();
        this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0px';
        this.labelRenderer.domElement.style.pointerEvents = 'none';
        this.labelRenderer.domElement.style.overflow = 'hidden';
        document.body.appendChild(this.labelRenderer.domElement);

        // Add Loading bar
        this.loadingManager = new THREE.LoadingManager();
        const progressBar = document.getElementById('progress-bar')
        this.loadingManager.onProgress = function(url, loaded, total) {
            progressBar.value = (loaded / total) * 100;
        }
        const progressBarContainer = document.querySelector('.progress-bar-container')
        this.loadingManager.onLoad = function() {
            progressBarContainer.style.display = 'none';
        }
        this.loadingManager.onError = function(url) {
            console.error(`Got a problem loading: ${url}`)
        }

        this.rgbeLoader = new RGBELoader(this.loadingManager)
        this.gltfLoader = new GLTFLoader(this.loadingManager)

        this.ufo = new THREE.Group();
        this.renderGLTFObjects();
    }

    render3DCSSLayer() {
        this.divContainer = new Portal({
            text: "hello world", 
            x: 0,
            y: 0,
            z: 0
        })
        this.scene.add(this.divContainer.getElement());
    }

    renderGLTFObjects() {
        this.rgbeLoader.load('./Environment/MR_INT-001_NaturalStudio_NAD.hdr', function(texture) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            this.scene.environment = texture;
          
            const ufoModel = new UFO({
              gltfLoader: this.gltfLoader
            });
          
            this.ufo = ufoModel.getGLTF();
            this.scene.add(this.ufo);
        })
    }

    renderGround() {
        this.ground = new Ground({
            color: 0xffffff, 
            size: {x: 3000, y: 3000}
        });
        this.scene.add(this.ground.getGroundMesh());
    }

    rotateUFO(time) {
        if (this.ufo)
            this.ufo.rotation.y = time / 3000;
    }

    renderAnimations() {
        function animate(time) {
            if (this.ufo)
                this.ufo.rotation.y = time / 3000;

            this.renderer.render(this.scene, this.camera);

            this.camera.position.set(
                this.ufo.position.x + 0, 
                this.ufo.position.y + 150,
                this.ufo.position.z + -250 
            );

            this.labelRenderer.render(this.scene, this.camera);

            this.renderer.render(this.scene, this.camera);
        }
        this.renderer.setAnimationLoop(animate)
        
    }

    resizeToWindow() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.labelRenderer.setSize(this.window.innerWidth, this.window.innerHeight);
    }



}