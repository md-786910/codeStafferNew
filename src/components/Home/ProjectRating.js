import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';
function ProjectRating({ rating }) {
    return (
        <section className="ProjectRatingPageHome mt-5">
            <div className="wrapper">
                <Container fluid className="text-center p-0">

                    <Row style={{ marginTop: "7em" }}>
                        {
                            rating?.map((d, index) => {
                                return (
                                    <Col lg={3} className="mb-4" key={index}>
                                        <div className="serviceHomeCardBox ">
                                            <div className="funFact_review_items">
                                                <div className="review_title">
                                                    <h2>
                                                        <CountUp end={d.success} duration={3} />
                                                        +
                                                    </h2>
                                                </div>
                                                <div className="review_comments">
                                                    <p>{d.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ProjectRating;
