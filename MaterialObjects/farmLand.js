import { FarmMaterial } from "./farmMaterial";


export class FarmLand {
    constructor({scene: scene}) {
        let landMap = this.getRoadMap({startPoint: {x: 0, z: 0}})
        // let landMap2 = this.getLandMap({startPoint: {x: -60, z: -60}})
        // let landMap3 = this.getLandMap({startPoint: {x: 0, z: -60}})
        // let landMap4 = this.getLandMap({startPoint: {x: 0, z: 0}})


        // let materials = []
        // for (var i = 0; i < landMap.length; i++){
        //     materials.push(new FarmMaterial({
        //         obj: landMap[i].obj,
        //         mtl: landMap[i].mtl,
        //         png: landMap[i].png,
        //         rotation: landMap[i].rotation,
        //         scene: scene,
        //         position: landMap[i].position
        //     }))
        // }

        // for (var i = 0; i < landMap2.length; i++){
        //     materials.push(new FarmMaterial({
        //         obj: landMap2[i].obj,
        //         mtl: landMap2[i].mtl,
        //         png: landMap2[i].png,
        //         scene: scene,
        //         position: landMap2[i].position
        //     }))
        // }

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
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0, y: 0, z: startPoint.z + 0}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 20, y: 0, z: startPoint.z + 0}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -20, y: 0, z: startPoint.z + 0}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0, y: 0, z: startPoint.z + 20}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0, y: 0, z: startPoint.z + -20}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 20, y: 0, z: startPoint.z + 20}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -20, y: 0, z: startPoint.z + 20}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -20, y: 0, z: startPoint.z + -20}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 20, y: 0, z: startPoint.z + -20}
            },

           
        ]
    }

    getRoadMap = ({startPoint: startPoint}) => {
        return [
            {
                obj: "./Landscape/Obj/Ground/Road_4.obj",
                mtl: "./Landscape/Obj/Ground/Road_4.mtl",
                png: "./Landscape/Obj/Ground/Road_4.png",
                rotation: 0,
                position: {x: startPoint.x + 0, y: 0, z: startPoint.z + 0}
            },
            {
                obj: "./Landscape/Obj/Ground/Road_4.obj",
                mtl: "./Landscape/Obj/Ground/Road_4.mtl",
                png: "./Landscape/Obj/Ground/Road_4.png",
                rotation: 0,
                position: {x: startPoint.x + 20, y: 0, z: startPoint.z + 0}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -20, y: 0, z: startPoint.z + 0}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0, y: 0, z: startPoint.z + 20}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0, y: 0, z: startPoint.z + -20}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 20, y: 0, z: startPoint.z + 20}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -20, y: 0, z: startPoint.z + 20}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -20, y: 0, z: startPoint.z + -20}
            },
            {
                obj: "./Landscape/Obj/Crops/White_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/White_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/White_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 20, y: 0, z: startPoint.z + -20}
            },
        ]
    }

    
}