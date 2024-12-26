import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF } from "@react-three/drei"





const Landing = () => {

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const bookShelf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase-wide/model.gltf')
    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
    
    return (
        <>
        <Canvas>
            <Environment preset="city"/>
            <color args={['#6b6969']} attach="background"/>
            
         <mesh>
        
       
        
            
        <PresentationControls>
            <Float>
            <primitive
            object={phone.scene}
            position={[-5,-1,-1]}
            rotation={[0.10, 0.3, 0]} 
            scale={1}
            >
                
            </primitive>
            </Float>
        </PresentationControls>
          
           
                <PresentationControls>
                <Float>
                <primitive 
                object={bookShelf.scene}
                position={[3,0 ,2]}
                scale={0.5}
                >
                    <Html>
                        <h1>Hello</h1>
                    </Html>
                </primitive>

                </Float>
                </PresentationControls>
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
         
                <iframe src="https://joseparra28.github.io/Runway-models-2/"/>
            </Html>
            </primitive>
            </Float>
            </PresentationControls>

            <ContactShadows 
            position-y={-1.4}
            opacity={0.4}
            scale={20}
            blur={1}
            />
        </mesh>

       
        </Canvas>
        <Canvas>
        <mesh 
        position-y={-1}
        rotation-x={- Math.PI * 0.5}
        scale={10}
         >

            
        <planeGeometry />
        <meshBasicMaterial color={'#6b6969'}/>
        
        </mesh>
        <mesh>
      <sphereGeometry/>
        </mesh>
        </Canvas>
        <div id="/home">
            <h1>Hello there</h1>
        </div>
        </>
    )
}

export default Landing