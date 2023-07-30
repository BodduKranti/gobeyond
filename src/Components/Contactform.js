import React from 'react'

const Contactform = () => {
    return (
        <>
            <div className='col-12'>
                <h5>Get a Call Back</h5>
                <form>
                    <div className='form-group mb-3'>
                        <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div className='form-group mb-3'>
                        <input type='email' className='form-control' placeholder='Email Address' />
                    </div>
                    <div className='form-group mb-3'>
                        <input type='text' className='form-control' placeholder='Subject' />
                    </div>
                    <div className='form-group mb-3'>
                        <textarea rows="6" className='form-control resize-none' placeholder='Your message'></textarea>
                    </div>
                    <div className='form-group mb-3'>
                        <button className='btn btn-black'>Send message</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contactform