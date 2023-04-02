import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
        host: process.env.REACT_APP_CONTENTFUL_HOST,
    });



    const getHome = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "homePage",
                select: "fields",
            });
            //   const sanitizedEntries = entries.items.map((item) => {
            //     const data = item.fields;
            //     return {
            //       data,
            //     };
            //   });
            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getServicesLanding = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "services",
                select: "fields",
            });

            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getServiceIndex = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "serviceIndex",
                select: "fields",
            });

            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getServiceDetail = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "serviceDetail",
                select: "fields",
            });

            return entries;
        } catch (err) {
            console.error(err);
        }
    };
    const getPricing = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "pricing",
                select: "fields",
            });

            return entries;
        } catch (err) {
            console.error(err);
        }
    };



    return { getHome, getServiceIndex, getServiceDetail, getServicesLanding, getPricing };
};

export default useContentful;
