import React from 'react'
import './home.css'
import { Col, Row } from 'react-bootstrap'

const Collection = () => {
    return (
        <>
            <section className='py-5'>
                <div className='d_container p-0 inter'>
                    <Row className='m-0'>
                        <Col lg={6} className='my-2'>
                            <div className='VK_watch_cont'>
                                <div className='h-100'>
                                    <img src={require('../../assets/watch.jfif')} className='w-100 h-100 object_cover object_bottom' alt="" />
                                    <div className='VK_watch_abs text-white'>
                                        <h5 className='VK_watch_h5'>
                                            NEW COLLECTION
                                        </h5>
                                        <h3 className='VK_watch_h3 text-uppercase'>
                                            Classic Watch
                                        </h3>
                                        <div>
                                            <button className='VK_white_btn'>
                                                Shop now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='my-2'>
                            <div className='VK_watch_cont'>
                                <div className='h-100'>
                                    <img src={require('../../assets/mobile.png')} className='w-100 h-100 object_cover object_bottom' alt="" />
                                    <div className='VK_watch_abs text-white'>
                                        <h5 className='VK_watch_h5'>
                                            Special Offers
                                        </h5>
                                        <h3 className='VK_watch_h3 text-uppercase'>
                                            On Mobile Phones
                                        </h3>
                                        <div>
                                            <button className='VK_white_btn'>
                                                Shop now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Collection
