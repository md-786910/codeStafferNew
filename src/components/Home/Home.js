import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import box from "../../assets/home/home1.png"
import "./home.css";
function Home() {
    return (
        <section className="homePage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={6}>
                            <div className="homeContent">
                                <div>
                                    <h5>Digital Agency</h5>
                                    <h1>For Mindful Brands</h1>
                                    <p>
                                        Etiam tristique dictum purus ut dignissim. Donec ac neque
                                        sit amet leo lobortis commodo eu at lectus.
                                    </p>
                                </div>
                                <div className="serviceBtnHomePage d-flex gap-2 align-items-center" style={{ cursor: "pointer" }}>

                                    <span><BsFillArrowRightCircleFill size={30} /></span>
                                    <span>OUR SERVICES</span>


                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="homeImageBox">
                                <img src={box} className="img-size" alt="box" />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Home;
