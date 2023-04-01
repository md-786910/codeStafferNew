import React, { useEffect, useState } from "react";
import ServiceBussiness from "../components/ServiceDetail/ServiceBussiness";
import ServiceDetailLanding from "../components/ServiceDetail/ServiceDetailLanding";
import ServiceExplain from "../components/ServiceDetail/ServiceExplain";
import ServiceBrand from "../components/ServiceDetail/ServiceBrand";
import ServiceEnd from "../components/ServiceDetail/ServiceEnd";

import useContentful from ".././useContentful";
import { useParams } from "react-router-dom";
function ServiceDetailPage() {
  const { title } = useParams();
  console.log(title);
  const { getServiceDetail } = useContentful();

  const [serviceDetail, setServiceDetail] = useState([]);



  useEffect(() => {
    // document.title = title||;
    getServiceDetail().then((item) => {
      item?.items?.filter((i) => {
        return parseInt(title) !== i.fields.id ? setServiceDetail(i) : []
      })
    });
    // eslint-disable-next-line
  }, []);

  console.log(serviceDetail);


  return (
    <>
      <div className="content-wrapper-service-det">
        <ServiceDetailLanding heading={serviceDetail?.fields?.heading} image={serviceDetail?.fields?.image?.fields?.file.url} />
      </div>

      <ServiceExplain description={serviceDetail?.fields?.description} image={serviceDetail?.fields?.image?.fields?.file.url} />
      <div className="content-wrapper-service">
        <ServiceBussiness />
      </div>
      <ServiceBrand />
      <ServiceEnd />
    </>
  );
}

export default ServiceDetailPage;
