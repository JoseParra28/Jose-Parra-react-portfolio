'use client'
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF, Text, MeshTransmissionMaterial, ScrollControls, useScroll, OrbitControls } from "@react-three/drei"
import { useControls } from 'leva'
import Scene from './Hero.jsx'

// const bookShelf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase-wide/model.gltf')


const Cube = ({position, size, color}) => {

    const mesh = useRef(null)
    const data = useScroll()

    useFrame ((state, delta) => {
        const { offset } = data
        mesh.current.rotation.x = offset * 5
        mesh.current.rotation.y = offset * 5
        mesh.current.rotation.z = offset * 5
        mesh.current.position.z = offset * 6
    })
    // useFrame ((state, delta) => {
    //     mesh.current.rotation.y += delta
    // })
    return (
        <mesh ref={mesh}>
            <torusGeometry args={[1]}/>
            <meshStandardMaterial color={"orange"}/>
        </mesh>
    )
}

export const Scroll = () => {

    return (
  
    <Canvas className="hero-canvas" >
        <ScrollControls pages={5}>
        <OrbitControls enableZoom={false}/>
        <directionalLight position={[2,1,1]}/>
        <ambientLight intensity={2}/>
        <Cube />
        </ScrollControls>
     </Canvas>
   
       
    )
}