import { FarmMaterial } from "./farmMaterial";


export class FarmLand {
    constructor({scene: scene}) {
        let landMap = this.getLettuce1Land({startPoint: {x: 0, z: 0}})
        let landMap2 = this.getLandMap({startPoint: {x: 0, z: 8}})
        let landMap3 = this.getLandMap({startPoint: {x: 0, z: -8}})

        let materials = []
        for (var i = 0; i < landMap.length; i++){
            materials.push(new FarmMaterial({
                obj: landMap[i].obj,
                mtl: landMap[i].mtl,
                png: landMap[i].png,
                rotation: landMap[i].rotation,
                scene: scene,
                position: landMap[i].position
            }))
        }

        for (var i = 0; i < landMap2.length; i++){
            materials.push(new FarmMaterial({
                obj: landMap2[i].obj,
                mtl: landMap2[i].mtl,
                png: landMap2[i].png,
                scene: scene,
                position: landMap2[i].position
            }))
        }
        for (var i = 0; i < landMap3.length; i++){
            materials.push(new FarmMaterial({
                obj: landMap3[i].obj,
                mtl: landMap3[i].mtl,
                png: landMap3[i].png,
                scene: scene,
                position: landMap3[i].position
            }))
        }

        // for (var i = 0; i < landMap3.length; i++){
        //     materials.push(new FarmMaterial({
        //         obj: landMap3[i].obj,
        //         mtl: landMap3[i].mtl,
        //         png: landMap3[i].png,
        //         scene: scene,
        //         position: landMap3[i].position
        //     }))
        // }

        // for (var i = 0; i < landMap4.length; i++){
        //     materials.push(new FarmMaterial({
        //         obj: landMap4[i].obj,
        //         mtl: landMap4[i].mtl,
        //         png: landMap4[i].png,
        //         scene: scene,
        //         position: landMap4[i].position
        //     }))
        // }
       
    }

    getLandMap = ({startPoint: startPoint}) => {
        
        return [
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + 4.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 4.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 4.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 4.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 4.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + 4.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 3.5, y: 0, z: startPoint.z + 4.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 3.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 3.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 3.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 3.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 3.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -3.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -3.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -3.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -3.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -3.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -3.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -3.5, y: 0, z: startPoint.z + 4.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -3.5, y: 0, z: startPoint.z + 5.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + 5.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 5.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 5.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 5.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 5.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + 5.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 3.5, y: 0, z: startPoint.z + 5.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 4.5, y: 0, z: startPoint.z + 5.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 4.5, y: 0, z: startPoint.z + 4.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 4.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 4.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 4.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 4.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 4.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 4.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 3.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -3.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -4.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -4.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -4.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -4.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -4.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -4.5, y: 0, z: startPoint.z + 3.5}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -4.5, y: 0, z: startPoint.z + 4.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -4.5, y: 0, z: startPoint.z + 5.5}
            },

        ]
    
    }


    getGrassLand = ({startPoint: startPoint}) => {
        return [
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 0.5}
            },
            
           
        ]
    }

    getWheatLand = ({startPoint: startPoint}) => {
        return [
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Wheat_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Wheat_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Wheat_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 0.5}
            },
        ]
    }

    getCarrotLand = ({startPoint: startPoint}) => {
        return [
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Carrots_Level_2.obj",
                mtl: "./Landscape/Obj/Crops/Carrots_Level_2.mtl",
                png: "./Landscape/Obj/Crops/Carrots_Level_2.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 0.5}
            },
        ]
    }
    

    getLettuce1Land = ({startPoint: startPoint}) => {
        return [
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Lettuce_Level_1.obj",
                mtl: "./Landscape/Obj/Crops/Lettuce_Level_1.mtl",
                png: "./Landscape/Obj/Crops/Lettuce_Level_1.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 0.5}
            },
        ]
    }
   
    
}