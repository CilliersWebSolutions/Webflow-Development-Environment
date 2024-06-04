import EventEmitter from './EventEmitter.js'
import Experience from "../Experience.js"

export default class Sizes extends EventEmitter {
    constructor(container) {

        super()

        this.container = container
        this.width = container.clientWidth
        this.height = container.clientHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        window.addEventListener('resize', () => {
            // Update sizes
            this.width = container.clientWidth
            this.height = container.clientHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)

            this.trigger('resize')

        })
    }
}