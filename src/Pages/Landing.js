import React from 'react'
import Layout from '../Components/Layout/Layout'
// import Newbanner from '../Components/Newbanner'
import Herobanner from '../Components/Herobanner'
import Landingbanner from '../Components/LandinBanner/Landingbanner'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();
    const moveTohome = () => {
        navigate("/home")
    }

    return (
        <Layout>
            {/* <Newbanner /> */}
            {/* <Herobanner /> */}
            <Landingbanner />
            <div onClick={moveTohome}>Click Here</div>
        </Layout>
    )
}

export default Landing