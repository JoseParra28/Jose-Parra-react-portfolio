import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { SphereGeometry } from "three"
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"

const Landing = () => {

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    
    
    return (
        <Canvas>
            <Environment preset="city"/>
            <color args={['#241a1a']} attach="background"/>
            <OrbitControls makeDefault/>
         <mesh>
            <torusGeometry/>
            <meshBasicMaterial color={"green"}/>
    
        </mesh>

        <primitive object={computer.scene} />
        </Canvas>

        
    )
}

export default Landing