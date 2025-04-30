import './portfolio.scss'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Food Delivery App",
        img: "./tomato_app.png",
        desc: "Full-stack responsive delivery app with login/signup, order placement via Stripe, and tracking. Includes admin panel for MongoDB database management.",
        demo: 'true'
    },
    {
        id: 2,
        title: "Smart Trips",
        img: "./ai-planner-home-2.png",
        desc: "React travel planning app which uses Gemini AI to create a full travel itinerary including hotel options depending on the user's needs. Incorporates Google Authorization, Place, and Gemini AI APIs.",
        demo: 'true'
    },
    {
        id: 3,
        title: "Venture",
        img: "./venture.png",
        desc: "React app built with NextJS which allows users to search and explore hotels, restaurants, and attractions in any city. Utilizes Google Places API for data retrieval.",
        demo: 'true'
    },
    {
        id: 4,
        title: "Stretch Application Board",
        img: "./CAPSTONE_EXAMPLE.png",
        desc: "Full-stack internal application with PSU SSO login, role-based access, and assignment submission workflow. Features secure backend using ASP.NET Web Forms and SQL Server, with admin dashboard for tracking and managing user requests.",
        demo: 'false'
    },
    {
        id: 5,
        title: "React Fitness App",
        img: "./fitness.png",
        desc: "Static fitness web app with captivating animations and a responsive user experience across all devices. Web/mobile UX preview available on LinkedIn",
        demo: 'false'
    },
]

const urlMap = {
    'Food Delivery App': 'https://food-del-frontend-0ont.onrender.com/',
    'Smart Trips': 'https://ai-travel-planner-iota.vercel.app/',
    'Venture': 'https://venture-three-tan.vercel.app/'
    // Add more mappings as needed
  };

const Single = ({ item }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    const buttonClass = `button ${item.demo === 'false' ? 'button-gray' : 'button-orange'}`;
    const buttonText = item.demo === 'false' ? 'Demo Unavailable' : 'See Demo';
    const linkUrl = urlMap[item.title] || '#Portfolio';

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={linkUrl} className={buttonClass} target="_blank" rel="noopener noreferrer">
                            {buttonText}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}

const Portfolio = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div id='Portfolio' className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
