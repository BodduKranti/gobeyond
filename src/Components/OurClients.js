import React from 'react'
import Slider from "react-slick";
const OurClients = () => {
    const brand = [
        { img: '/images/brand/brand-1.png' },
        { img: '/images/brand/brand-2.png' },
        { img: '/images/brand/brand-3.png' },
        { img: '/images/brand/brand-4.png' },
        { img: '/images/brand/brand-5.png' },
        { img: '/images/brand/brand-6.png' }
    ]

    const settings = {
        dots: false,
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
            <div className='col-12 pt-5'>
                <div className='container text-center'>
                    <h2 className='text-grayTextcolor fs-2'>Our Clients</h2>
                </div>
            </div>
            <div className='col-12 pb-5'>
                <Slider {...settings}>
                    {brand.map((itms) => {
                        return (
                            <>
                                <div>
                                    <img src={itms.img} alt={itms.img} className='img-fluid' />
                                </div>
                            </>
                        )
                    })}
                </Slider>
            </div>


        </>
    )
}

export default OurClients