import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import * as dat from 'lil-gui'


const gui = new dat.GUI()
// gui.add(SphereGeometry)


const canvas = document.querySelector('canvas.webgl')


const scene = new THREE.Scene()
const image = new Image()
const texture = new THREE.Texture(image)
image.addEventListener('load', () => {
    texture.needsUpdate = true
})
image.src = '/textures/matcaps/Red.jpg'
const loadingManager = new THREE.LoadingManager()
console.log(loadingManager)
const textureLoader = new THREE.TextureLoader(loadingManager)
const yellowFont = textureLoader.load('/textures/matcaps/Yellow.jpg')
const redFont = textureLoader.load('/textures/matcaps/Red.jpg')
const crystalPower1 = textureLoader.load('/textures/matcaps/1star.png')
const crystalPower2 = textureLoader.load('/textures/matcaps/2stars.png')
const crystalPower3 = textureLoader.load('/textures/matcaps/3stars.png')
const crystalPower4 = textureLoader.load('/textures/matcaps/4stars.png')
const crystalPower5 = textureLoader.load('/textures/matcaps/5stars.png')
const crystalPower6 = textureLoader.load('/textures/matcaps/6stars.png')
const crystalPower7 = textureLoader.load('/textures/matcaps/7stars.png')


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
        const textMaterial = new THREE.MeshBasicMaterial({map:yellowFont})
        textGeometry.center()
       
        const text = new THREE.Mesh(textGeometry, textMaterial)
        text.position.x = -1.5
        scene.add(text)

        const sphereGeometry = new THREE.SphereGeometry(0.3,32,16)
        const sphereMaterial = new THREE.MeshMatcapMaterial({map: crystalPower1})
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
                const textMaterial1 = new THREE.MeshBasicMaterial({map: yellowFont})
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
                const textMaterial2 = new THREE.MeshBasicMaterial({map:redFont})
                textGeometry2.center()
                const text2 = new THREE.Mesh(textGeometry2, textMaterial2)
                
                text2.position.x = 1.8
                scene.add(text2)
            
            }
        )
    }
)

const sphereGeometry2 = new THREE.SphereGeometry(0.3,32,16)
const sphereMaterial2 = new THREE.MeshMatcapMaterial({map: crystalPower2})
const sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2)
scene.add(sphere2)
sphere2.position.x = 0.5
sphere2.position.y = 1.5
sphere2.position.z = -1.5
sphere2.rotation.y = 4.6

const sphereGeometry3 = new THREE.SphereGeometry(0.3,32,16)
const sphereMaterial3 = new THREE.MeshMatcapMaterial({map: crystalPower3})
const sphere3 = new THREE.Mesh(sphereGeometry3, sphereMaterial3)
scene.add(sphere3)
sphere3.position.x = -2
sphere3.position.y = -1
sphere3.rotation.y = 4.6

const sphereGeometry4 = new THREE.SphereGeometry(0.3,32,16)
const sphereMaterial4 = new THREE.MeshMatcapMaterial({map: crystalPower4})
const sphere4 = new THREE.Mesh(sphereGeometry4, sphereMaterial4)
scene.add(sphere4)
sphere4.position.x = -1.5
sphere4.position.y = 1.7
sphere4.rotation.y = 4.6

const sphereGeometry5 = new THREE.SphereGeometry(0.3,32,16)
const sphereMaterial5 = new THREE.MeshMatcapMaterial({map: crystalPower5})
const sphere5 = new THREE.Mesh(sphereGeometry5, sphereMaterial5)
scene.add(sphere5)
sphere5.position.y = -1.5
sphere5.position.x = 2
sphere5.rotation.y = 4.6

const sphereGeometry6 = new THREE.SphereGeometry(0.3,32,16)
const sphereMaterial6 = new THREE.MeshMatcapMaterial({map: crystalPower6})
const sphere6 = new THREE.Mesh(sphereGeometry6, sphereMaterial6)
scene.add(sphere6)
sphere6.position.y = 1.4
sphere6.position.x = 2
sphere6.position.z = -1
sphere6.rotation.y = 4.6

const sphereGeometry7 = new THREE.SphereGeometry(0.3,32,16)
const sphereMaterial7 = new THREE.MeshMatcapMaterial({map: crystalPower7})
const sphere7 = new THREE.Mesh(sphereGeometry7, sphereMaterial7)
scene.add(sphere7)
sphere7.position.y = -1.6 
sphere7.position.z = 1
sphere7.rotation.y = 4.6







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



const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// gui.add(camera.position, 'x')
// gui.add(camera.position, 'y')
// gui.add(camera.position, 'z')
camera.position.x = -0
camera.position.y = 0
camera.position.z = 5
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    

    
    controls.update()

    
    renderer.render(scene, camera)

    
    window.requestAnimationFrame(tick)
}

tick()