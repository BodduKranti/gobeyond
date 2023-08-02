import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import Scrollspy from 'react-scrollspy'
const verticalLinkst = [
    { href: 'homeVideo', title: "To Link" },
    { href: 'web-developement', title: "Web Developement" },
    { href: 'mobile-app-developement', title: "Mobile App Developement" },
    { href: 'gamification', title: "Gamification" },
    { href: 'aws-azure', title: "AWS AZURE" },
    { href: 'devops', title: "devops" },
    { href: 'cloud-services', title: "Cloud Services" }
]
const Homelinks = ({ setPageName }) => {
    const [active, setActive] = useState('homeVideo');
    return (
        <>
            <div className='vertical-Links'>

                {verticalLinkst.map((links, i) => {
                    return (
                        <>
                            <li
                                className={`${active === `${links.href}` ? 'current' : 'text-decoration-none'}  
                                list-unstyled`}
                                onClick={() => setPageName(links.href)}
                            >
                                <AnchorLink
                                    key={i}
                                    onClick={() => setActive(links.href)}
                                    href={`#${links.href}`}>
                                    <span>{links.title}</span>
                                </AnchorLink>
                            </li>


                        </>
                    )
                })}
                {/* <Scrollspy
                    items={[
                        'homeVideo',
                        'web-developement',
                        'mobile-app-developement',
                        'gamification',
                        'aws-azure',
                        'devops',
                        'cloud-services'
                    ]}
                    currentClassName="current"
                    className='ms-0 ps-0 list-unstyled'
                >
                    <li>
                        <a
                            href="#homeVideo">
                            <span>To Top</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#web-developement">
                            <span>Web Developement</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#mobile-app-developement">
                            <span>Mobile App Developement</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#gamification">
                            <span>Gamification</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#aws-azure">
                            <span>AWS AZUR</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#devops">
                            <span>devops</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#cloud-services">
                            <span>Cloud Services</span>
                        </a>
                    </li>
                </Scrollspy> */}
            </div>

        </>
    )
}

export default Homelinks