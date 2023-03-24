import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import logo from "../../assets/service/logo.png"
import box2 from "../../assets/service/serv2.png"
import icon1 from "../../assets/service/icon.png"

function ServiceIndex(props) {
    return (
        <section className="homePage ">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row className={`${props.index % 2 === 0 ? "flex-row justify-content-center" : "flex-row-reverse"}`}>
                        <Col lg={6}>
                            <div className="serviceImageBox">
                                <img src={box2} className="img-size" alt="box" style={props.index % 2 === 0 ? { left: "-9em" } : { right: "-10em" }} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="aboutContent">
                                <div>
                                    <div className="logoService mb-3">
                                        <img src={logo} alt="logo" width="45" />
                                    </div>
                                    <h2>UI/UX Development</h2>
                                    <p>
                                        Ut vitae erat tempus, venenatis augue eu, placerat libero. Nunc interdum ligula sapien. Proin scelerisque nisi orci, at vulputate ligula sollicitudin ut. Maecenas porttitor magna non dictum blandit. Etiam interdum nunc sit amet lectus commodo sodales. <span style={{ color: "" }}>Read More</span>
                                    </p>
                                </div>
                                <div className="mt-4 d-flex gap-4 align-items-center">
                                    <div className="serviceIconBox">
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    <div className="serviceIconBox">
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    <div className="serviceIconBox">
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    <div className="serviceIconBox">
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    <div className="serviceIconBox">
                                        <img src={icon1} alt="icon" />
                                    </div>

                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ServiceIndex;
