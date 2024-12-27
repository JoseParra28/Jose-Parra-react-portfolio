import { Canvas, useFrame, useThree } from "@react-three/fiber"
import React, { useRef } from "react"
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const AboutContent = () => {
    return(
           <div className="container">
            <motion.div variants={textVariant()}>
                <h1>Intoduction</h1>
            </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)}>
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
            </div>
    )
}

export default AboutContent