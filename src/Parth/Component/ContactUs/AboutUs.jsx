import React from 'react';
import Header from '../../../Vivek/Component/header/Header';
import Footer from '../../../Vivek/Component/footer/Footer';
import Process from '../../../Vivek/Component/common/Process';
import Subscribe from '../../../Vivek/Component/common/Subscribe';
import { Row, Col } from 'react-bootstrap';
import './AboutUs.css'

function ContactUs() {

    return (
        <>
            <Header />

            {/* <h5 className='ds_curve-text'>25+</h5> */}

{/* <div className="V_demo">
    jrghjnj
</div> */}
            <section className='py-5'>
                <div className="d_container">
                    <Row className='m-0'>
                        <Col className='pt-lg-5'>
                            <div className='text-center '>
                                <h1 className="V_contact fw-bold">
                                    About us
                                </h1>
                                <p className='V_any'>Lorem ipsum dolor sit amet consectetur. </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>


            <section className='pb-lg-5'>
                <div className='d_container'>
                    <div className="row m-0 ">
                        <div className="col V_shadow p-0">
                            <div className='d-flex flex-lg-row flex-column-reverse py-2 px-3 p-lg-5 '>
                                <div className='pe-lg-5 align-self-center '>
                                    <h3 className='V_head_text  pb-lg-5 pb-3 m-0'>The Quickcart Group</h3>
                                    <p className='V_lorem'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque.
                                    </p>
                                    <p className='V_lorem'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque.
                                    </p>
                                </div>
                                <div className='V_img_div'>
                                    <img src={require('../../assets/thequickcartgroup.png')} alt="" className='V_img py-3 py-lg-0' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='d_container'>
                    <div className="row m-0 ">
                        <div className="col V_shadow p-0">
                            <div className='d-flex flex-lg-row flex-column py-2 px-3 p-lg-5 '>
                                <div className='pe-lg-5' >
                                    <img src={require('../../assets/Ethicsand compailance.png')} alt="" className='V_img py-3 py-lg-0' />
                                </div>
                                <div className='align-self-center'>
                                    <h3 className='V_head_text pb-lg-5 pb-3 m-0'>Ethics & Compliance</h3>
                                    <p className='V_lorem'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque.
                                    </p>
                                    <p className='V_lorem'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className=''>
                <div className='row m-0'>
                    <div className="col p-0">
                        <div >
                            <img src={require('../../assets/world map.png')} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </section>



            {/* <section className='V_jal'>
                <div className="d_container">
                    <div className="row m-0 pt-5">
                        <div className="col-4 pe-5">
                            <div className="text-white py-5">
                                <h3 className='V_quick'>The Quickcart</h3>
                                <p className='V_ipsum'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla</p>
                            </div>
                        </div>
                        <div className="col-8 pt-5 ps-5">
                            <div className="d-flex justify-content-between text-white align-items-center text-center">
                                <div className=' '>
                                    <img src={require('../../assets/v25.png')} alt="" className=''/>
                                    <p className='pt-3'>Years of Experience</p>
                                </div>
                                <div>
                                    <img src={require('../../assets/v100.png')} alt="" className='pb-0'/>
                                    <p  className='pt-4'>Best Brands</p>
                                </div>
                                <div>
                                    <img src={require('../../assets/v2M.png')} alt="" className='' />
                                    <p  className='pt-2'>Happy Clients</p>
                                </div>
                                <div>
                                    <img src={require('../../assets/V48.png')} alt="" className='' />
                                    <p  className='pt-2'>Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

           {/* *********************** The Quickcart ***************** */}

            <section>
                <div className='ds_bg-color'>
                    <div className="d_container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-3">
                                <div className='ds_padding'>
                                    <h5 className='ds_mini-title text-light'>The Quickcart</h5>
                                    <p className='ds_para'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.</p>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 mt-3">
                                <div>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-6 text-center">
                                            <div>
                                                <h5 className='ds_curve-text mb-0'>25+</h5>
                                                <p className='ds_text text-light'>Years of Experience</p>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-6 text-center">
                                            <div>
                                                <h5 className='ds_curve-text mb-0'>100+</h5>
                                                <p className='ds_text text-light'>Best Brands</p>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-6 text-center">
                                            <div>
                                                <h5 className='ds_curve-text mb-0'>2M+</h5>
                                                <p className='ds_text text-light'>Happy Clients</p>
                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-6 col-md-3 col-sm-6 col-6 text-center">
                                            <div>
                                                <h5 className='ds_curve-text mb-0'>4.8</h5>
                                                <p className='ds_text text-light'>Rating</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <section className='py-5'>
                <div className='d_container pt-5'>
                    <div className="row m-0 V_back ">
                        <div className="col-12 col-sm-8 col-md-7 col-lg-5  d-flex align-items-center">
                            <div className=' p-3 p-md-5 text-white V_text_white'>
                                <h3 className='V_head_text py-2 py-md-5'>The Quickcart Group</h3>
                                <p className='V_lorem pt-md-2'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-5 col-lg-7">

                        </div>
                    </div>
                </div>
            </section>


            <section className='pb-5'>
                <div className='d_container pb-5'>
                    <div className="row m-0 V_back1 ">
                        <div className="col-12 col-sm-4 col-md-5 col-lg-7">

                        </div>
                        <div className="col-12 col-sm-8 col-md-7 col-lg-5  d-flex align-items-center">
                            <div className=' p-3 p-md-5 text-white V_text_white'>
                                <h3 className='V_head_text py-2 py-md-5'>Technology & Innovation </h3>
                                <p className='V_lorem pt-md-2'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Subscribe />
            <Process />
            <Footer />

        </>
    )
}

export default ContactUs