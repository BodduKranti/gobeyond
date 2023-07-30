import React from 'react'
import { GoDotFill } from 'react-icons/go'
const Herobanner = () => {
    // const [active, setActive] = useState({
    //     active: '',
    //     itmVal: ''
    // })

    // console.log(active.itmVal)

    return (
        <>
            {/* <div

                onMouseOver={() => setActive({ active: true, itmVal: 'bottom-big-block' })}
                onMouseOut={() => setActive({ active: false, itmVal: 'bottom-big-block' })}


                className={`${active.itmVal === 'bottom-big-block' && active.active ? 'active' : 'hero-red-fill hero-white-fill first-block'} grid-1-4`}


                id="bottom-big-block" points="855,342 1365.5,342 1365.5,852.5" stroke="#EA262A">
                bottom-big-block

            </div> */}

            {/* <div className="grid-1-5 mid-block" points="855,0.5 1024,0.5 1024,169.5" stroke="#EA262A"></div>

            <div className={`${active.itmVal === 'mid-second-block' && active.active ? 'active' : 'hero-red-fill hero-white-fill first-block'} grid-1-3`}
                onMouseOver={() => setActive({ active: true, itmVal: 'mid-second-block' })}
                onMouseOut={() => setActive({ active: false, itmVal: 'mid-second-block' })}
                id="mid-second-block" points="855,171.2 1024,171.2 1024,340.3" stroke="#EA262A">
                mid-second-block
            </div> */}

            <section className="home-hero-section">


                <svg className=" grid-1-animation" fill="none" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1366 855"
                    space="preserve" xmlns="http://www.w3.org/2000/svg">
                    {/* points direction "left,top width, top bottom, height" */}

                    {/* shape-1 */}
                    <polygon className="grid-1-1 big-section" points="0,0.5 780,0.5 780,855"
                        stroke="#ff8a00" fill='' >

                    </polygon>
                    {/* shape-2 */}

                    <use xlinkHref='#midsectionFirst' fill="url(#star)" />
                    <use xlinkHref='#midsectionSec' fill="url(#star)" />
                    <use xlinkHref='#leftsectionThird' fill="url(#star2)" />
                    <use xlinkHref='#leftsectionfourth' fill="url(#star3)" />

                    <polygon id="midsectionFirst" className="grid-1-1 mid-section postion-relative" points="781,0.5 980,0.5 980,200"
                        stroke="#ff8a00">
                    </polygon>


                    {/* shape-3 */}
                    <polygon id="midsectionSec" className="grid-1-1 mid-section postion-relative mt-4" points="781,200 980,200 980,400"
                        stroke="#ff8a00" fill='' >
                    </polygon>

                    {/* shape-4 */}
                    <polygon id="leftsectionThird" className="grid-1-1 big-section mt-4" points="981,0.5 1366,0.5 1366,400"
                        stroke="#ff8a00" fill='' >
                    </polygon>

                    {/* shape-5 */}
                    <polygon id="leftsectionfourth" className="grid-1-1 big-section mt-4" points="781,400 1366,400 1366,855"
                        stroke="#ff8a00" fill='' >
                    </polygon>

                    {/* <polygon className="grid-1-1 big-section" id="big-section" points="855,0.5 1024,0.5 1024,169.5"
                        fill="#EA262A" >
                    </polygon> */}
                    <defs>
                        <pattern id="star" viewBox="-265,-44,14,749" width="100%" height="100%">
                            <svg width="50" height="101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="40.4675" cy="92.3615" rx="8.86453" ry="7.98518" transform="rotate(180 40.4675 92.3615)" fill="#FF7A00" />
                                <ellipse cx="40.4675" cy="36.2199" rx="8.86453" ry="7.98519" transform="rotate(180 40.4675 36.2199)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="92.3615" rx="8.86453" ry="7.98518" transform="rotate(180 9.07297 92.3615)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="36.2199" rx="8.86453" ry="7.98519" transform="rotate(180 9.07297 36.2199)" fill="#FF7A00" />
                                <ellipse cx="40.4675" cy="64.2902" rx="8.86453" ry="7.98518" transform="rotate(180 40.4675 64.2902)" fill="#FF7A00" />
                                <ellipse cx="40.4675" cy="8.1486" rx="8.86453" ry="7.98519" transform="rotate(180 40.4675 8.1486)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="64.2902" rx="8.86453" ry="7.98518" transform="rotate(180 9.07297 64.2902)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="8.1486" rx="8.86453" ry="7.98519" transform="rotate(180 9.07297 8.1486)" fill="#FF7A00" />
                            </svg>
                        </pattern>
                    </defs>

                    <defs>
                        <pattern id="star2" viewBox="-583,-40,14,1394" width="100%" height="100%">
                            <svg width="50" height="101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="40.4675" cy="92.3615" rx="8.86453" ry="7.98518" transform="rotate(180 40.4675 92.3615)" fill="#FF7A00" />
                                <ellipse cx="40.4675" cy="36.2199" rx="8.86453" ry="7.98519" transform="rotate(180 40.4675 36.2199)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="92.3615" rx="8.86453" ry="7.98518" transform="rotate(180 9.07297 92.3615)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="36.2199" rx="8.86453" ry="7.98519" transform="rotate(180 9.07297 36.2199)" fill="#FF7A00" />
                                <ellipse cx="40.4675" cy="64.2902" rx="8.86453" ry="7.98518" transform="rotate(180 40.4675 64.2902)" fill="#FF7A00" />
                                <ellipse cx="40.4675" cy="8.1486" rx="8.86453" ry="7.98519" transform="rotate(180 40.4675 8.1486)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="64.2902" rx="8.86453" ry="7.98518" transform="rotate(180 9.07297 64.2902)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="8.1486" rx="8.86453" ry="7.98519" transform="rotate(180 9.07297 8.1486)" fill="#FF7A00" />
                            </svg>
                        </pattern>
                    </defs>

                    <defs>
                        <pattern id="star3" viewBox="-781,-40,89,1297" width="100%" height="100%">
                            <svg width="50" height="101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="40.4675" cy="92.3615" rx="8.86453" ry="7.98518" transform="rotate(180 40.4675 92.3615)" fill="#FF7A00" />
                                <ellipse cx="40.4675" cy="36.2199" rx="8.86453" ry="7.98519" transform="rotate(180 40.4675 36.2199)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="92.3615" rx="8.86453" ry="7.98518" transform="rotate(180 9.07297 92.3615)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="36.2199" rx="8.86453" ry="7.98519" transform="rotate(180 9.07297 36.2199)" fill="#FF7A00" />
                                <ellipse cx="40.4675" cy="64.2902" rx="8.86453" ry="7.98518" transform="rotate(180 40.4675 64.2902)" fill="#FF7A00" />
                                <ellipse cx="40.4675" cy="8.1486" rx="8.86453" ry="7.98519" transform="rotate(180 40.4675 8.1486)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="64.2902" rx="8.86453" ry="7.98518" transform="rotate(180 9.07297 64.2902)" fill="#FF7A00" />
                                <ellipse cx="9.07297" cy="8.1486" rx="8.86453" ry="7.98519" transform="rotate(180 9.07297 8.1486)" fill="#FF7A00" />
                            </svg>
                        </pattern>
                    </defs>
                </svg>
                <div className='container'>
                    <div className='d-flex'>
                        <h1 className='h-text'>SmartGig</h1>
                    </div>

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

            </section>
        </>
    )
}

export default Herobanner