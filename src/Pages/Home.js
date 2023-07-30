import React from 'react'
import Layout from '../Components/Layout/Layout'
import Section from '../Components/Section'
import Homevideo from '../Components/Homevideo'
import OurClients from '../Components/OurClients'
import OurTeam from '../Components/OurTeam'
import Contact from '../Components/Contact'

const Home = () => {
    return (
        <Layout
            title={"- Home"}
        >
            <Homevideo />

            <Section />



            <OurClients />

            <OurTeam />

            <Contact />

        </Layout>
    )
}

export default Home