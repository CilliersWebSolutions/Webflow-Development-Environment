
import Experience from "../Experience";
import Environment from "./Environment";
import Floor from './Floor';
import Resources from '../utils/Resources';
import Fox from './Fox.js'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.floor = this.experience.floor

        // Test mesh

        // const testMesh = new THREE.Mesh(
        //     new THREE.BoxGeometry(1, 1, 1),
        //     new THREE.MeshStandardMaterial()
        // )
        // this.scene.add(testMesh)

        //Wait for resources
        this.resources.on('ready', () => {
            console.log('resources are ready')
            // Setup

            this.floor = new Floor()
            this.fox = new Fox()
            this.environment = new Environment()
        })
    }

    update() {
        if (this.fox)
            this.fox.update()
    }
}