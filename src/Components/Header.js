import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Headermenu from './Headermenu'

const Header = () => {
    const [active, setActive] = useState(false)
    const buttonClick = () => {
        setActive(!active)
    }
    return (
        <>
            <header>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-3'>
                            <Link to={"/"}>
                                {/* <img src='/images/logo.png' className='img-fluid ' style={{ width: '45px' }} alt='logo' />
                                 */}
                                <svg width="99" height="125" viewBox="0 0 99 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 14072">
                                        <g id="Group 14071">
                                            <path id="Vector 93" d="M67.9968 46.6826H47.4453L78.9576 75.5147V102.974C48.2673 116.154 23.2401 107.55 14.5628 101.601L15.9329 82.3795L4.97212 75.5147L0.861816 109.839C38.1286 137.298 81.2411 121.28 98.139 109.839L91.2885 70.0229L67.9968 46.6826Z" fill="white" />
                                            <path id="Vector 94" d="M31.0047 78.3174H51.5562L20.0439 49.4853L20.0439 22.0262C50.7341 8.84582 75.7613 17.4497 84.4386 23.3992L83.0685 42.6205L94.0293 49.4853L98.1396 15.1614C60.8729 -12.2977 17.7604 3.72012 0.862457 15.1614L7.71296 54.9771L31.0047 78.3174Z" fill="white" />
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className='col-9 text-end hamburger-left'>
                            {/* <button >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button> */}
                            <div className={`${active ? 'active' : ''} hamburger-lines`} onClick={buttonClick}>
                                <span className="line line1"></span>
                                <span className="line line2"></span>
                                <span className="line line3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Headermenu
                active={active}
            />

            <Outlet />

        </>
    )
}

export default Header