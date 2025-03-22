import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './skills.css'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Skills = () => {
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>My confidence level for the following:</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src="/meter90.svg" alt="" />
                                    <h5>Frontend</h5>
                                </div>
                                <div className="item">
                                    <img src="meter80.svg" alt="" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src="/meter1.svg" alt="" />
                                    <h5>Python, Java, C</h5>
                                </div>
                                <div className="item">
                                    <img src="/meter90.svg" alt="" />
                                    <h5>Problem Solving</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="tools">
                <div className="section">
                    <h2>Tools/Control</h2>
                    <ul>
                        <li>Git (+GitHub)</li>
                        <li>Linux (Ubuntu)</li>
                        <li>AWS (EC2, S3, RDS, Lambda)</li>
                    </ul>
                </div>
                <div className="section">
                    <h2>Languages</h2>
                    <ul>
                        <li>Python, SQL</li>
                        <li>Java, JavaScript</li>
                        <li>C, C#</li>
                    </ul>
                </div>
                <div className="section">
                    <h2>Frameworks</h2>
                    <ul>
                        <li>.NET</li>
                        <li>Bootstrap</li>
                        <li>Express.js</li>
                    </ul>
                </div>
            </div>
            <img className='background-image-left' src="/color-sharp.png" alt="" />
        </section>
    )
}

export default Skills