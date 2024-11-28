import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './home.css';

const Jewery = () => {
    return (
        <>
            <section className='pb-5 inter'>
                <div className='d_container p-0'>
                    <Row className='m-0 VK_jewery_cont'>
                        <Col lg={6} className='h-100 p-0 px-sm-2'>
                            <div className='h-100 VK_jewery_col VK_jewery_div'>
                                <img src={require('../../assets/girl.png')} className='w-100 h-100' alt="" />
                                <div className='VK_jewery_text_1 text-center'>
                                    <div>
                                        <p className='text-white m-0'>
                                            BEST COLLECTION
                                        </p>
                                        <h3 className='VK_jewery_head'>
                                            JEWELRY
                                        </h3>
                                        <h2 className='VK_jewery_sale'>
                                            Sale
                                        </h2>
                                    </div>
                                    <button className='VK_white_btn'>
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='h-100 p-0 px-sm-2'>
                            <div className='d-flex flex-column h-100'>
                                <div className='h-50 pb-lg-2 py-3 py-lg-0 VK_jewery_col VK_jewery_div VK_jewery_per'>
                                    <img src={require('../../assets/aunty.png')} className='h-100 w-100 object_cover' alt="" />
                                    <div className='VK_aunty_text'>
                                        <div className='text-center'>
                                            <p className='text-white mb-2'>
                                                Printed Saree
                                            </p>
                                            <h5 className='text-white mb-3'>
                                                Buy 1 get 1 free
                                            </h5>
                                            <button className='VK_white_btn'>
                                                Shop Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-50 pt-lg-2 py-3 py-lg-0 VK_jewery_col VK_jewery_div'>
                                    <img src={require('../../assets/perfume.png')} className='h-100 w-100' alt="" />
                                    <div className='VK_aunty_text'>
                                        <div className='text-center ps-sm-5'>
                                            <p className='text-white mb-2'>
                                                Perfume Sale
                                            </p>
                                            <h5 className='text-white mb-3'>
                                                Up to 10% OFF
                                            </h5>
                                            <button className='VK_white_btn'>
                                                Shop Now
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

export default Jewery
