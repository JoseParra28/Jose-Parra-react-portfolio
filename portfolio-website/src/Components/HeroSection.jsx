import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
import {Html, ContactShadows, Environment, Float, PresentationControls,  useGLTF, Text, MeshTransmissionMaterial, ScrollControls, useScroll } from "@react-three/drei"
import { useControls } from 'leva'
import {motion} from 'framer-motion'
import { Scroll } from "./Scroll"
import Hero from "./Hero"

export const HeroSection = () => {
    return (
        <section>
            <div className="hero-content">
                <div>
                    <h1>Hi, I'm Jose</h1>
                    <h3>Full-Stack Developer</h3>
                    <button>Get in touch</button>
                </div>
                
            </div>
            <Hero/>
        </section>
    )
}