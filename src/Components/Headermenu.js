import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Headermenu = ({ active }) => {
    const [inOut, setInOut] = useState({
        itmName: '',
        isActive: ''
    })

    return (
        <>
            <div className={`${inOut.isActive && active ? 'active' : ''} leftSiderbar`}>
                <div className={`${inOut.isActive && inOut.itmName === 'itm-1' ? 'block' : 'none'} text-white`}>
                    <div className='col-12 py-5 bg-orange h-100'>
                        {/* <div className="row mx-0">

                            <div className='col-6 bg-purple py-4'>col 1</div>
                            <div className='col-6 bg-green py-4'>col-2</div>
                        </div> */}
                        Item 1
                    </div>
                </div>
                <div className={`${inOut.isActive && inOut.itmName === 'itm-2' ? 'block' : 'none'} text-white`}>
                    Itms 2
                </div>
            </div>
            <div className={`${active ? "active" : ''} rightSiderbar px-3 py-2`}>
                <h3>Rightside Menu</h3>
                <div className='menu-Items mt-5 row'>
                    <div className="col-12 py-2"><NavLink
                        onMouseOver={() => setInOut({ itmName: 'itm-1', isActive: true })}
                        className={'py-2 text-darkBlue fw-bold text-decoration-none'}>Navigate your next</NavLink></div>
                    <div className="col-12 py-2"><NavLink
                        onMouseOver={() => setInOut({ itmName: 'itm-2', isActive: true })}
                        className={'py-2 text-darkBlue fw-bold text-decoration-none'}>Industries</NavLink></div>
                    <div className="col-12 py-2">
                        <NavLink
                            onMouseOver={() => setInOut({ itmName: '', isActive: false })}
                            onMouseOut={() => setInOut({ itmName: '', isActive: false })}
                            className={'py-2 text-darkBlue fw-bold text-decoration-none'}>Services</NavLink>
                    </div>
                    <div className="col-12 py-2">
                        <NavLink
                            onMouseOver={() => setInOut({ itmName: '', isActive: false })}
                            onMouseOut={() => setInOut({ itmName: '', isActive: false })}
                            className={'py-2 text-darkBlue fw-bold text-decoration-none'}>Platforms</NavLink>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Headermenu