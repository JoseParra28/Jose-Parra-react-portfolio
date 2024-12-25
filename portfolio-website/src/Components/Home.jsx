import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { SphereGeometry } from "three"
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei"

const Landing = () => {


    return (
        <Canvas>
            <OrbitControls makeDefault/>
         <mesh>
            <torusGeometry/>
            <meshBasicMaterial color={"green"}/>
        </mesh>
        </Canvas>
    )
}

export default Landing