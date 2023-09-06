import * as THREE from 'three';
import { Sphere } from './sphere';

export class UFO {
    constructor({gltfLoader: gltfLoader}){
      
        const group = new THREE.Group()
        gltfLoader.load('./UFO/scene.gltf', function(gltf) {
            const model = gltf.scene;
            const mesh = new Sphere(0xff0000, 15);
            group.add(model, mesh.getMesh())
        })
        return group
    }

    getGLTF() {
        console.log("GLTF: ", this.group)
        return this.group
    }
}