import React from 'react'
import Layout from '../Components/Layout/Layout'
import Landingbanner from '../Components/LandinBanner/Landingbanner'
// import Newbanner from '../Components/Newbanner'
// import Herobanner from '../Components/Herobanner'

const Landing = () => {
    return (
        <Layout>
            {/* <Newbanner /> */}
            {/* <Herobanner /> */}
            <Landingbanner />
        </Layout>
    )
}

export default Landing