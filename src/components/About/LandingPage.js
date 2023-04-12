import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import box from "../../assets/home/home1.png";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function AboutLanding({ image, heading }) {
    return (
        <section className="homePage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={6}>
                            <div className="homeContent">
                                {
                                    documentToReactComponents(heading)
                                }
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="homeImageBox">
                                <img src={image && image?.fields?.file?.url} className="img-size" alt="box" />
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default AboutLanding;
