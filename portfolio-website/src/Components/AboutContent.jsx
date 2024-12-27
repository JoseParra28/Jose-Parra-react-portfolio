import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const AboutContent = () => {
    return(
        <>
        <section>
        
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

export default AboutContent