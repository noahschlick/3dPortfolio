import { FarmMaterial } from "./farmMaterial";


export class FarmLand {
    constructor({scene: scene}) {

        let materials = []

        this.getRoad({startPoint: {x: 0, z: 0}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })

        this.getRoadHorz({startPoint: {x: 4, z: 23}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })

        this.getRoadHorz({startPoint: {x: 8, z: 23}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })

        this.getRoadHorz({startPoint: {x: -4, z: 23}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getRoadHorz({startPoint: {x: -8, z: 23}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })

        this.getRoadHorz({startPoint: {x: -12, z: 23}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })

        this.getRoadHorz({startPoint: {x: 12, z: 23}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getRoadHorz({startPoint: {x: -16, z: 23}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })

        this.getRoad({startPoint: {x: 0, z: 8}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })

        this.getRoad({startPoint: {x: 0, z: 16}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })

        this.getRoad4Way({startPoint: {x: 0, z: 23}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })

        var i = -48

        while (i <= 24){
            var j = -4
            while (j >= -8){
                this.getGrassLand({startPoint: {x: i, z: j}}).map((item) => {
                    materials.push(new FarmMaterial({
                        obj: item.obj,
                        mtl: item.mtl,
                        png: item.png,
                        rotaion: item.rotation,
                        scene: scene,
                        position: item.position
                    }))
                })
                j -= 4
            }
            i += 4
        }

        this.getGrassLand({startPoint: {x: -4, z:  0}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: 4, z:  0}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: -8, z:  0}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: 8, z:  0}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: 4, z:  4}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: -4, z:  4}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: -8, z:  4}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: 8, z:  4}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: 4, z:  8}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: -4, z:  8}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: 8, z:  8}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
        this.getGrassLand({startPoint: {x: -8, z:  8}}).map((item) => {
            materials.push(new FarmMaterial({
                obj: item.obj,
                mtl: item.mtl,
                png: item.png,
                rotaion: item.rotation,
                scene: scene,
                position: item.position
            }))
        })
       
    }

   



    getFence = ({startPoint: startPoint}) => {
        var arr = [
            {
                obj: "./Landscape/Obj/Fence/Fence_Door.obj",
                mtl: "./Landscape/Obj/Fence/Fence_Door.mtl",
                png: "./Landscape/Obj/Fence/Fence_Door.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + 0, y: 1, z: startPoint.z + -2.5}
            },
            {
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + 1.5, y: 1, z: startPoint.z + -2.5}
            },
            {
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + -1.5, y: 1, z: startPoint.z + -2.5}
            },
        ]

        var pos_x = -1.5 
        var pos_z = -1.5
        while (pos_z <= 1.5 ) {
            arr.push({
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: 0,
                position: {x: startPoint.x + pos_x, y: 1, z: startPoint.z + pos_z}
            })
            pos_z += 1
        }

        pos_x = -1.5 
        pos_z = 1.5 
        while (pos_x <= 1.5) {
            arr.push({
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + pos_x, y: 1, z: startPoint.z + pos_z},
            })
            pos_x += 1
        }

        pos_x = 2.5
        pos_z = -1.5
        while (pos_z <= 1.5) { 
            arr.push({
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: 0,
                position: {x: startPoint.x + pos_x, y: 1, z: startPoint.z + pos_z}
            })
            pos_z += 1
        }

        return arr
    }


    getFence_2 = ({startPoint: startPoint}) => {
        var arr = [
            {
                obj: "./Landscape/Obj/Fence/Fence_Door.obj",
                mtl: "./Landscape/Obj/Fence/Fence_Door.mtl",
                png: "./Landscape/Obj/Fence/Fence_Door.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + 0, y: 1, z: startPoint.z + -4.5}
            },
            {
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + 1.5, y: 1, z: startPoint.z + -4.5}
            },
            {
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + -1.5, y: 1, z: startPoint.z + -4.5}
            },
            {
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + -2.5, y: 1, z: startPoint.z + -4.5}
            },
            {
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + 2.5, y: 1, z: startPoint.z + -4.5}
            },
            {
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + -3.5, y: 1, z: startPoint.z + -4.5}
            },
            {
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + 3.5, y: 1, z: startPoint.z + -4.5}
            },
        ]

        var pos_x = -3.5 
        var pos_z = -3.5
        while (pos_z <= 3.5 ) {
            arr.push({
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: 0,
                position: {x: startPoint.x + pos_x, y: 1, z: startPoint.z + pos_z}
            })
            pos_z += 1
        }

        pos_x = -3.5 
        pos_z = 3.5 
        while (pos_x <= 3.5) {
            arr.push({
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: Math.PI / 2,
                position: {x: startPoint.x + pos_x, y: 1, z: startPoint.z + pos_z},
            })
            pos_x += 1
        }

        pos_x = 4.5
        pos_z = -3.5
        while (pos_z <= 3.5) { 
            arr.push({
                obj: "./Landscape/Obj/Fence/Fence.obj",
                mtl: "./Landscape/Obj/Fence/Fence.mtl",
                png: "./Landscape/Obj/Fence/Fence.png",
                rotation: 0,
                position: {x: startPoint.x + pos_x, y: 1, z: startPoint.z + pos_z}
            })
            pos_z += 1
        }

        return arr
    }

    getRoadHorz = ({startPoint: startPoint}) => {
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
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + 0.5}
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
                position: {x: startPoint.x + -2.5, y: 0, z: startPoint.z + -0.5}
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
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 2.5}
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
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 2.5}
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
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 2.5}
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
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 2.5, y: 0, z: startPoint.z + -0.5}
            },
        ]
    }

    getRoad4Way = ({startPoint: startPoint}) => {
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
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 1.5}
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
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
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
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 1.5}
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
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Dirt_1.obj",
                mtl: "./Landscape/Obj/Ground/Dirt_2.mtl",
                png: "./Landscape/Obj/Ground/Dirt_2.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 1.5}
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
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 2.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Grass.obj",
                mtl: "./Landscape/Obj/Ground/Grass.mtl",
                png: "./Landscape/Obj/Ground/Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 2.5}
            },
        ]
    }

    getRoad = ({startPoint: startPoint}) => {
        
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

    getSunFlowerLand = ({startPoint: startPoint}) => {
        return [
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Sunflower_Level_3.obj",
                mtl: "./Landscape/Obj/Crops/Sunflower_Level_3.mtl",
                png: "./Landscape/Obj/Crops/Sunflower_Level_3.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 0.5}
            },
        ]
    }

    getRedFlowerLand = ({startPoint: startPoint}) => {
        return [
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Crops/Red_Flower_Grass.obj",
                mtl: "./Landscape/Obj/Crops/Red_Flower_Grass.mtl",
                png: "./Landscape/Obj/Crops/Red_Flower_Grass.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 0.5}
            },
        ]
    }


    getWater = ({startPoint: startPoint}) => {
        return [
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + 1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + 0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + -0.5, y: 0, z: startPoint.z + -1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 1.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + -0.5}
            },
            {
                obj: "./Landscape/Obj/Ground/Water_1.obj",
                mtl: "./Landscape/Obj/Ground/Water_1.mtl",
                png: "./Landscape/Obj/Ground/Water_1.png",
                rotation: 0,
                position: {x: startPoint.x + -1.5, y: 0, z: startPoint.z + 0.5}
            },
        ]
    }
   
    
}