import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useControls } from 'leva'


const Hero = () => {

    const bunny = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bunny/model.gltf')
   
    const materialProps = useControls({
        thickness: {value: 0.2, min: 0, max:3, step: 0.05},
        roughness: {value: 0, min: 0, max:1, step: 0.1},
        transmission: {value: 1, min: 0, max:1, step: 0.01},
        ior: {value: 1.2, min: 0, max:3, step: 0.01},
        chromaticAberration: {value: 0.2, min: 0, max:1},
        backside: {value: true}
    })

    return (
        
        <Canvas >
            
            <directionalLight intensity={3} position={0, 3, 2}/>
            <Environment preset="city"/>
            <color args={['#040404']} attach="background"/>
            <Text fontSize={0.95} font="" position={1, 0, -1}>
                Hi, I'm Jose
            </Text>
            <PresentationControls>
        <Float>
          
           <mesh> 
        <torusGeometry/>
        <MeshTransmissionMaterial {...materialProps} />
        <meshBasicMaterial color={'#6b6969'} />
        
        </mesh>
        
        </Float>
        </PresentationControls>
        </Canvas>
      
        
    )
}

export default Hero