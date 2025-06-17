'use client'

import { useRef, Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import { Group } from 'three'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import { ZoomIn, ZoomOut } from 'lucide-react'

function FloatingProduct({ rotation }: { rotation: [number, number, number] }) {
  const ref = useRef<Group>(null)
  const { scene } = useGLTF('/models/shoe.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
      ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7
    }
  })

  return (
    <group ref={ref}>
      <primitive object={scene} rotation={rotation} />
    </group>
  )
}

export const FloatingProductCard = () => {
  const [isZoomEnabled, setIsZoomEnabled] = useState(false)

  const handleZoomToggle = () => {
    setIsZoomEnabled(prev => !prev)
  }

  return (
    <div className="w-full h-full rounded-lg bg-gray-200 relative">
      <button
        onClick={handleZoomToggle}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        aria-label={isZoomEnabled ? "Disable zoom" : "Enable zoom"}
        tabIndex={0}
      >
        {isZoomEnabled ? (
          <ZoomOut className="w-5 h-5 text-gray-700" />
        ) : (
          <ZoomIn className="w-5 h-5 text-gray-700" />
        )}
      </button>
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
        <Suspense fallback={null}>
          <color attach="background" args={['#f8f8f8']} />
          <ambientLight intensity={1.2} />
          <spotLight 
            intensity={1.5} 
            angle={0.2} 
            penumbra={1} 
            position={[10, 15, -5]} 
            castShadow 
          />
          <spotLight 
            intensity={0.8} 
            angle={0.2} 
            penumbra={1} 
            position={[-10, 15, 5]} 
            castShadow 
          />
          <hemisphereLight 
            intensity={0.8} 
            groundColor="#ffffff" 
            color="#ffffff" 
          />
          <directionalLight 
            intensity={0.5} 
            position={[0, 10, 0]} 
          />
          <ContactShadows 
            resolution={512} 
            position={[0, -0.8, 0]} 
            opacity={0.8} 
            scale={10} 
            blur={2} 
            far={0.8} 
          />
          <FloatingProduct rotation={[0.3, Math.PI / 1.6, 0]} />
          <OrbitControls 
            enableZoom={isZoomEnabled}
            enablePan={false}
            minDistance={2}
            maxDistance={8}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
} 
