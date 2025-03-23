import { Link } from "react-scroll"
import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat:Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition:{
            repeat:Infinity,
            repeatType:"irror",
            duration:20,
        }
    },
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Ryan Cuthbertson</motion.h2>
                    <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <Link to="Portfolio" smooth={true} duration={500}>
                            See Latest Works
                        </Link>
                        <Link to="Contact" smooth={true} duration={500}>
                            Contact Me
                        </Link>
                    </motion.div>
                    <motion.img className = 'scroll' variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Full Stack Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/gitpic.png" alt="" />
            </div>
        </div>
    )
}

export default Hero