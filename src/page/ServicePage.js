import React, { useEffect, useState } from "react";
import LandingService from "../components/Service/LandingService";
import ServiceIndex from "../components/Service/ServiceIndex";
import useContentful from ".././useContentful";
function ServicePage(props) {

  const { getServiceIndex } = useContentful();

  const [serviceIndex, setServiceIndex] = useState([]);



  useEffect(() => {
    document.title = props.metaService;
    getServiceIndex().then(setServiceIndex);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="content-wrapper">
        <LandingService />
      </div>

      {serviceIndex?.items?.map((item, index) => {
        return (
          <div>
            <div
              className={`${index % 2 === 0 ? "" : "content-wrapper-serviceIndex"
                }`}
            >
              <ServiceIndex key={index} index={index} item={item} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ServicePage;
