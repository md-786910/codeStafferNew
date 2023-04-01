import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import logo1 from "../../assets/service/logo.png"
import box2 from "../../assets/service/serv2.png"
import icon1 from "../../assets/service/icon.png"
import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ServiceIndex(props) {

    const { title, id, logo, summary, mediaTechnologyUsed } = props.item?.fields;


    return (
        <section className="homePage mb-4" >
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
                                        <img src={logo?.fields?.file.url} alt="logo" width="45" />
                                    </div>
                                    <div>
                                        {
                                            documentToReactComponents(summary)
                                        }
                                    </div>
                                    {/*      <div>
                                        <h2>UI/UX Development</h2>
                                        <p>
                                            Ut vitae erat tempus, venenatis augue eu, placerat libero. Nunc interdum ligula sapien. Proin scelerisque nisi orci, at vulputate ligula sollicitudin ut. Maecenas porttitor magna non dictum blandit. Etiam interdum nunc sit amet lectus commodo sodales.
                                        </p>
                                    </div> */}

                                    <div>
                                        <Link to={`/services/${id}`}>
                                            <span style={{ color: "pink", fontWeight: "500" }}>Read More</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-4 d-flex gap-4 align-items-center">
                                    {
                                        mediaTechnologyUsed?.map((i, index) => {
                                            return (
                                                <div className="serviceIconBox" key={index}>
                                                    <img src={i?.fields.file.url} alt="icon" />
                                                </div>

                                            )
                                        })
                                    }
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