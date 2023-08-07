import React from 'react'
import Slider from "react-slick";

const Ourproducts = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
            <div className='col-12 py-5 ourproducts bgPart'>
                <div className="container">
                    <h2 className='text-grayTextcolor fs-2 text-darkgreen text-center'>Our Products</h2>

                    <div className='col-12 pb-5'>
                        <Slider {...settings}>
                            <div>
                                <div className='row'>
                                    <div className='col-md-4 col-12'>
                                        <figure className='p-0 mx-0'>
                                            <img src='./images/ourproduct/infonic.jpg' alt='' className='img-fluid' />
                                        </figure>
                                    </div>
                                    <div className='col-md-8 col-12'>
                                        <p className='mt-1 mb-2'>
                                            Infionic was born with an idea of a unified vision and collaborative approach to
                                            business operations. Traditional IT Products and Solution Providers operated in
                                            silos with no end-user innovation and stagnancy in the workflow. For a free flow of
                                            information and efficient operational structure, there was the need to break down silos.
                                        </p>
                                        <p className='mt-0 mb-3'>
                                            <small>
                                                Infionic was envisioned to develop modern IT Solutions aiming to equip organisations
                                                with the right information at right time to the right people to enable the right decisions.
                                                The vision was adapted to develop a series of small products that work within each silo
                                                while being closely connected to create a network of information that helps
                                                organisations make well-informed decisions.
                                            </small>
                                        </p>
                                        <p>
                                            Infionic focused to stack information in an organisation like ions in a crystal. Just like
                                            individual ions come together to form brilliant crystals, collaborated information can
                                            create equally magical events in an organisation.
                                        </p>
                                        <div className='col-12'>
                                            <button className='btn'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='row'>
                                    <div className='col-md-4 col-12'>
                                        <figure className='p-0 mx-0'>
                                            <img src='./images/ourproduct/infonic.jpg' alt='' className='img-fluid' />
                                        </figure>
                                    </div>
                                    <div className='col-md-8 col-12'>
                                        <p className='mt-1 mb-2'>
                                            Infionic was born with an idea of a unified vision and collaborative approach to
                                            business operations. Traditional IT Products and Solution Providers operated in
                                            silos with no end-user innovation and stagnancy in the workflow. For a free flow of
                                            information and efficient operational structure, there was the need to break down silos.
                                        </p>
                                        <p className='mt-0 mb-3'>
                                            <small>
                                                Infionic was envisioned to develop modern IT Solutions aiming to equip organisations
                                                with the right information at right time to the right people to enable the right decisions.
                                                The vision was adapted to develop a series of small products that work within each silo
                                                while being closely connected to create a network of information that helps
                                                organisations make well-informed decisions.
                                            </small>
                                        </p>
                                        <p>
                                            Infionic focused to stack information in an organisation like ions in a crystal. Just like
                                            individual ions come together to form brilliant crystals, collaborated information can
                                            create equally magical events in an organisation.
                                        </p>
                                        <div className='col-12'>
                                            <button className='btn'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='row'>
                                    <div className='col-md-4 col-12'>
                                        <figure className='p-0 mx-0'>
                                            <img src='./images/ourproduct/infonic.jpg' alt='' className='img-fluid' />
                                        </figure>
                                    </div>
                                    <div className='col-md-8 col-12'>
                                        <p className='mt-1 mb-2'>
                                            Infionic was born with an idea of a unified vision and collaborative approach to
                                            business operations. Traditional IT Products and Solution Providers operated in
                                            silos with no end-user innovation and stagnancy in the workflow. For a free flow of
                                            information and efficient operational structure, there was the need to break down silos.
                                        </p>
                                        <p className='mt-0 mb-3'>
                                            <small>
                                                Infionic was envisioned to develop modern IT Solutions aiming to equip organisations
                                                with the right information at right time to the right people to enable the right decisions.
                                                The vision was adapted to develop a series of small products that work within each silo
                                                while being closely connected to create a network of information that helps
                                                organisations make well-informed decisions.
                                            </small>
                                        </p>
                                        <p>
                                            Infionic focused to stack information in an organisation like ions in a crystal. Just like
                                            individual ions come together to form brilliant crystals, collaborated information can
                                            create equally magical events in an organisation.
                                        </p>
                                        <div className='col-12'>
                                            <button className='btn'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourproducts