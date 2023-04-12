import React, { useEffect, useState } from 'react'
import AboutLanding from '../components/About/LandingPage'
import TechnologyUsed from '../components/About/TechnologyUsed'
import OurWorkCulture from '../components/About/WorkCulture'
import Project from '../components/Home/Project'
import useContentful from "../useContentful";
import ProjectRating from '../components/Home/ProjectRating'


function AboutPage(props) {
    const [about, setAbout] = useState([]);
    const { getAbout } = useContentful();
    const [cta, setCta] = useState([]);

    useEffect(() => {
        document.title = props.metaAbout
        getAbout().then((res) => {
            setAbout(res.items[0]?.fields)
            setCta(res.items[0]?.fields?.refAboutCta1)
        });
        // eslint-disable-next-line
    }, [])

    console.log("about page", about);

    return (
        <>
            <div className="content-wrapper">
                <AboutLanding image={about?.image} heading={about?.subHeading} />
            </div>
            <Project data={cta || []} />
            <ProjectRating rating={about?.projectRating?.data || []} />

            <TechnologyUsed tech={about?.refAboutTechnologyMaster || []} />

            <OurWorkCulture />
        </>


    )
}

export default AboutPage