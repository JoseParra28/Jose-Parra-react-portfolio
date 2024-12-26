import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF } from "@react-three/drei"

const Mug = () => {
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup/model.gltf')
    
    return (
       <Canvas>
        <mesh>
        <primitive 
            object={computer.scene}
            position-y={-1.2}
            scale={10}
            /> 
        </mesh>
       </Canvas>
    )
}

export default Mug

   

