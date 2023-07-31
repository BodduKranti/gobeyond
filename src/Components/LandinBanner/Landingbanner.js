import React from 'react'
import './Landing.css'
import { GoDotFill } from 'react-icons/go'

const Landingbanner = () => {
    return (
        <>
            <div className='col-12 main-section'>
                <div className='polygon-shape'>
                    <div id="left-polygon">
                        <div className="hover-polygoninside"></div>
                    </div>
                    <div className='mid-bottom-polygon'>
                        {/* upper-polygon */}
                        <div className='upper-polygon'>
                            {/* upper-left-polygon */}
                            <div className='upper-left-polygon'>

                                <div className='upper-polygon-left'>
                                    <div id='mid-polygon-shape1'>
                                        <div className="hover-polygoninside"></div>
                                        <div className='eightDots d-flex flew-wrap flex-col grid-1-animation'>
                                            <i className='circle-dots text-polygon grid-1-1'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                        </div>
                                    </div>
                                    <div id='mid-polygon-shape2'>
                                        <div className="hover-polygoninside">

                                        </div>
                                        <div className='eightDots d-flex flew-wrap flex-col grid-1-animation'>
                                            <i className='circle-dots text-polygon grid-1-1'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                            <i className='circle-dots text-polygon'><GoDotFill /></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* upper-right-polygon */}
                            <div className='upper-right-polygon'>
                                <div id='right-polygon-shape'>
                                    <div className="hover-polygoninside"></div>
                                    <div className='eightDots d-flex flew-wrap flex-col grid-1-animation'>
                                        <i className='circle-dots text-polygon grid-1-1'><GoDotFill /></i>
                                        <i className='circle-dots text-polygon'><GoDotFill /></i>
                                        <i className='circle-dots text-polygon'><GoDotFill /></i>
                                        <i className='circle-dots text-polygon'><GoDotFill /></i>
                                        <i className='circle-dots text-polygon'><GoDotFill /></i>
                                        <i className='circle-dots text-polygon'><GoDotFill /></i>
                                        <i className='circle-dots text-polygon'><GoDotFill /></i>
                                        <i className='circle-dots text-polygon'><GoDotFill /></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* bottom-polygon */}
                        <div className='bottom-polygon'>
                            <div id='bottom-polygonshape'>
                                <div className="hover-polygoninside"></div>
                                <div className='eightDots d-flex flew-wrap flex-col grid-1-animation'>
                                    <i className='circle-dots text-polygon grid-1-1'><GoDotFill /></i>
                                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <h2 className='fw-bold heading'>SmartGig</h2>
                <div className='eightDots d-flex flew-wrap flex-col grid-1-animation'>
                    <i className='circle-dots text-polygon grid-1-1'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                </div>
            </div>

        </>
    )
}

export default Landingbanner