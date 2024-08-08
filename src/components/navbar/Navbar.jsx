import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">

        <Sidebar/>

        <div className="wrapper">
            <span>Professional Portfolio</span>
            <div className="social">
                <a href="https://github.com/rcuthbertson25" target="_blank" rel="noopener noreferrer">
                    <img src="/github_logo.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/ryan-cuthbertson-61a980281/" target="_blank" rel="noopener noreferrer">
                    <img src="/LinkedIn_logo.webp" alt="" /></a>
                <a href="https://www.instagram.com/rcuthbertson25" target="_blank" rel="noopener noreferrer">
                    <img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar