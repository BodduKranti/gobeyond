import React, { useState } from 'react'

const odfaiData = [
    {
        title: 'Banking',
        content1: 'The transactions done with a bank and the services it offers to its customers is collectively known as banking.Banking can be done online, offline, or both ways.A bank is a financial institution licensed to receive deposits and offer loans.Banks also provide financial services, such as safe deposit boxes, currency exchange, and wealth management.',
        content2: 'The transactions done with a bank and the services it offers to its customers is collectively known as banking.Banking can be done online, offline, or both ways.A bank is a financial institution licensed to receive deposits and offer loans.Banks also provide financial services, such as safe deposit boxes, currency exchange, and wealth management.',
        btn: 'Learn More',
        link: '',
        image: './images/demo-img.jpg',
        txtL: 'text-start'
    },
    {
        title: 'Health Care',
        content1: 'The transactions done with a bank and the services it offers to its customers is collectively known as banking.Banking can be done online, offline, or both ways.A bank is a financial institution licensed to receive deposits and offer loans.Banks also provide financial services, such as safe deposit boxes, currency exchange, and wealth management.',
        content2: '',
        btn: 'Learn More',
        link: '',
        image: './images/demo-img.jpg',
        txtL: 'text-start'
    },
    {
        title: 'Insurance',
        content1: 'The transactions done with a bank and the services it offers to its customers is collectively known as banking.Banking can be done online, offline, or both ways.A bank is a financial institution licensed to receive deposits and offer loans.Banks also provide financial services, such as safe deposit boxes, currency exchange, and wealth management.',
        content2: 'The transactions done with a bank and the services it offers to its customers is collectively known as banking.Banking can be done online, offline, or both ways.A bank is a financial institution licensed to receive deposits and offer loans.Banks also provide financial services, such as safe deposit boxes, currency exchange, and wealth management.',
        btn: 'Learn More',
        link: '',
        image: './images/demo-img.jpg',
        txtL: 'text-end'
    },
    {
        title: 'Pharma',
        content1: '',
        content2: 'The transactions done with a bank and the services it offers to its customers is collectively known as banking.Banking can be done online, offline, or both ways.A bank is a financial institution licensed to receive deposits and offer loans.Banks also provide financial services, such as safe deposit boxes, currency exchange, and wealth management.',
        btn: 'Learn More',
        link: '',
        image: './images/demo-img.jpg',
        txtL: 'text-end'
    }
]
const Odfai = () => {
    const [active, setActive] = useState({
        title: 'Banking',
        current: true
    });

    return (
        <>
            <div className='col-12 mainSection dotsBg py-5'>
                <div className='col-12 py-5 bgPart my-3'>
                    <div className='container'>
                        <h2 className='text-gray fs-2 text-center'>Our Diverse Footprints Across Industries</h2>
                    </div>
                    <div className='container'>
                        <div className='odfai-section py-5 mb-5'>
                            <div className='row g-0'>
                                <div className="col-4">
                                    <div className='col-12'>
                                        <div className='cardsection cursor-pointer'
                                            onMouseOver={() => setActive({ title: odfaiData[0].title, current: true })}
                                        // onMouseOut={() => setActive({ title: odfaiData[0].title, current: false })}
                                        >
                                            <figure className='m-0'>
                                                <img src={odfaiData[0].image} className='img-fluid' alt='' />
                                            </figure>
                                            <h2 className={`${odfaiData[0].txtL}`}> {odfaiData[0].title}</h2>
                                        </div>

                                    </div>

                                    <div className='col-12'>
                                        <div className='cardsection cursor-pointer'
                                            onMouseOver={() => setActive({ title: odfaiData[1].title, current: true })}
                                        // onMouseOut={() => setActive({ title: odfaiData[1].title, current: false })}
                                        >
                                            <figure className='m-0'>
                                                <img src={odfaiData[1].image} className='img-fluid' alt='' />
                                            </figure>
                                            <h2 className={`${odfaiData[1].txtL}`}> {odfaiData[1].title}</h2>
                                        </div>

                                    </div>

                                </div>
                                <div className="col-4 card-bgActive d-flex">
                                    {odfaiData && odfaiData.map((itms) => (
                                        <>
                                            <div className={`${active.title === `${itms.title}` && active.current ? 'block' : 'none'} col-12 h-100 text-white p-3 text-center`}>
                                                <h3 className='mt-0'>{itms.title}</h3>
                                                <p className='text-start'>{itms.content1}</p>
                                                <p className='text-start'>{itms.content2}</p>
                                                <p className='text-end'>
                                                    <button className='btn btn-outline btn-outline-light px-3 fs-6'>{itms.btn}</button>
                                                </p>
                                            </div>
                                        </>
                                    ))}
                                </div>
                                <div className="col-4">
                                    <div className='col-12'>
                                        <div className='cardsection cursor-pointer'
                                            onMouseOver={() => setActive({ title: odfaiData[2].title, current: true })}
                                        // onMouseOut={() => setActive({ title: odfaiData[2].title, current: false })}
                                        >
                                            <figure className='m-0'>
                                                <img src={odfaiData[2].image} className='img-fluid' alt='' />
                                            </figure>
                                            <h2 className={`${odfaiData[2].txtL}`}> {odfaiData[2].title}</h2>
                                        </div>

                                    </div>
                                    <div className='col-12'>
                                        <div className='cardsection cursor-pointer'
                                            onMouseOver={() => setActive({ title: odfaiData[3].title, current: true })}
                                        // onMouseOut={() => setActive({ title: odfaiData[3].title, current: false })}
                                        >
                                            <figure className='m-0'>
                                                <img src={odfaiData[3].image} className='img-fluid' alt='' />
                                            </figure>
                                            <h2 className={`${odfaiData[3].txtL}`}> {odfaiData[3].title}</h2>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Odfai