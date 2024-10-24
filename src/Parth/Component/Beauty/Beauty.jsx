import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './Beauty.css'
// import Minisider from '../../../darshan/components/Minisider';
import BeautySlider from './BeautySlider.jsx'
import BeautyPost from '../../Component/Beauty/BeautyPost.jsx'
import BeautyCollection from '../../Component/Beauty/BeautyCollection.jsx'
import GridBeautycomponent from '../../Component/Beauty/GridBeautycomponent.jsx';
import Header from '../../../Vivek/Component/header/Header.jsx'
import Subscribe from '../../../Vivek/Component/common/Subscribe.jsx';
import Footer from '../../../Vivek/Component/footer/Footer.jsx'
import Process from '../../../Vivek/Component/common/Process.jsx';
import OwlCarousel from 'react-owl-carousel';

function Beauty() {

    return (
        <>

            <Header />


            <section className=''>
                <OwlCarousel className='owl-theme' loop items={1}>
                    <div className='item V_slider_height'>
                        <section className='V_fresh'>
                            <div className='d_container h-100'>
                                <Row className='h-100'>
                                    <Col lg={6} className='align-self-center'>
                                        <div className='V_lipstic pe-xxl-5'>
                                            <h1 className='V_try_fresh '>TRY FRESH PRODUCT
                                                FOR YOUR LIPS</h1>
                                            <p className='V_try'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                    </div>
                    <div className='item V_slider_height'>
                        <div className="row m-0">
                            <div className="col-12 col-md-8 p-0">
                                <div className='V_hair_width p-0'>
                                    <img src={require('../../assets/enhance your natyural hair.png')} alt="" className='VK_obj' />
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-0">
                                <div className="V_green_part">
                                    <div className='p-3 p-lg-5 d-md-flex flex-md-column h-100'>
                                        <div className='my-auto'>
                                            <div className="V_hair_natura_oil  text-white ">
                                                <h1 className='V_enhance '>Enhance Your Natural Hair with Our Premium Products</h1>
                                                <p className='V_glow_shine'>Glow & Shine natural hair care products are made with natural, plant-based ingredients and do not contain harsh chemicals or synthetic additives. </p>
                                            </div>
                                            <div className='pt-sm-1 pt-md-5'>
                                                <Button className='py-2 px-5 text-white bg-dark'>Buy Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='item V_slider_height'>
                        <div className='V_unlock'>
                            <div className=''>
                                <Row className=''>
                                    <Col className=''>
                                        <div className='V_overlay_unlock'>
                                            <p className="V_overlay_text_unlock">unlock your natural glow </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section >


            {/* <section className='V_fresh'>
                <div className='d_container h-100'>
                    <Row className='h-100'>
                        <Col lg={6} className='align-self-center'>
                            <div className='V_lipstic pe-xxl-5'>
                                <h1 className='V_try_fresh '>TRY FRESH PRODUCT
                                    FOR YOUR LIPS</h1>
                                <p className='V_try'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section> */}

            <BeautySlider />

            <section className='text-white py-5'>
                <div className=''>
                    <Row className='p-md-5 m-0'>
                        <Col lg={4} className=' pt-3'>
                            <div className=' V_skin_care V_beauty_product_1'>
                                <div className=' pt-lg-3'>
                                    <h3 className='v_make text-dark '>
                                        Make your skin the best
                                    </h3>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className=' pt-3'>
                            <div className=' V_skin_care V_beauty_product_2'>
                                <div className=' pt-lg-3'>
                                    <h3 className='v_Dry text-dark'>
                                        Dry skins lack mosturiser
                                    </h3>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} className=' pt-3'>
                            <div className=' V_skin_care V_beauty_product_3'>
                                <div className=' pt-lg-3'>
                                    <h3 className='v_Dry text-white'>
                                        Glowing skin always in
                                    </h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>






            <BeautyCollection />

            <section className='pb-5'>
                <div className='V_healty_skincare'>
                    <Row className=''>
                        <Col className=''>
                            <div className="V_overlay">
                                <p className="V_overlay_text">Healthy skin requires commitment, not a miracle.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>



            <BeautyPost />

            <GridBeautycomponent />


            {/* new sletter */}
            <Subscribe />

            {/* process */}
            <Process />

            {/* footer */}
            <Footer />

        </>
    )
}

export default Beauty