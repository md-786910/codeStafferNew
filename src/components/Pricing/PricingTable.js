import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../Button/Button";
import "./pricing.css";
import { BsCheckCircleFill } from "react-icons/bs";
import useContentful from "../../useContentful";


function PricingTable() {

    const { getPricing } = useContentful();
    const [pricing, setPricing] = useState([]);


    useEffect(() => {
        getPricing().then(setPricing);
        // eslint-disable-next-line
    }, []);


    const { customPlan, priceData, priceGuarant, priceText } = pricing?.items ? pricing?.items[0]?.fields?.pricingTable : []

    return (
        <section className="pricingTable">
            <div className="wrapper">
                <Container fluid className="p-0">
                    <Row>
                        <Col lg={3} className="mb-4">
                            <div className="pricingBox1">
                                <div className="pricingGarentyBox d-flex flex-column justify-content-center gap-4">
                                    {
                                        priceGuarant?.map((item, index) => {
                                            return <span key={index}>{item.guarantee}</span>

                                        })
                                    }
                                </div>

                                <div className="my-4 d-flex flex-column " style={{ gap: "13px" }}>
                                    {
                                        priceText?.map((item, index) => {
                                            return (
                                                <p key={index}>{item.s}</p>
                                            )
                                        })
                                    }

                                </div>

                            </div>
                        </Col>
                        {
                            priceData?.map((item, index) => {
                                return (
                                    <Col lg={3} className="mb-4" key={index} style={{ width: "18%" }}>
                                        <div className="pricingBox">
                                            <div className="pricingGarentyBox">
                                                <h3 className="text-center">{item.title}</h3>
                                                <p className="subText">
                                                    {item.description}
                                                </p>
                                                <h4 className="text-center">${item.price}</h4>
                                                <div className="btnBox mt-4">
                                                    <Button fullWidth={"fullWidth"}>Buy now</Button>
                                                </div>

                                            </div>
                                            <div className="my-4 d-flex flex-column  align-items-center " style={{ gap: "17px" }}>
                                                {
                                                    item.dataShow?.map((d, index) => {
                                                        return (
                                                            d.icon ? <p className="" key={index}>
                                                                <BsCheckCircleFill color={"green"} size={23} />
                                                            </p> : <p className="" key={index}>{d.text}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="pricingBtnDown ">
                                                <div className="btnBox mt-4">
                                                    <Button fullWidth={"fullWidth"}>Buy now</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                        <Col lg={3} className="mb-4" style={{ width: "21%", }}>
                            {
                                customPlan?.map((item, index) => {
                                    return (
                                        <div className="pricingBox1" >
                                            <div className="pricingGarentyBox">
                                                <h3 className="text-center">{item.title}</h3>
                                                <p className="subText">
                                                    {item.description}
                                                </p>
                                                <h4 className="text-center">{item.price}</h4>
                                                <div className="btnBox mt-4">
                                                    <Button fullWidth={"fullWidth"}>Chat now</Button>
                                                </div>

                                            </div>

                                            <div className="my-4 d-flex flex-column " style={{ gap: "13px" }}>
                                                <h5>
                                                    {item.call}
                                                </h5>
                                                {
                                                    item.dataShow?.map((d, index) => {
                                                        return <p key={index}>{d.text}</p>

                                                    })
                                                }

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default PricingTable;
