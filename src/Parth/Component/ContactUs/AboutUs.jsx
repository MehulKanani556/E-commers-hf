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


            <section className='pb-5'>
                <div className='d_container'>
                    <div className="row m-0 ">
                        <div className="col V_shadow">
                            <div className='d-flex p-5'>
                                <div className='pe-5 align-self-center'>
                                    <h3 className='V_head_text pb-5'>The Quickcart Group</h3>
                                    <p className='V_lorem'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque.
                                    </p>
                                    <p className='V_lorem'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque.
                                    </p>
                                </div>
                                <div className=''>
                                    <img src={require('../../assets/thequickcartgroup.png')} alt="" className='V_img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='d_container'>
                    <div className="row m-0 ">
                        <div className="col V_shadow">
                            <div className='d-flex p-5'>
                                <div className='pe-5' >
                                    <img src={require('../../assets/Ethicsand compailance.png')} alt="" className='V_img' />
                                </div>
                                <div className='align-self-center'>
                                    <h3 className='V_head_text pb-5'>The Quickcart Group</h3>
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

            <Subscribe />
            <Process />
            <Footer />

        </>
    )
}

export default ContactUs