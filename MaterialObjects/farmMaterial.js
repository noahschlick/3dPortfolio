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
        let adj = this.getPosAdj(obj)
        mtlLoader.load(mtl, function(materials) {
            materials.preload();
            const objLoader = new OBJLoader().setMaterials(materials)
            
            objLoader.load(obj, _obj => {
                var texture = new THREE.TextureLoader().load(png);
    
                _obj.scale.set(0.05,0.05,0.05)
            
               
                _obj.position.set(position.x + adj.x, 0, position.z + adj.z);
                _obj.traverse(function (child) {
                    if (child instanceof THREE.Mesh) {
                    child.material.map = texture;
                    }
                });
                
                //obj.position.position.x = position.x
                scene.add(_obj)
            });
        })


        
    }

    getPosAdj(obj) {
        switch (obj) {
            case "./Landscape/Obj/Crops/White_Flower_Grass.obj":
                return {x: 1.85, z: -0.84}
                break;
            default:
                return {x: 0, z: 0}
        }
       
    }

   
   
}

