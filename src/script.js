import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()
// gui.add(SphereGeometry)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const image = new Image()
const texture = new THREE.Texture(image)
image.addEventListener('load', () => {
    texture.needsUpdate = true
})
image.src = '/textures/matcaps/1étoile.png'
const loadingManager = new THREE.LoadingManager()
console.log(loadingManager)
const textureLoader = new THREE.TextureLoader(loadingManager)
const crystalPower2 = textureLoader.load('/textures/matcaps/2étoile.png')
const crystalPower3 = textureLoader.load('/textures/matcaps/2étoiles.png')

const fontLoader = new FontLoader()

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new TextGeometry(
            'DRAG', {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 1
            }
        )
        const textMaterial = new THREE.MeshBasicMaterial({color: 'yellow'})
        textGeometry.center()
        const text = new THREE.Mesh(textGeometry, textMaterial)
        text.position.x = -1.5
        scene.add(text)

        
        { 
        const sphereGeometry1 = new THREE.SphereGeometry(0.3,32,16)
        const sphereMaterial1 = new THREE.MeshMatcapMaterial({map: crystalPower2})
        const sphere1 = new THREE.Mesh(sphereGeometry1, sphereMaterial1)
        sphere1.position.y = 1.5 
        sphere1.position.z
        sphere1.rotation.y = 4.5
        
        scene.add(sphere1)
        const sphereGeometry2 = new THREE.SphereGeometry(0.3,32,16)
        const sphereMaterial2 = new THREE.MeshMatcapMaterial({map: crystalPower2})
        
        const sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2)
        sphere2.position.x = 2
        sphere2.position.y = 2
        sphere2.rotation.y = 4
        
        scene.add(sphere2)
        }



        const sphereGeometry = new THREE.SphereGeometry(0.3,32,16)
        const sphereMaterial = new THREE.MeshMatcapMaterial({map: texture})
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
        sphere.rotation.y = 4.6
        sphere.position.x = -0.2
        sphere.position.y = 0
        scene.add(sphere)
       
        fontLoader.load(
            '/fonts/helvetiker_regular.typeface.json',
            (font) => {
                const textGeometry1 = new TextGeometry(
                    'N', {
                        font: font,
                        size: 0.5,
                        height: 0.2,
                        curveSegments: 12,
                        bevelEnabled: true,
                        bevelThickness: 0.03,
                        bevelSize: 0.02,
                        bevelOffset: 0,
                        bevelSegments: 5
                    }
                )
                const textMaterial1 = new THREE.MeshBasicMaterial({color: 'yellow'})
                textGeometry1.center()
                const text1 = new THREE.Mesh(textGeometry1, textMaterial1)
                
                text1.position.x = 0.4
                scene.add(text1)
            }
        )
        fontLoader.load(
            '/fonts/helvetiker_regular.typeface.json',
            (font) => {
                const textGeometry2 = new TextGeometry(
                    'BALL Z', {
                        font: font,
                        size: 0.5,
                        height: 0.2,
                        curveSegments: 12,
                        bevelEnabled: true,
                        bevelThickness: 0.03,
                        bevelSize: 0.02,
                        bevelOffset: 0,
                        bevelSegments: 5
                    }
                )
                const textMaterial2 = new THREE.MeshBasicMaterial({color: 'red'})
                textGeometry2.center()
                const text2 = new THREE.Mesh(textGeometry2, textMaterial2)
                
                text2.position.x = 1.8
                scene.add(text2)
            
            }
        )
    }
)

/**
 * Object
 */




/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// gui.add(camera.position, 'x')
// gui.add(camera.position, 'y')
// gui.add(camera.position, 'z')
camera.position.x = -0
camera.position.y = 0
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // sphere.rotation.y += 0.01

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()