import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ser1 from "../../assets/home/ser1.png";
import { Button } from "../Button/Button";
import "./home.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
function Project({ data }) {


  return (
    <section className="ProjectHomePage">
      <div className="wrapper1">
        <Container fluid className="p-0">

          {
            data?.map((d, index) => {
              const { image, title } = d?.fields;
              return (
                <Row className={`align-items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}  mb-5`} key={index}>
                  <Col lg={6}>
                    <div className="projectBoxImageHome">
                      <img src={image?.fields?.file?.url} className="img-size" alt="box" />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="projectHomePage w-75 mx-auto">
                      <div>
                        {
                          documentToReactComponents(title)
                        }
                        <div className=" mt-4">
                          <Button>View Our Work</Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              )
            })
          }

        </Container>
      </div>
    </section>
  );
}

export default Project;
