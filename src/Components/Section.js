import React from 'react'
import { sectionContent } from '../Data/Homesection';
const Section = ({ pageName }) => {

    return (
        <>
            {sectionContent.map((itms, i) => {
                return (
                    <>
                        <div className={`${pageName === `${itms.id}` ? 'active' : ''} col-12`} id={itms.id}
                        >

                            <section
                                id={itms.id}
                                className={`${itms.bgColor} py-5 py-md-3 my-0 service h-100`}
                                key={i}
                            >
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-6  d-flex itmes-center'>

                                            <figure>
                                                <img src={itms.img} className='img-fluid' alt='' />
                                            </figure>


                                        </div>
                                        <div className='col-md-6 d-flex itmes-center '>

                                            <div className='main col-12'>
                                                <h2 className='text-white fs-2'>{itms.title}</h2>
                                                <p className='text-white'>{itms.content}</p>
                                                <button className={`${itms.txtColor} btn px-5 py-3`}>{itms.btnName}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Section