import React from 'react';
import Header from '../../../Vivek/Component/header/Header';
import Footer from '../../../Vivek/Component/footer/Footer';
import Process from '../../../Vivek/Component/common/Process';
import Subscribe from '../../../Vivek/Component/common/Subscribe';
import { Row, Col, Accordion } from 'react-bootstrap';
import '../HelpSupprt/Helpsupport.css'

function Help() {
    return (
        <>
            <Header />


            <section className='pt-5'>
                <div className="d_container">
                    <Row className='m-0'>
                        <Col className='pt-lg-5'>
                            <div className='text-center '>
                                <h1 className="V_help fw-bold">
                                    Help & Support
                                </h1>
                                <p className='V_hii'>Hi Jhon, What can we help you with?</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>


            <section className='pb-5'>
                <div className="d_container">
                    <div className="row m-0 p-0">
                        <div className="col-md-6 col-lg-4  col-12 p-3 p-lg-3 " >
                            <div className="V_help_shadow ">
                                <div className="row m-0 p-xl-3">
                                    <div className="col-4 align-self-center py-sm-2 p-md-3">
                                        <div className="text-center">
                                            <img src={require('../../assets/Manage your order.png')} alt="" className=' V_help_img' />
                                        </div>
                                    </div>
                                    <div className="col-8  p-3  align-self-center">
                                        <div className="V_help_text">
                                            <h1 className='V_manage m-0 pb-2 pb-md-3'>
                                                Manage your orders
                                            </h1>
                                            <p className='V_p_text m-0'>Edit or Cancel order</p>
                                            <p className='V_p_text m-0'>Track order</p>
                                            <p className='V_p_text m-0'>View order details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 p-3 p-lg-3">
                            <div className="V_help_shadow ">
                                <div className="row m-0 p-xl-3">
                                    <div className="col-4 align-self-center py-sm-2 p-md-3">
                                        <div className=" text-center">
                                            <img src={require('../../assets/return.png')} alt="" className='V_help_img' />
                                        </div>
                                    </div>
                                    <div className="col-8 p-3 align-self-center">
                                        <div className="V_help_text">
                                            <h1 className='V_manage m-0 pb-2 pb-md-3'>
                                                Returns & Refunds
                                            </h1>
                                            <p className='V_p_text m-0'>Return or exchange product</p>
                                            <p className='V_p_text m-0'>Track return or refund status</p>
                                            <p className='V_p_text m-0'>Print return mailing labels</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12  p-3 p-lg-3">
                            <div className="V_help_shadow ">
                                <div className="row m-0 p-xl-3">
                                    <div className="col-4 align-self-center p-xl-3">
                                        <div className=" text-center ">
                                            <img src={require('../../assets/address.png')} alt="" className='V_help_img' />
                                        </div>
                                    </div>
                                    <div className="col-8 p-3  align-self-center">
                                        <div className="V_help_text">
                                            <h1 className='V_manage m-0 pb-2 pb-md-3'>
                                                Manage Address
                                            </h1>
                                            <p className='V_p_text m-0'>Add new address</p>
                                            <p className='V_p_text m-0'>Update existing address</p>
                                            <p className='V_p_text m-0'>Change default address</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12  p-3 p-lg-3">
                            <div className="V_help_shadow ">
                                <div className="row m-0 p-xl-3">
                                    <div className="col-4 align-self-center p-xl-3">
                                        <div className="text-center">
                                            <img src={require('../../assets/payment setting.png')} alt="" className='V_help_img' />
                                        </div>
                                    </div>
                                    <div className="col-8 p-3 align-self-center">
                                        <div className="V_help_text">
                                            <h1 className='V_manage m-0 pb-2 pb-md-3'>
                                                Payment Settings
                                            </h1>
                                            <p className='V_p_text m-0'>Add or delete payment method</p>
                                            <p className='V_p_text m-0'>Edit payment details</p>
                                            <p className='V_p_text m-0'>Change default payment method</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12  p-3 p-lg-3">
                            <div className="V_help_shadow ">
                                <div className="row m-0 p-xl-3">
                                    <div className="col-4 align-self-center p-xl-3">
                                        <div className="text-center">
                                            <img src={require('../../assets/account setting.png')} alt="" className='V_help_img' />
                                        </div>
                                    </div>
                                    <div className="col-8 p-3 align-self-center">
                                        <div className="V_help_text">
                                            <h1 className='V_manage m-0 pb-2 pb-3'>
                                                Account Settings
                                            </h1>
                                            <p className='V_p_text m-0'>Change or edit personal details</p>
                                            <p className='V_p_text m-0'>Change contact details</p>
                                            <p className='V_p_text m-0'>Manage account</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className='py-5'>
                <div className="d_container">
                    <Accordion>
                        <Accordion.Item eventKey="0" className='my-3'>
                            <Accordion.Header className='V_header'><strong>Can I reactivate my inactive account?</strong></Accordion.Header>
                            <Accordion.Body className='V_body'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='my-3'>
                            <Accordion.Header className='V_header'><strong>Can I use any Debit Card to pay for my order?</strong></Accordion.Header>
                            <Accordion.Body className='V_body'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='my-3'>
                            <Accordion.Header className='V_header'><strong>How can I pay with a saved Credit/Debit Card?</strong></Accordion.Header>
                            <Accordion.Body className='V_body'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='my-3'>
                            <Accordion.Header className='V_header'><strong>What are the modes of refund available after cancellation?</strong></Accordion.Header>
                            <Accordion.Body className='V_body'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='my-3'>
                            <Accordion.Header className='V_header'><strong>How quickly can I get my order delivered?</strong></Accordion.Header>
                            <Accordion.Body className='V_body'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='my-3'>
                            <Accordion.Header className='V_header'><strong>Why can't I track my order even though it has been shipped?</strong></Accordion.Header>
                            <Accordion.Body className='V_body'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section>


            <Subscribe />
            <Process />
            <Footer />
        </>
    )
}

export default Help