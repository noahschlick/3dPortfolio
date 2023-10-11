import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

export class Portal {
    constructor({text: text, x: x, y: y, z: z}) {
        this.text = text;
        this.position = {x: x, y: y, z: z};
        this.link = "https://www.noahschlick.com"

        const p = document.createElement('p');
        p.textContent = this.text;

        const div = document.createElement('div');
        div.append(p);

        this.divContainer = new CSS3DObject(div);
        this.scale = {
            x: 0.06,
            y: 0.06,
            z: 0.06
        }
        this.divContainer.scale.x = this.scale.x;
        this.divContainer.scale.y = this.scale.y;
        this.divContainer.scale.z = this.scale.z;

        this.divContainer.scale.y = 0.05
        this.divContainer.scale.z = 0.05

        this.divContainer.element.classList.add('portal');
        this.divContainer.rotateY(15.7);
        this.divContainer.rotateZ(0);
        this.divContainer.rotateX(-1.5);
        this.divContainer.position.set(this.position.x, this.position.y, this.position.z);
    }

    getElement() {
        return this.divContainer;
    }

    changePosition({x: x, y: y, z: z}) {
        this.position = {x: x, y: y, z: z};
    }

    getWidth() {
        return this.divContainer.element.offsetWidth;
    }

    getHeight() {
        return this.divContainer.element.offsetHeight;
    }

    getTLpoint() {
        return {
            x: ((this.position.x - this.divContainer.element.offsetWidth/2) * this.scale.x) - 6,
            z: ((this.position.z + this.divContainer.element.offsetHeight) * this.scale.z) - 6, 
        }
    }

    getTRpoint() {
        return {
            x: ((this.position.x + this.divContainer.element.offsetWidth/2) * this.scale.x) - 6,
            z: ((this.position.z + this.divContainer.element.offsetHeight) * this.scale.z) - 6, 
        }
    }

    getBLpoint() {
        return {
            x: ((this.position.x - this.divContainer.element.offsetWidth/2) * this.scale.x) - 3,
            z: ((this.position.z - this.divContainer.element.offsetHeight) * this.scale.z) - 3, 
        }
    }

    getBRpoint() {
        return {
            x: ((this.position.x + this.divContainer.element.offsetWidth/2) * this.scale.x) + 3,
            z: ((this.position.z - this.divContainer.element.offsetHeigh) * this.scale.z) - 3, 
        }
    }

    inContainer({x: x, z: z}) {
        const BRpoint = this.getBRpoint()
        const BLpoint = this.getBLpoint()
        const TRpoint = this.getTRpoint()
        const TLpoint = this.getTLpoint()

        console.log("X: ", x, "---Z: ", z)
        console.log("Back Right: ", BRpoint)
        console.log("Back Left Point: ", BLpoint)
        console.log("Top Right point: ", TRpoint)
        console.log("Top Left point: ", TLpoint)

        return x < BRpoint.x && x > BLpoint.x && z > BLpoint.z && z < TLpoint.z;
    }

    hightlight() {
        this.divContainer.element.classList.add('highlightedPortal');
        this.divContainer.element.classList.remove('unHighlightPortal');
    }

    unHighlight() {
        this.divContainer.element.classList.add('unHighlightPortal');
        this.divContainer.element.classList.remove('highlightedPortal');
    }

    
}