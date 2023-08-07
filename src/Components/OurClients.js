import React from 'react'
import Slider from "react-slick";
const OurClients = () => {
    const brand = [
        { img: '/images/brand/brand-1.png', boxclr: '#5b1cb0' },
        { img: '/images/brand/brand-2.png', boxclr: '#d59b41' },
        { img: '/images/brand/brand-3.png', boxclr: '#40916c' },
        { img: '/images/brand/brand-4.png', boxclr: '#2ec4b6' },
        { img: '/images/brand/brand-5.png', boxclr: '#1f376c' },
        { img: '/images/brand/brand-6.png', boxclr: '#5b1cb0' }
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
                    <h2 className='text-grayTextcolor fs-2'>Our Clients</h2>
                </div>
                <div className="container">
                    <Slider {...settings}>
                        {brand.map((itms) => {
                            return (
                                <>
                                    <div>
                                        <div className='col-12 p-3'>
                                            <div className='col-12' style={{
                                                height: '120px',
                                                boxShadow: '0 0 10px rgba(0,0,0,.3)',
                                                backgroundColor: `${itms.boxclr}`
                                            }}></div>
                                        </div>
                                        <div className='col-12 p-3 '>
                                            <div className='col-12 d-flex itmes-center justify-center' style={{
                                                height: '120px',
                                                boxShadow: '0 0 10px rgba(0,0,0,.3)'
                                            }}>
                                                <img src={itms.img} alt={itms.img} className='img-fluid' />

                                            </div>
                                        </div>

                                    </div>
                                </>
                            )
                        })}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default OurClients