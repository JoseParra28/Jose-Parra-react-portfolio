import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useControls } from 'leva'
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";


const About = ()=>{

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')


    return (
        <>
        <section>
        <Canvas className="about-canvas">
            <Environment preset="city"/>
            <color args={['#040404']} attach="background"/>   
            <mesh >
            
      <PresentationControls 
      global
      rotation={[0.13, 0, 0]} 
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
          color={'#2f5159'}
          rotation={[ 0.5, Math.PI, 0]}
          position={[0,0.55, -1.15]}
          />          
      <primitive 
      object={computer.scene}
      position={[3, -1,- 1.4]}
      rotation-y={-26}
      scale={1.3}
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
      blur={2}
      color={"#aba6a6"}
      />
            </mesh>
        </Canvas>
        
        
        <div className="container">
            
        <h1>Introduction</h1>
        <p variants={fadeIn("", "", 0.1, 1)}>
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>
        </div>
        <div className="container skills">
        <div className="blur-bg">
        <h1>Skills</h1>
        </div>
        

        <div className="progress">
            <div className="progress-bar webgl" >
            <p>WebGL</p>
            </div>
        </div>
        <div className="progress">
            <div className="progress-bar reactjs" >
            <p>ReactJS</p>
            </div>
        </div>
        <div className="progress">
            <div className="progress-bar js" >
            <p>Javascript</p>
            </div>
        </div>
        <div className="progress">
            <div className="progress-bar HC" >
            <p>HTML + CSS</p>
            </div>
        </div>
        <div className="progress">
            <div className="progress-bar threed" >
            <p>Blender</p>
            </div>
        </div>
        <div className="progress">
            <div className="progress-bar python" >
            <p>Python</p>
            </div>
        </div>
        </div>
        </section>
        </>
        
    )
}

export default About