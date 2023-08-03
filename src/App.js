import React from 'react'

import './assests/Style/index.css'

// npm install react-scrollchor --save [react native]
// npm i react-anchor-link-smooth-scroll
// npm install react-slick --save
// npm install slick-carousel
// npm i react-scrollspy
// npm i react-scroll-parallax


import './assests/Style/style.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Header from './Components/Header'
import About from './Pages/About'
import Test from './Pages/Test';



const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Landing />} />
                    <Route path='/' element={<Header />}>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/test' element={<Test />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App