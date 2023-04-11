import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./contact.css";
import com from "../../assets/b.png";
import { Button } from "../Button/Button";
import { showToastError, showToastSuccess } from "../../utils/constant";

function ContactForm() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_gy4f2wq",
                "template_ov53lyg",
                form.current,
                "Vm6ceQSUBkMfByGuL"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    showToastSuccess("successfully send message!")
                    e.target.reset();
                },
                (error) => {
                    showToastError("something went wrong!")
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="ContactFormPage">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={4}>
                            <div className="d-flex" style={{ position: "relative" }}>
                                <div className="contactFormImg">
                                    <img src={com} alt="com" />
                                </div>
                                <div className="ContactRoundBox">
                                    <div className="ContactRoundBoxCover">
                                        <div className="contacFormCoverTitle">
                                            <h2>Our Services</h2>
                                            <span className="text-center">
                                                {" "}
                                                Ut vitae erat tempus, voueoweuowe oewue owu
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div className="partnerLogo">
                                <Row className="">
                                    <div className="ContactFormFieldBox d-flex justify-content-center flex-column align-items-center">
                                        <h2>Get in touch</h2>
                                        <span>Please fill out below form.</span>
                                        <span>We will get back to you soon.</span>
                                    </div>

                                    <div className="rightPartContact mt-5">
                                        <div className="contactForm">
                                            <form
                                                ref={form}
                                                onSubmit={sendEmail}
                                                className="formControl"
                                            >
                                                <div className="halfContact">
                                                    <input
                                                        required={true}
                                                        className="halfWidth"
                                                        type="text"
                                                        placeholder="First Name"
                                                        name="user_name"
                                                    />
                                                    <input
                                                        required={true}
                                                        className="halfWidth"
                                                        type="text"
                                                        placeholder="Last Name"
                                                        name="last_name"
                                                    />
                                                    <input
                                                        required={true}
                                                        className="halfWidth"
                                                        type="text"
                                                        placeholder="Email ID"
                                                        name="user_email"
                                                    />
                                                    <input
                                                        required={true}
                                                        className="halfWidth"
                                                        type="text"
                                                        placeholder="Phone No"
                                                        name="user_phone"
                                                    />
                                                    <input
                                                        required={true}
                                                        type="text"
                                                        className="fullWidth"
                                                        placeholder="Subject"
                                                        name="subject"
                                                    />
                                                    <input
                                                        required={true}
                                                        type="text"
                                                        className="fullWidth mt-5"
                                                        placeholder="Message"
                                                        name="message"
                                                    />
                                                </div>

                                                <div className="sendMessage text-center mt-5">
                                                    <Button type="submit">Send Message</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default ContactForm;
