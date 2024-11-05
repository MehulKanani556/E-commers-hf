import React from 'react';
import { Row, Col, Button, } from 'react-bootstrap';
import './homesslider.css'
import OwlCarousel from 'react-owl-carousel';
// import { GoArrowUpRight } from 'react-icons/go';
// import { FiPlus } from 'react-icons/fi';

function Homeslider() {

    return (
        <>

            <section className=''>
                <OwlCarousel className='owl-theme' loop items={1}>
                    <div className='item V_slider_height'>
                        <div className='V_spring'>
                            <div className="">
                                <p className='V_50 mb-0'>50 % OFF SITEWIDE</p>
                            </div>
                            <div className='d_container h-100'>
                                <Row className='h-100'>
                                    <Col lg={4} className='align-self-center p-3'>
                                        <div className='V_rite_of '>
                                            <h1 className='V_rite'> <p className='d-flex justify-content-start'>RITE</p>
                                                <p className='d-flex justify-content-center'>OF</p>
                                                <p className='d-flex justify-content-end'>SPRING</p>
                                            </h1>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="V_bottom d-flex justify-content-between">
                                <p className='V_tank_top'>Tank Top - White</p>
                                <p className='V_shop_arri'>SHOP NEW ARRIVALS</p>
                            </div>
                        </div>
                    </div>
                    <div className='item V_slider_height'>
                        <div className='V_vintage_back'>
                            <div className='d_container h-100'>
                                <div className='row m-0 d-flex h-100'>
                                    <div className="col-12">

                                        <h1 className='V_vintage_text'>VINTAGE</h1>
                                        <p className='V_vintage_sub_text'>At vero eos et accusamus et iusto odio dignis ducimus qui blanditiis praesentium</p>
                                    </div>

                                    <div className=''>
                                        <Button className='py-2 px-5 text-white V_vintage_btn'>Buy Now</Button>
                                    </div>
                                    <div>
                                        <img src={require('../../../Parth/assets/Main Girl.png')} alt="" className='V_main_girl' />
                                    </div>
                                    <p className='V_featured'>FEATURED <br />
                                        COLLECTION</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item V_slider_height'>
                        <div className=''>
                            <div className='d_container h-100'>
                                <Row className=' d-flex h-100'>
                                    {/* <Col lg={6} className='align-self-center p-3'>
                                        <div className='V_slid3 pe-xxl-5'>
                                            <h1 className='V_more_than'>More than
                                                just a game.
                                                It’s a lifestyle.</h1>
                                            <p className='V_slide_3_text'>Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.</p>
                                        </div>
                                        <div className='pt-3'>
                                            <Button className='py-2 px-5 text-dark V_golf'>Buy Now</Button>
                                        </div>
                                    </Col> */}
                                </Row>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section >

        </>
    )
}

export default Homeslider