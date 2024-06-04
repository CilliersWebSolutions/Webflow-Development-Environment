
import Experience from "./Experience/Experience.js";

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
window.Webflow ||= [];
window.Webflow.push(() => {
  //   init3D();



  const baseContainer = document.querySelector('[data-3d="c"]');
  if (baseContainer) {
    const experience = new Experience(baseContainer)
  }



  //   const partContainers = new Experience(document.querySelectorAll('[data-3d="cr"], [data-3d="sp"], [data-3d="gn"], [data-3d="ma"]'))

  //   const canvasModels = partContainers.createElement('canvas');
  //   canvasModels.classList.add('webgl');
  //   container.appendChild(canvas);

  //   console.log(partContainers)

})


// function init3D() {

//   const baseContainers = document.querySelectorAll('[data-3d="c"]');
//   const partContainers = document.querySelectorAll('[data-3d="cr"], [data-3d="sp"], [data-3d="gn"], [data-3d="ma"]');

//   // Create a scene
//   const scene = new THREE.Scene();

//   /**
//   * Base
//   */

//   /**
//    *
// * Loaders
//   */
//   // Texture loader
//   const textureLoader = new THREE.TextureLoader()

//   // Draco loader
//   const dracoLoader = new DRACOLoader()
//   const devpath = ('')
//   dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/gh/CilliersWebSolutions/draco@main/draco/')

//   // GLTF loader
//   const gltfLoader = new GLTFLoader()
//   gltfLoader.setDRACOLoader(dracoLoader)

//   /**
//    * Materials
//    */

//   //Baked material

//   const loadTexture = (url) => {
//     const texture = textureLoader.load(url);
//     texture.flipY = false;
//     texture.colorSpace = THREE.SRGBColorSpace;
//     return texture;
//   };

//   const bakedTextureRobotBase = loadTexture('https://uploads-ssl.webflow.com/661bd3640db9efe63984e8eb/664cb285b965e7a8c8c02b55_baseBakedV3.jpg')

//   const bakedTextureRobotAddons = loadTexture('https://uploads-ssl.webflow.com/661bd3640db9efe63984e8eb/664ca1787a5cf33846a2a929_addonBakedFIx.jpg')

//   const bakedMaterialRobotBase = new THREE.MeshBasicMaterial({ map: bakedTextureRobotBase })
//   const bakedMaterialRobotAddons = new THREE.MeshBasicMaterial({ map: bakedTextureRobotAddons })

//   /**
//    *  Model
//    */

//   let baseMesh, addonsMeshes = {};


//   gltfLoader.load('https://uploads-ssl.webflow.com/661bd3640db9efe63984e8eb/664cd59c394d2c8d2483d381_robotWithAddonsCentered.glb.txt',
//     (gltf) => {

//       baseMesh = gltf.scene.children.find(child => child.name === 'baseBaked');

//       baseMesh.material = bakedMaterialRobotBase;

//       addonsMeshes['cr'] = gltf.scene.children.find(child => child.name === 'sataliteBaked');
//       addonsMeshes['sp'] = gltf.scene.children.find(child => child.name === 'solarBaked');
//       addonsMeshes['gn'] = gltf.scene.children.find(child => child.name === 'gunBaked');
//       addonsMeshes['ma'] = gltf.scene.children.find(child => child.name === 'armBaked');

//       for (const key in addonsMeshes) {
//         addonsMeshes[key].material = bakedMaterialRobotAddons;
//       }

//       baseContainers.forEach(container => {
//         initScene(container, [baseMesh.clone()]);
//       });

//       partContainers.forEach(container => {
//         const part = container.getAttribute('data-3d');
//         if (addonsMeshes[part]) {
//           initScene(container, [baseMesh.clone(), addonsMeshes[part]]);
//         }
//       });
//     }
//   );
// }
// function initScene(container, meshes) {
//   const canvas = document.createElement('canvas');
//   canvas.classList.add('webgl');
//   container.appendChild(canvas);

//   const scene = new THREE.Scene();

//   meshes.forEach(mesh => {
//     scene.add(mesh);
//   });
//   /**
//    * Sizes
//    */
//   const sizes = {
//     width: container.clientWidth,
//     height: container.clientHeight
//   }

//   document.addEventListener('resize', () => {
//     // Update sizes
//     sizes.width = container.clientWidth
//     sizes.height = container.clientHeight

//     // Materials


//     // Update camera
//     camera.aspect = sizes.width / sizes.height

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//   })

//   /**
//    * Camera
//    */

//   // Base camera

//   const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
//   camera.position.x = 10

//   camera.position.y = 5

//   camera.position.z = 5

//   scene.add(camera)

//   // Controls

//   const controls = new OrbitControls(camera, canvas)
//   controls.enableDamping = true
//   controls.dampingFactor = 0.009
//   controls.enablePan = false
//   controls.enableZoom = false

//   // Check for the specific attribute and enable autoRotate if present
//   if (container.hasAttribute('data-auto-rotate')) {
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 0.5; // You can adjust the speed
//   }
//   /**
//   * Renderer
//   */
//   const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     antialias: true,
//     alpha: true
//   })
//   renderer.setSize(sizes.width, sizes.height)
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


//   //renderer.setClearColor('#00FFFFFF')


//   /**
//   * Animate
//   */
//   const clock = new THREE.Clock()

//   const tick = () => {
//     const elapsedTime = clock.getElapsedTime()


//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
//   }

//   tick()

//   // });


// }
