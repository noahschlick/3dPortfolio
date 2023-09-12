import * as THREE from 'three';

export class FarmGround {
    constructor({gltfLoader: gltfLoader}){
        const group = new THREE.Group();

        gltfLoader.load('./Landscape/scene.gltf', function(gltf) {
            const model = gltf.scene;
        
            group.add(model)
        })
        this.group = group
    }

    getGLTF() {
        return this.group
    }
}

