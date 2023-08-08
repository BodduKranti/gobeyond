import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRightCircleFill } from 'react-icons/bs'
const BTT = () => {
    return (
        <>
            <div className='col-12 btt-section py-5 vh-100'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12'>
                            <div className='col-12'>
                                <div className='col-12 leftsTrip'>

                                    <h3 className='fs-3'>Building Tomorrow Together</h3>
                                    <p>
                                        If you are a creative thinker, a problem solver, and an individual ready to
                                        make a positive impact, we invite you to be a part of our team. Together,
                                        we'll match your ingenuity with the latest technology to shape a future that
                                        inspires.
                                    </p>
                                    <p>
                                        Discover the possibilities of your career with us. Explore our current
                                        openings and join us on this exciting journey of growth, innovation, and
                                        success.
                                    </p>
                                </div>

                                <Link to={"/"} className='bg-white rightarrow'>
                                    <BsArrowRightCircleFill />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BTT