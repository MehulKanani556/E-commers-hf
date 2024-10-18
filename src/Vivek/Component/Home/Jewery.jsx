import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './home.css';

const Jewery = () => {
    return (
        <>
            <section className='pb-5 inter'>
                <div className='d_container'>
                    <Row className='VK_jewery_cont'>
                        <Col lg={6} className='h-100'>
                            <div className='h-100 VK_jewery_div'>
                                <img src={require('../../assets/girl.png')} className='w-100 h-100' alt="" />
                                <div className='VK_jewery_text_1 text-center'>
                                    <div>
                                        <p className='text-white'>
                                            BEST COLLECTION
                                        </p>
                                    </div>
                                    <button className='VK_white_btn'>
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='h-100'>
                            <div className='d-flex flex-column h-100'>
                                <div className='h-50 pb-2'>
                                    <img src={require('../../assets/aunty.png')} className='h-100 w-100' alt="" />
                                </div>
                                <div className='h-50 pt-2'>
                                    <img src={require('../../assets/perfume.png')} className='h-100 w-100' alt="" />
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
