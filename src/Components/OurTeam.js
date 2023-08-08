import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const OurTeam = () => {
    return (
        <>
            <div className="col-12 py-5 bgPart">
                <div className="container pb-5">
                    <div className='row'>
                        <div className="col-md-6">
                            <div className='teampolygon'>
                                {/* user1 */}
                                <div className='user1 tooltip'>
                                    <img src='./images/user1.png' alt='' />
                                    <div className='tooltip-hover bluecolor'>
                                        <div className='row'>
                                            <div className='col-9'>
                                                <h3>Rama</h3>
                                                <small >VP & Delivery Head</small>
                                            </div>
                                            <div className='col-3 d-flex itmes-center'>
                                                <IoIosArrowDroprightCircle />
                                            </div>
                                        </div>

                                    </div>
                                </div>



                                {/* user2 */}
                                <div className='user2 tooltip'>
                                    <img src='./images/user-2.png' alt='' />
                                    <div className='tooltip-hover orangcolor'>
                                        <div className='row'>
                                            <div className='col-9'>
                                                <h3>Rama</h3>
                                                <small >VP & Delivery Head</small>
                                            </div>
                                            <div className='col-3 d-flex itmes-center'>
                                                <IoIosArrowDroprightCircle />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* user3 */}
                                <div className='user3 tooltip'>
                                    <img src='./images/user-2.png' alt='' />
                                    <div className='tooltip-hover yellow'>
                                        <div className='row'>
                                            <div className='col-9'>
                                                <h3>Rama</h3>
                                                <small >VP & Delivery Head</small>
                                            </div>
                                            <div className='col-3 d-flex itmes-center'>
                                                <IoIosArrowDroprightCircle />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* user1 */}
                                <div className='user4 tooltip'>
                                    <img src='./images/user-3.png' alt='' />
                                    <div className='tooltip-hover bluecolor'>
                                        <div className='row'>
                                            <div className='col-9'>
                                                <h3>Rama</h3>
                                                <small >VP & Delivery Head</small>
                                            </div>
                                            <div className='col-3 d-flex itmes-center'>
                                                <IoIosArrowDroprightCircle />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex itmes-center">
                            <div className='col-12'>
                                <h2 className='text-grayTextcolor fs-2 headingeffect '>
                                    <span className='smallText'>Our Clients</span>
                                    <p className='col-12 mb-0 text-center'>Take a Look at our clients</p>
                                </h2>
                                <h2 className='text-darkgreen  fs-2'>We are an agency engaged in digital business.
                                </h2>
                                <p className='text-light '>​ The team is in a very good environment. you can see their profile in detail. they are professional people i their fields, they are not in doubt.</p>
                                <Link to={"/"} className='text-darkgreen  fs-5 fw-bold text-decoration-none'>Have a Question? <BsArrowRight /></Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurTeam