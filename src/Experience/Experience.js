import * as THREE from 'three'
import Sizes from './utils/Sizes.js'
import Time from './utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './utils/Resources.js'
import sources from './sources.js'
import Debug from './utils/Debug.js'

let instance = null

export default class Experience {
    constructor(container) {

        if (instance) {
            return instance
        }

        instance = this
        //Global access
        window.experience = this

        //Options 
        this.container = container



        // Add canvas to Container
        this.canvas = document.createElement('canvas');
        this.canvas.classList.add('webgl');
        this.container.appendChild(this.canvas);

        //Setup 
        this.debug = new Debug()
        this.sizes = new Sizes(this.container)
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Sizes resize event
        this.sizes.on('resize', () => {
            this.resize()
        })
        // Time tick event
        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        this.camera.update()
        this.world.update()
        this.renderer.update()
    }
}   