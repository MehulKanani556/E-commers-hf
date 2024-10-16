import React from 'react'
import './subscribe.css'
import { Col, Row } from 'react-bootstrap'

const Process = () => {
    return (
        <React.Fragment>
            <section className='py-5'>
                <div className='d_container inter'>
                    <Row className='justify-content-xl-evenly justify-content-between m-0'>
                        <Col lg={2} md={3} xs={6} className='my-3'>
                            <div className='text-center'>
                                <div>
                                    <img src={require('../../assets/curear.png')} alt="" />
                                </div>
                                <div className='mt-2'>
                                    <p className='mb-1 fw-600 text-black font_18'>
                                        10 Days
                                    </p>
                                    <p className='light_color fw-500'>
                                        Free return policy
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={3} xs={6} className='my-3'>
                            <div className='text-center'>
                                <div>
                                    <img src={require('../../assets/payment.png')} alt="" />
                                </div>
                                <div className='mt-2'>
                                    <p className='mb-1 fw-600 text-black font_18'>
                                        Payment
                                    </p>
                                    <p className='light_color fw-500'>
                                        Secure System
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={3} xs={6} className='my-3'>
                            <div className='text-center'>
                                <div>
                                    <img src={require('../../assets/review.png')} alt="" />
                                </div>
                                <div className='mt-2'>
                                    <p className='mb-1 fw-600 text-black font_18'>
                                        99% Customer
                                    </p>
                                    <p className='light_color fw-500'>
                                        Feedbacks
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={2} md={3} xs={6} className='my-3'>
                            <div className='text-center'>
                                <div>
                                    <img src={require('../../assets/247.png')} alt="" />
                                </div>
                                <div className='mt-2'>
                                    <p className='mb-1 fw-600 text-black font_18'>
                                        24/7*
                                    </p>
                                    <p className='light_color fw-500'>
                                        Online Supports
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Process
