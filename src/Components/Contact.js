import React from 'react'
import Contactform from './Contactform'
import Location from './Location'

const Contact = () => {
    return (
        <>
            <div className='container py-5'>
                <div className='row'>
                    <div className="col-md-7">
                        <h2 className='col-md-6 col-12'>Discover our services and in your chosen location</h2>
                        <Location />
                    </div>
                    <div className="col-md-5">
                        <h2 className='col-md-8 col-12'>Got a Project in mind?
                            Let's discuss</h2>
                        <Contactform />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact