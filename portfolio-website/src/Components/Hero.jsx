import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useControls } from 'leva'


const Hero = () => {

    const materialProps = useControls({
        thickness: {value: 0.2, min: 0, max:3, step: 0.05},
        roughness: {value: 0, min: 0, max:1, step: 0.1},
        transmission: {value: 1, min: 0, max:1, step: 0.01},
        ior: {value: 1.2, min: 0, max:3, step: 0.01},
        chromaticAberration: {value: 0.82, min: 0, max:1},
        backside: {value: true}
    })
    const Sphere = ({position, size, color}) => {
        const ref = useRef()
    
        useFrame((state, delta) => {
            // ref.current.rotation.x += delta * 3
            ref.current.rotation.y += delta 
            // ref.current.position.z = Math.sin(state.clock.elapsedTime * 2)
        })
        return (
            <mesh position={position} ref={ref}> 
                <torusGeometry args={size}/>
                <MeshTransmissionMaterial {...materialProps} />
                <meshStandardMaterial color={color}  />
            </mesh>
        )
    }
    const Torus = ({position, size, color}) => {
        const ref = useRef()
    
        useFrame((state, delta) => {
            ref.current.rotation.x += delta
            ref.current.rotation.y += delta 
            // ref.current.position.z = Math.sin(state.clock.elapsedTime * 2)
        })
        return (
            <mesh position={position} ref={ref}> 
                <torusGeometry args={size}/>
                <MeshTransmissionMaterial {...materialProps} />
                <meshStandardMaterial color={color}  />
            </mesh>
        )
    }

    const Scene = () => {
        return (
            <>
            <directionalLight intensity={3} position={0, 3, 2}/>
            <Environment preset="night"/>
            <color args={['#040404']} attach="background"/>
            <Text fontSize={1.2} font="">
                Hi, I'm Jose
            </Text>
            </>
        )
    }
   
  

    return (
        <Canvas className="hero-canvas" >
           <Scene/>
        <PresentationControls>
        <Float>
        <Torus position={[4,0,0]} />
        </Float>
        </PresentationControls>

        <PresentationControls>
            <Float>
            <Sphere position={-1, 2,-3}/>
            </Float>
        </PresentationControls>
        </Canvas>
    )
}

export default Hero