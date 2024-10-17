import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Threeview = () => {
    return (
        <React.Fragment>
            <section className='px-md-3 VK_sec_padding inter'>
                <Row className='m-0'>
                    <Col lg={4} sm={6} className='my-3'>
                        <div className='VK_three_col'>
                            <img src={require('../../assets/V_best_deal_img_1.png')} className='w-100 h-100' alt="" />
                            <div className='VK_three_child'>
                                <h3 className='text-white'>
                                    Best Deal On Laptops
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='my-3'>
                        <div className='VK_three_col VK_margig'>
                            <img src={require('../../assets/V_best_deal_img_2.png')} className='w-100 h-100' alt="" />
                            <div className='VK_three_child'>
                                <h3 className='text-white'>
                                    mEGA sALE
                                </h3>
                                <p className='text-white fw-500'>
                                    On Home Appliances
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='my-3'>
                        <div className='VK_three_col'>
                            <img src={require('../../assets/V_best_deal_img_3.png')} className='w-100 h-100' alt="" />
                            <div className='VK_three_child'>
                                <p className='text-white'>
                                    Galaxy S24
                                </p>
                                <h3 className='text-white'>
                                    Best Samsung mobile phones
                                </h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    )
}

export default Threeview
