import React from 'react'

const Homevideo = ({ pageName }) => {
    return (
        <>
            <div className={`${pageName === 'homeVideo' ? 'active' : ''} col-12 homeVideo`} id={'homeVideo'}>
                <video className="w-100" autoPlay loop muted>
                    <source
                        src="https://mdbootstrap.com/img/video/animation-intro.mp4"
                        type="video/mp4"
                        allowFullScreen
                    />
                </video>
                <div className="col-12 py-5 homerotate-text">
                    <div className='slidingVertical '>
                        <h2 className='text-firstColor'>Go
                            <span className='text-textColor'> Beyond</span>
                            <span className='text-dotcolor'>.</span>
                        </h2>
                        <h2 className='text-firstColor'>Imbibe
                            <span className='text-textColor'> Ideas</span>
                            <span className='text-dotcolor'>.</span>
                        </h2>
                        <h2 className='text-firstColor'>Refine
                            <span className='text-textColor'> Career</span>
                            <span className='text-dotcolor'>.</span>
                        </h2>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Homevideo