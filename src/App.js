import React from 'react'

import './assests/Style/index.css'

// npm install react-scrollchor --save
// npm install react-slick --save
// npm install slick-carousel

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Header from './Components/Header'
import About from './Pages/About'



const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/landing' element={<Landing />} />
                    <Route path='/' element={<Header />}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App