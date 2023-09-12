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
            x: this.position.x - this.divContainer.element.offsetWidth/2,
            z: this.position.y + this.divContainer.element.offsetHeight, 
        }
    }

    getTRpoint() {
        return {
            x: this.position.x + this.divContainer.element.offsetWidth/2,
            z: this.position.y + this.divContainer.element.offsetHeight, 
        }
    }

    getBLpoint() {
        return {
            x: this.position.x - this.divContainer.element.offsetWidth/2,
            z: this.position.y - this.divContainer.element.offsetHeight, 
        }
    }

    getBRpoint() {
        return {
            x: this.position.x + this.divContainer.element.offsetWidth/2,
            z: this.position.y - this.divContainer.element.offsetHeigh, 
        }
    }

    inContainer({x: x, z: z}) {
        const BRpoint = this.getBRpoint()
        const BLpoint = this.getBLpoint()
        const TRpoint = this.getTRpoint()
        const TLpoint = this.getTLpoint()

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