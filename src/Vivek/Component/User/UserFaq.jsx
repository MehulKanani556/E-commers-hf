import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'

const UserFaq = () => {

    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <React.Fragment>
            <section className='VK_user_profile mb-4'>
                <h2 className='VK_profile_heading mb-4'>
                    FAQs
                </h2>
                <div className='VK_faq_div'>
                    <div className='VK_FAQ_accoridans'>
                        <Accordion activeKey={activeKey} className='VK_faq_accordians'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header onClick={() => handleToggle('0')}>
                                    <p className='m-0 VK_faq_acco_txt'>
                                        Can I reactivate my inactive account?
                                    </p>
                                    <img
                                        src={activeKey === '0' ? require('../../assets/minus.png') : require('../../assets/plus.png')}
                                        alt="accordion-icon"
                                        style={{ marginRight: '10px' }}
                                        className='ps-2'
                                    />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='m-0 VK_faq_acco_desc'>
                                        Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header onClick={() => handleToggle('1')}>
                                    <p className='m-0 VK_faq_acco_txt'>
                                        Can I use any Debit Card to pay for my order?
                                    </p>
                                    <img
                                        src={activeKey === '1' ? require('../../assets/minus.png') : require('../../assets/plus.png')}
                                        alt="accordion-icon"
                                        style={{ marginRight: '10px' }}
                                        className='ps-2'
                                    />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='m-0 VK_faq_acco_desc'>
                                        Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header onClick={() => handleToggle('2')}>
                                    <p className='m-0 VK_faq_acco_txt'>
                                        How can I pay with a saved Credit/Debit Card?
                                    </p>
                                    <img
                                        src={activeKey === '2' ? require('../../assets/minus.png') : require('../../assets/plus.png')}
                                        alt="accordion-icon"
                                        style={{ marginRight: '10px' }}
                                        className='ps-2'
                                    />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='m-0 VK_faq_acco_desc'>
                                        Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header onClick={() => handleToggle('3')}>
                                    <p className='m-0 VK_faq_acco_txt'>
                                        What are the modes of refund available after cancellation?
                                    </p>
                                    <img
                                        src={activeKey === '3' ? require('../../assets/minus.png') : require('../../assets/plus.png')}
                                        alt="accordion-icon"
                                        style={{ marginRight: '10px' }}
                                        className='ps-2'
                                    />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='m-0 VK_faq_acco_desc'>
                                        Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header onClick={() => handleToggle('4')}>
                                    <p className='m-0 VK_faq_acco_txt'>
                                        How quickly can I get my order delivered?
                                    </p>
                                    <img
                                        src={activeKey === '4' ? require('../../assets/minus.png') : require('../../assets/plus.png')}
                                        alt="accordion-icon"
                                        style={{ marginRight: '10px' }}
                                        className='ps-2'
                                    />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='m-0 VK_faq_acco_desc'>
                                        Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header onClick={() => handleToggle('5')}>
                                    <p className='m-0 VK_faq_acco_txt'>
                                        Why can't I track my order even though it has been shipped?
                                    </p>
                                    <img
                                        src={activeKey === '5' ? require('../../assets/minus.png') : require('../../assets/plus.png')}
                                        alt="accordion-icon"
                                        style={{ marginRight: '10px' }}
                                        className='ps-2'
                                    />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className='m-0 VK_faq_acco_desc'>
                                        Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default UserFaq
