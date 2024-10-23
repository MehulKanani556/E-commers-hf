import React from 'react';
import { Row, Col, Button, } from 'react-bootstrap';
import './Sports.css'
// import Minisider from '../../../darshan/components/Minisider';
import SportsSlider from './SportsSlider.jsx'
import SportsPost from './SportsPost.jsx'
import SportsCollection from './SportsCollection.jsx'
import GridSportsComponant from './GridSportsComponant.jsx';
import Header from '../../../Vivek/Component/header/Header.jsx'
import Subscribe from '../../../Vivek/Component/common/Subscribe.jsx';
import Footer from '../../../Vivek/Component/footer/Footer.jsx'
import Process from '../../../Vivek/Component/common/Process.jsx';
import OwlCarousel from 'react-owl-carousel';
// import { GoArrowUpRight } from 'react-icons/go';
// import { FiPlus } from 'react-icons/fi';

function Luggage() {






    return (
        <>

            <Header />
            <section className=''>
                <OwlCarousel className='owl-theme' loop items={1}>
                    <div className='item V_slider_height'>
                        <div className='V_sports'>
                            <div className='d_container h-100'>
                                <Row className='h-100'>
                                    <Col lg={6} className='align-self-center p-3'>
                                        <div className='V_future'>
                                            <h1 className='V_combine_text'> <span className='V_text_white'>Redefining Motion:</span> <span className='V_text_green'> The Future of Footwear is Here</span></h1>
                                            <p className='V_experience'>Experience unparalleled comfort and innovative design with our state-of-the-art, futuristic sports shoes. Built for champions, designed for you.</p>
                                        </div>
                                        <div className='pt-3'>
                                            <Button className='py-2 px-5 text-white'>Buy Now</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='item V_slider_height'>
                        <div className='V_slider2'>
                            <div className='d_container h-100'>
                                <Row className=' d-flex h-100'>
                                    <Col lg={6} className='align-self-center p-3'>
                                        <div className='V_slide2 '>
                                            <h1 className='V_fantastic'>Fantastic Features That Makes You Look Cool</h1>
                                            <p className='V_slide_2_text'>Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. Nullam pulvinar felis at metus.</p>
                                        </div>
                                        <div className='pt-3'>
                                            <Button className='py-2 px-5 text-white bg-dark'>Buy Now</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='item V_slider_height'>
                        <div className='V_slider3'>
                            <div className='d_container h-100'>
                                <Row className=' d-flex h-100'>
                                    <Col lg={6} className='align-self-center p-3'>
                                        <div className='V_slid3'>
                                            <h1 className='V_more_than'>More than
                                                just a game.
                                                It’s a lifestyle.</h1>
                                            <p className='V_slide_3_text'>Whether you’re just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.</p>
                                        </div>
                                        <div className='pt-3'>
                                            <Button className='py-2 px-5 text-dark V_golf'>Buy Now</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section >

            < SportsSlider />

            <section className='text-white pb-5'>
                <div className=''>
                    <Row className='p-md-5 m-0'>
                        <Col lg={4} className=' pt-3'>
                            <div className=' V_sports_accessories V_sport_product_1'>
                                <div className=' pt-lg-3'>
                                    <h3 className='V_Get text-dark '>
                                        <p className='m-0'>Get <span className='V_red'>50% </span>off on </p>
                                        <p className='V_sub_text'>Sports Accessories</p>
                                    </h3>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className=' pt-3'>
                            <div className=' V_sports_accessories V_sport_product_2'>
                                <div className=' pt-lg-3'>
                                    <h3 className='v_Women text-white'>
                                        Women
                                        Sportwear
                                        Collection
                                    </h3>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className=' pt-3 align-self-center'>
                            <div className=' V_sports_accessories V_sport_product_3'>
                                <div className=' pt-lg-3 a'>
                                    <h3 className='V_kids text-white'>
                                        Kids
                                        Collection
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>





            <SportsCollection />

            <section className='pb-5'>
                <div className='V_new_footware'>
                    <div className='row m-0'>
                        <div className='col-6 p-0'>
                            <div className="d_container  p-0">
                                <div className='V_all'>
                                    <p className='V_all_width'><span className='V_new_foot'>NEW FOOTWEAR</span> <span className='V_collection text-white'>COLLECTION</span></p>
                                    <p className='V_big p-0'>
                                        <span className='V_disco text-white'>discount</span>
                                        <span className='V_30'>30%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <SportsPost />

            <GridSportsComponant />


            {/* new sletter */}
            <Subscribe />

            {/* process */}
            <Process />

            {/* footer */}
            <Footer />

        </>
    )
}

export default Luggage