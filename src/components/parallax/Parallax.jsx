import {useRef} from 'react'
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = ({ type }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress,[0,1],["0%","500%"])
    const yBg = useTransform(scrollYProgress,[0,1],["0%","100%"])

    return (
        <div className="parallax" ref={ref} style={{ background: type === "services" ? "linear-gradient(180deg,#111132,#0c0c1d)" : "linear-gradient(180deg, #111132, #505064)" }}>
            <motion.h1 style={{ y: yText }}>{type === "services" ? "Skills" : "Projects"}</motion.h1>
            <motion.p style={{ y: yText }} className="subtext">
                {type === "services" ? "Assessment of languages, tools, and concepts learned both in and out of the classroom" : "Check out select demos for full experience"}
            </motion.p>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" style={{ y: yBg,
                backgroundImage: `url(${type==="services" ? "/planets.png" : "/sun.png"})`
            }}></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    )
}

export default Parallax