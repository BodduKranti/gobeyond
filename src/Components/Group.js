import React from 'react'
const groupData = [
    {
        title: 'Heading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        bgclr: 'bg-sea',
        img: './images/group/img-1.jpg'
    },
    {
        title: 'Heading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        bgclr: 'card-bgActive',
        img: './images/group/img-2.jpg'
    },
    {
        title: 'Heading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        bgclr: 'bg-lightblue',
        img: './images/group/img-3.jpg'
    },
    {
        title: 'Heading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        bgclr: 'bg-cardblue',
        img: './images/group/img-4.jpg'
    },
    {
        title: 'Heading',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        bgclr: 'bg-cardorange',
        img: './images/group/img-5.jpg'
    }
]

const Group = () => {
    return (
        <>
            <div className='row g-0 group'>
                {groupData && groupData.map((data) => (
                    <>
                        <div className="col">
                            <figure className='m-0'>
                                <img src={data.img} className='img-fluid w-100 h-100' style={{ objectFit: 'cover' }} alt="" />
                            </figure>
                            <div className={`${data.bgclr} card p-2`}>
                                <div className='section-card'>
                                    <div className="card-title text-white">{data.title}</div>
                                    <div className="card-content text-white">{data.content}</div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}

            </div>
        </>
    )
}

export default Group