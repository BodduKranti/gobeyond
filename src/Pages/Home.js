import React, { useState } from 'react'
import Layout from '../Components/Layout/Layout'
import Section from '../Components/Section'
import Homevideo from '../Components/Homevideo'
// import OurClients from '../Components/OurClients'
// import OurTeam from '../Components/OurTeam'
import Contact from '../Components/Contact'
import Homelinks from '../Components/Homelinks'
const Home = () => {
    const [pageName, setPageName] = useState('homeVideo');

    return (
        <Layout
            title={"- Home"}
        >
            <Homelinks
                setPageName={setPageName}
            />
            <div className='homesection'>
                <Homevideo
                    pageName={pageName}
                />
                <Section
                    pageName={pageName}
                />
                {/* <OurClients />

                <OurTeam /> */}
                <Contact />
            </div>

        </Layout>
    )
}

export default Home