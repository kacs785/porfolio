import { Box } from "@chakra-ui/react"
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model3D() {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerHeight)
  const renderer = new THREE.WebGLRenderer()

  renderer.setSize(window.innerWidth - 500, window.innerHeight - 500)
  return (renderer.domElement)

}
