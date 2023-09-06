import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

export class Portal {
    constructor({text: text, x: x, y: y, z: z}) {
        this.text = text;
        this.position = {x: x, y: y, z: z};

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
}