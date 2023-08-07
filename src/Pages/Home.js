import React, { useState } from 'react'
import Layout from '../Components/Layout/Layout'
import Section from '../Components/Section'
import Homevideo from '../Components/Homevideo'
// import OurClients from '../Components/OurClients'
// import OurTeam from '../Components/OurTeam'
import Contact from '../Components/Contact'
import Homelinks from '../Components/Homelinks'
import Ourproducts from '../Components/Ourproducts'
import Odfai from '../Components/Odfai'
import OurTeam from '../Components/OurTeam'
import Group from '../Components/Group'
const Home = () => {
    const [pageName, setPageName] = useState('homeVideo');
    const [active, setActive] = useState({
        page: 'homeVideo',
        bgColor: ''
    });
    console.log(active)
    return (
        <Layout
            title={"- Home"}
        >
            <Homelinks
                setPageName={setPageName}
                setActive={setActive}
                active={active}
            />


            <div className={`${active.bgColor} homesection`}>
                <Homevideo
                    pageName={pageName}
                />
                <Section
                    pageName={pageName}
                />
                {/* <OurClients />

                 */}
                <Contact />
            </div>

            <Ourproducts />

            <Odfai />

            <OurTeam />

            <Group />
        </Layout>
    )
}

export default Home