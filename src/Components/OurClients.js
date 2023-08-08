import React from 'react'
import Slider from "react-slick";
const OurClients = () => {
    const brand = [
        { img: '/images/brand/brand-1.png', boxclr: '#5b1cb0' },
        { img: '/images/brand/brand-2.png', boxclr: '#d59b41' },
        { img: '/images/brand/brand-3.png', boxclr: '#40916c' },
        { img: '/images/brand/brand-4.png', boxclr: '#2ec4b6' },
        { img: '/images/brand/brand-5.png', boxclr: '#1f376c' },
        // { img: '/images/brand/brand-6.png', boxclr: '#5b1cb0' }
    ]

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='col-12 pt-5 vh-100' id='our-clients'>
                <div className='container text-center'>
                    <h2 className='text-grayTextcolor fs-2 headingeffect text-center'>
                        <span>Our Clients</span>
                        <p className='col-12 mb-0'>Take a Look at our clients</p>
                        <small className='text-orange col-12 fs-6'>We did a great job with these companies. You can be next to work with!</small>
                    </h2>
                </div>
                <div className="container">
                    <Slider {...settings}>
                        {brand.map((itms) => {
                            return (
                                <>
                                    <div>
                                        <div className='col-12 py-3 px-2'>
                                            <div className='col-12 box-color' style={{
                                                height: '120px',
                                                backgroundColor: `${itms.boxclr}`
                                            }}></div>
                                        </div>
                                        <div className='col-12 py-3 px-2'>
                                            <div className='col-12 d-flex itmes-center box-logo justify-center' style={{
                                                height: '120px',
                                            }}>
                                                <img src={itms.img} alt={itms.img} className='img-fluid' />

                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })}
                    </Slider>

                    <div className='col-12 text-center mt-3'>
                        <button className='btn btn-primary py-1 px-4 fs-4'>Try us out</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurClients