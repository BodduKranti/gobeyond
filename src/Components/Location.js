import React, { useState } from 'react'

const Location = () => {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tirupati',
            title: 'Address',
            address: 'Tirupati, 306, Brigade IRV Centre, Whitefiedl, Nallurhalli, Bengaluru, Karnataka, 560066',
            image: '/images/location-img.jpg'
        },
        {
            id: 2,
            tabTitle: 'Bangalore',
            title: 'Address',
            address: '306, Brigade IRV Centre, Whitefiedl, Nallurhalli, Bengaluru, Karnataka, 560066',
            image: '/images/location-img.jpg'
        },
        {
            id: 3,
            tabTitle: 'Hyderabad',
            title: 'Address',
            address: 'Hyderabad, 306, Brigade IRV Centre, Whitefiedl, Nallurhalli, Bengaluru, Karnataka, 560066',
            image: '/images/location-img.jpg'
        },
        {
            id: 4,
            tabTitle: 'Singapore',
            title: 'Address',
            address: 'Singapore, 306, Brigade IRV Centre, Whitefiedl, Nallurhalli, Bengaluru, Karnataka, 560066',
            image: '/images/location-img.jpg'
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }
    return (
        <>
            <div className='mainTabs py-4'>
                {tabs.map((tab, i) =>
                    <button
                        key={i} id={tab.id} className={`${currentTab === `${tab.id}` ? 'tabActive' : ''} tabsBtns`}
                        onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className='content py-4'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` &&
                            <div className='row'>
                                <div className='col-md-6 col-sm-12'>
                                    <figure className='m-0'>
                                        <img src={tab.image} className='img-fluid' alt='' />
                                    </figure>
                                </div>
                                <div className='col-md-6 col-sm-12 d-flex itmes-center'>
                                    <div className='col-12'>
                                        <h4 className='title'>{tab.title}</h4>
                                        <p>{tab.address}</p>
                                    </div>
                                </div>


                            </div>}
                    </div>
                )}
            </div>
        </>
    )
}

export default Location