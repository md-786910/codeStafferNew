import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Button } from '../Button/Button';
import "./pricing.css"
function PricingTable() {
    return (
        <section className="pricingTable">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row >
                        {
                            [...new Array(3)].map((i, index) => {
                                return (
                                    <Col lg={4} className="mb-4" key={index}>
                                        <div className="pricingBox">
                                            <h1>
                                                Pro
                                            </h1>
                                            <p>
                                                Faster response and support for SSL certificates.
                                            </p>

                                            <div className="mt-3">
                                                <span>
                                                    Includes:
                                                </span>
                                                <ul className='mt-3'>
                                                    <li>Single Website</li>
                                                    <li>Basic Plan</li>
                                                    <li>Advanced SSL Support</li>
                                                    <li>12hrs Malware Removal SLA</li>
                                                </ul>
                                            </div>


                                            <div className="pricingBtnDown">
                                                <h3>
                                                    $299.99
                                                </h3>
                                                <span>
                                                    Paid Annually
                                                </span>

                                                <div className="btnBox mt-4">
                                                    <Button fullWidth={"fullWidth"}>
                                                        Buy Now
                                                    </Button>
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

        </section >
    )
}

export default PricingTable