import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
window.Webflow ||= [];
window.Webflow.push(() => {
  init3D();
});


function init3D() {
  const containers = document.querySelectorAll('[data-3d="c"]');


  // Iterate over each container
  containers.forEach(container => {
    // Canvas
    const canvas = document.createElement('canvas');
    canvas.classList.add('webgl');
    container.appendChild(canvas);

    // Scene
    const scene = new THREE.Scene();
    /**
    * Base
    */

    /**
     * 
  * Loaders
    */
    // Texture loader
    const textureLoader = new THREE.TextureLoader()

    // Draco loader
    const dracoLoader = new DRACOLoader()
    const devpath = ('')
    dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/gh/CilliersWebSolutions/draco@main/draco/')

    // GLTF loader
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)



    const bakedTextureMini = textureLoader.load('https://uploads-ssl.webflow.com/661bd3640db9efe63984e8eb/662d5bf6ac9bfbdb074d4d8e_baked.jpg')

    bakedTextureMini.flipY = false
    bakedTextureMini.colorSpace = THREE.SRGBColorSpace

    const bakedTextureBuilding = textureLoader.load('https://uploads-ssl.webflow.com/661bd3640db9efe63984e8eb/663395f3eb775143e82a5b7c_Building-bakedNew.jpg')

    bakedTextureMini.flipY = false
    bakedTextureMini.colorSpace = THREE.SRGBColorSpace

    /**
     * Materials
     */
    //Baked material
    const bakedMaterialMini = new THREE.MeshBasicMaterial({ map: bakedTextureMini })
    const bakedMaterialbuilding = new THREE.MeshBasicMaterial({ map: bakedTextureBuilding })
    //const bakedMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })

    // Pole Light material
    // const poleLightMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
    //console.log(bakedMaterial)
    /**
     *  Model
     */

    gltfLoader.load(
      'https://uploads-ssl.webflow.com/661bd3640db9efe63984e8eb/66339c687ad0650bbc8b4842_vendcorpTestDraco.glb.txt',
      (gltf) => {
        console.log(gltf)
        const bakedMeshMini = gltf.scene.children.find(child => child.name === 'vendingMachineMini_baked')
        const bakedMeshBuilding = gltf.scene.children.find(child => child.name === 'vendingMachineBuilding_baked')
        // const bakedMeshR1 = gltf.scene.children.find(child => child.name === 'vendingMachine_firstRow vendingMachine_Row8')
        // const bakedMeshR2 = gltf.scene.children.find(child => child.name === 'vendingMachine_secondRow')
        // const bakedMeshR3 = gltf.scene.children.find(child => child.name === 'vendingMachine_thirdRow')
        // const bakedMeshR4 = gltf.scene.children.find(child => child.name === 'vendingMachine_fourthRow')
        // const bakedMeshR5 = gltf.scene.children.find(child => child.name === 'vendingMachine_topRow')
        //const poleLightAMesh = gltf.scene.children.find(child => child.name === 'poleLightA')
        //const poleLightBMesh = gltf.scene.children.find(child => child.name === 'poleLightB')
        //const portalLightMesh = gltf.scene.children.find(child => child.name === 'portalLight')


        bakedMeshMini.material = bakedMaterialMini
        bakedMeshBuilding.material = bakedMaterialbuilding
        //bakedMeshR1.material = bakedMaterial
        //bakedMeshR2.material = bakedMaterial
        //bakedMeshR3.material = bakedMaterial
        //bakedMeshR4.material = bakedMaterial
        //bakedMeshR5.material = bakedMaterial
        //poleLightAMesh.material = poleLightMaterial
        //poleLightBMesh.material = poleLightMaterial
        //portalLightMesh.material = portalLightMaterial




        scene.add(gltf.scene)
        console.log(gltf.scene)
      }
    )


    /**
     * Sizes
     */
    const sizes = {
      width: container.clientWidth,
      height: container.clientHeight
    }

    document.addEventListener('resize', () => {
      // Update sizes
      sizes.width = container.clientWidth
      sizes.height = container.clientHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      //camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      // // Update fireflies Pixel Ration
      // firefliesMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2)
    })

    /**
     * Camera
     */
    // Base camera
    //const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 14

    camera.position.y = 5

    camera.position.z = 30

    scene.add(camera)



    // Controls
    //  const controls = new FirstPersonControls(camera, canvas)
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.dampingFactor = 0.009

    /**
    * Renderer
    */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    //renderer.setClearColor('#00FFFFFF')


    /**
    * Animate
    */
    const clock = new THREE.Clock()

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()


      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()

  });


}
