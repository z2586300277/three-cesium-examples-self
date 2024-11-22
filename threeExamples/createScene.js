import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const box = document.getElementById('box')

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(50, box.clientWidth / box.clientHeight, 0.1, 1000)

camera.position.set(0, 10, 10)

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, logarithmicDepthBuffer: true })

renderer.setSize(box.clientWidth, box.clientHeight)

box.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

controls.enableDamping = true

const axesHelper = new THREE.AxesHelper(15)

scene.add(axesHelper)

const gridHelper = new THREE.GridHelper(10, 10)

scene.add(gridHelper)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)

scene.add(ambientLight)

// 加载 FILE_HOST 资源
new GLTFLoader().load(FILE_HOST + 'models/glb/robot.glb', gltf => scene.add(gltf.scene))

// 加载 HOST 资源
const map = new THREE.TextureLoader().load(HOST + 'files/author/z2586300277.png')

const mesh = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial({ map }))

mesh.position.set(2, 2, 2)

scene.add(mesh)

animate()

function animate() {

  requestAnimationFrame(animate)

  mesh.rotation.x += 0.01

  mesh.rotation.y += 0.01

  mesh.rotation.z += 0.01

  controls.update()

  renderer.render(scene, camera)

}

window.onresize = () => {

  renderer.setSize(box.clientWidth, box.clientHeight)

  camera.aspect = box.clientWidth / box.clientHeight

  camera.updateProjectionMatrix()

}

