import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useControls } from 'leva'


const About = ()=>{

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')


    return (
        <Canvas className="about-canvas">
            <Environment preset="city"/>
            <color args={['#040404']} attach="background"/>

            <mesh>
            
      <PresentationControls 
      global
      rotation={[0.13, 0.3, 0]} 
      polar={[-0.1, 0.2 ]}
      azimuth={[-1, 0.75]}
      config={{mass: 2, tension: 400}}
      snap={{mass: 4, tension: 400}}
      >
      <Float rotationIntensity={0.2}> 
          <rectAreaLight
          width={2.05}
          height={1.65}
          intensity={65}
          color={'#bd1212'}
          rotation={[ 0.5, Math.PI, 0]}
          position={[0,0.55, -1.15]}
          />          
      <primitive 
      object={computer.scene}
      position-y={-1.2}
      scale={1.9}
      > 
      <Html 
      transform
      wrapperClass="htmlScreen"
      distanceFactor={1.17}
      position={[0, 1.56,- 1.4]}
      rotation-x={-0.256}
      >
   
          <iframe src="https://joseparra28.github.io/TIC-TAC-TOE/"/>
      </Html>
      </primitive>
      </Float>
      </PresentationControls>

      <ContactShadows 
      position-y={-1.4}
      opacity={0.4}
      scale={20}
      blur={5}
      color={"#aba6a6"}
      />
            </mesh>
        </Canvas>
    )
}

export default About