import React from 'react';
import Header from '../../../Vivek/Component/header/Header';
import Footer from '../../../Vivek/Component/footer/Footer';
import Process from '../../../Vivek/Component/common/Process';
import Subscribe from '../../../Vivek/Component/common/Subscribe';
import { Row, Col, Form } from 'react-bootstrap';
import './ContactUs.css'

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
                                    Contact Us
                                </h1>
                                <p className='V_any'>Any question or remarks? Just write us a message!</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>



            <section className='pb-5 mb-3'>
                <div className="d_container">
                    <div className='m-0 p-lg-2 p-lg-5 p-3 V_shadow d-flex flex-wrap flex-lg-nowrap'>
                        <div className='pe-lg-5'>
                            <div className='V_back_img p-lg-5 p-4 text-white'>
                                <div>
                                    <h1 className='V_main_text'>
                                        Contact Information
                                    </h1>
                                    <p className='V_feel_free'>
                                        Feel free to ask your query anytime
                                    </p>
                                </div>
                                <div className='py-5 align-items-center'>
                                    <div className='d-flex flex-wrap pb-lg-3 pt-lg-5 '>
                                        <img src={require('../../assets/call.png')} alt="" className='V_call' />
                                        <p className='V_contact_no ps-3'>+1012 3456 789</p>
                                    </div>
                                    <div className='d-flex py-lg-3 '>
                                        <img src={require('../../assets/Mail.png')} alt="" className='V_call' />
                                        <p className='V_contact_no ps-3'>demo@gmail.com</p>
                                    </div>
                                    <div className='d-flex py-lg-3 '>
                                        <img src={require('../../assets/location.png')} alt="" className='V_call' />
                                        <p className='V_contact_no ps-3'>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ps-lg-5'>
                            <div className=' '>
                                <form >
                                    <div >
                                        <label className='V_label pt-4 pb-2'>Name</label> <br />
                                        <input className='V_input'
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div>
                                        <label className='V_label pt-4 pb-2'>Email</label><br />
                                        <input className='V_input'
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                    <div>
                                        <label className='V_label pt-4 pb-2'>Contact no.</label><br />
                                        <input className='V_input'
                                            type="text"
                                            name="contactNo"
                                        />
                                    </div>
                                    <div >
                                        <label className='V_label pt-4 pb-2'>Select Subject</label><br />
                                        <div className='d-flex flex-wrap flex-lg-nowrap align-items-center'>
                                            <div className='d-flex align-items-center'>
                                                <Form.Check
                                                    type="radio"
                                                    aria-label="radio 1"
                                                    className="custom-radio pe-3 py-2"
                                                />{' '}
                                                <p className=' px-lg-4 ps-lg-2 pe-lg-4 mb-0 V_redio_text'>
                                                    General Inquiry
                                                </p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <Form.Check
                                                    type="radio"
                                                    aria-label="radio 1"
                                                    className="custom-radio pe-3 py-2"
                                                />{' '}
                                                <p className='ps-lg-2 pe-lg-4 mb-0 V_redio_text'>
                                                    Payment related
                                                </p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <Form.Check
                                                    type="radio"
                                                    aria-label="radio 1"
                                                    className="custom-radio pe-3 py-2"
                                                />{' '}
                                                <p className='ps-lg-2 mb-0 V_redio_text'>
                                                    Product related
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                    <div >
                                        <label className='V_label pt-lg-4 pb-lg-2'>Message</label><br />
                                        <textarea className='V_textarea'
                                            name="message"
                                        />
                                    </div>

                                    <div className='pt-5 pb-4 text-center'>
                                        <button className='py-3 px-5 V_submit_button'
                                            type="submit"
                                        >
                                            <p className='V_submit mb-0 text-white'>Submit</p>
                                        </button>
                                    </div>
                                </form>
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