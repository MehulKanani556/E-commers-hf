import React from 'react'
import './subscribe.css'
import { Col, Row } from 'react-bootstrap'

const Subscribe = () => {
    return (
        <React.Fragment>
            <section className='VK_subscribe_poster py-5'>
                <div className='d_container inter py-3 p-0'>
                    <Row className='m-0 justify-content-md-between justify-content-center'>
                        <Col xxl={5} md={6} className='mb-4'>
                            <h5 className='subscribe_hd'>
                                NEWSLETTER
                            </h5>
                            <h2 className='subscribe_heading'>
                                Subscribe And Get
                                <br className=''/>
                                10% Off On Your First Order
                            </h2>
                            <p className='font_18 VK_sub_txt m-0'>
                                Keep up with our latest news and Sales.
                            </p>
                        </Col>
                        <Col xxl={5} md={6} sm={8} className='align-self-center'>
                            <div className='d-flex'>
                                <input
                                    type='text'
                                    className='VK_sub_input w-100 ps-3'
                                    placeholder='Your Email Address'
                                />
                                <button className='VK_sub_btn'>
                                    Subscribe
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='VK_sub_10'>
                    <img src={require('../../assets/10% OFF.png')} className='w-100' alt="" />
                </div>
                <div className='VK_sub_net'>
                    <img src={require('../../assets/sub_net.png')} className='w-100 h-100' alt="" />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Subscribe
