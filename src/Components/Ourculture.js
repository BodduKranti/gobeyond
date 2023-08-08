import React from 'react'
import { BsDashLg } from 'react-icons/bs'
import Group from './Group'
const Ourculture = () => {
    return (
        <>
            <div className='col-12 bg-black py-5'>
                <div className='container text-white pb-5'>
                    <div className='row'>
                        <div className='col-md-6 d-flex itmes-center'>
                            <div>
                                <h2 className='fs-1 mb-1'>OUR CULTURE</h2>
                                <h3 className='fs-3'>RUNS DEEP</h3>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='col-12 leftsTrip'>

                                <h3 className='fs-3'>Fostering Creativity and Innovation</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Venenatis
                                    sit tellus vulputate massa diam eu. Enim mi in leo
                                    neque ac morbi ut sed eu. Quis vulputate
                                    elementum dictum et. Suscipit integer non sem
                                    aenean nunc. Leo eget amet .
                                </p>
                                <p>
                                    <span><BsDashLg /></span>
                                    <span className='ms-2'>Mahesh Nayani</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Group />
            </div>

        </>
    )
}

export default Ourculture