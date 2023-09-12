import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

export class FarmMaterial {
    constructor({
        obj: obj, 
        mtl: mtl, 
        png: png, 
        scene: scene, 
        position: position,
        rotation: rotation
    }){
        let tmp_object = undefined;
        var mtlLoader = new MTLLoader();
        mtlLoader.load(mtl, function(materials) {
            materials.preload();
            const objLoader = new OBJLoader().setMaterials(materials)
            
            objLoader.load(obj, obj => {
            var texture = new THREE.TextureLoader().load(png);
   
            obj.scale.set(0.05,0.05,0.05)
         
            obj.position.set(position.x + 1.85, 0, position.z + -0.84);
            
            
            obj.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                child.material.map = texture;
                }
            });
            
            //obj.position.position.x = position.x
            scene.add(obj)
            });
        })
        
     }

   
   
}

