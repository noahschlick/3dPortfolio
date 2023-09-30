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
            
               
                _obj.position.set(position.x + adj.x, position.y, position.z + adj.z);
                _obj.traverse(function (child) {
                    if (child instanceof THREE.Mesh) {
                    child.material.map = texture;
                    }
                });

                if (rotation) {
                    _obj.rotation.y = Math.PI / 2;
                }
                
                
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
            case "./Landscape/Obj/Ground/Grass.obj":
                return {x: 0.75, z: 1.36}
            case "./Landscape/Obj/Ground/Dirt_1.obj" || "./Landscape/Obj/Ground/Dirt_2.obj":
                return {x: 0.75, z: 0.25}
            case "./Landscape/Obj/Ground/Road_4.obj":
                return {x: -2.55, z: 0.25}
            case "./Landscape/Obj/Ground/Water_1.obj":
                return {x: 1.85, z: 1.35}
            case "./Landscape/Obj/Crops/Carrots_Level_2.obj":
                return {x: -0.35, z: 1.35}
            case "./Landscape/Obj/Crops/Lettuce_Level_1.obj":
                return {x: -1.45, z: 0.25}
            case "./Landscape/Obj/Crops/Red_Flower_Grass.obj":
                return {x: 0.75, z: -0.85}
            case "./Landscape/Obj/Crops/Sunflower_Level_3.obj":
                return {x: -0.35, z: -0.85}
            case "./Landscape/Obj/Crops/Wheat_Level_3.obj":
                return {x: 0.75, z: 2.45}
            case "./Landscape/Obj/Fence/Fence.obj":
                return {x: -0.1, z: 1.5}
            case "./Landscape/Obj/Fence/Fence_Door.obj":
                return {x: 0, z: 1.5}
            default:
                return {x: 0, z: 0}
        }
       
    }

   
   
}

