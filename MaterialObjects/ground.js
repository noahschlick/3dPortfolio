import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class Ground {
    constructor(color, size, html) {
        this.color = color;
        this.size = size;
        const groundGeo = new THREE.PlaneGeometry(100, 100);
        const groundMat = new THREE.MeshBasicMaterial({
            color: this.color,
            side: THREE.DoubleSide,
            wireframe: true
        });
        
        const groundMesh = new THREE.Mesh(groundGeo, groundMat);
        this.groundMesh = groundMesh
        this.groundMesh.htmlElement = html;
    }

    getGroundMesh() {
        // Add Ground
        return this.groundMesh
    }

    mergePhysics(position, quaternion) {
        this.groundMesh.position.copy(position)
        this.groundMesh.quaternion.copy(quaternion)
    }
}