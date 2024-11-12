import React from 'react';
import './footer.css';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='Footer VK_footer_par'>
            <div className='d_container inter VK_sec_padding'>
                <Row className='m-0 justify-content-xxl-center justify-content-between'>
                    <Col xl={4} md={4} sm={6} xs={12} className='px-2 text-white my-4'>
                        <div className='text-white'>
                            <h2 className='fw-bolder'>
                                Logo
                            </h2>
                            <p className='VK_light_color'>
                                Lorem ipsum dolor sit amet consectetur. Amet viverra nec netus donec. Et ut cursus nisl tincidunt egestas morbi aliquet.
                            </p>
                        </div>
                        <div className='mt-sm-5 mt-4'>
                            <h5 className='font_20 fw-600 text-white mb-4'>
                                Connect with us
                            </h5>
                            <div className='d-flex gap-3'>
                                <div className='VK_footer_img'>
                                    <img src={require('../../assets/facebook.png')} className='w-100' alt='Facebook' />
                                </div>
                                <div className='VK_footer_img'>
                                    <img src={require('../../assets/instagram.png')} className='w-100' alt='Instagram' />
                                </div>
                                <div className='VK_footer_img'>
                                    <img src={require('../../assets/twitter.png')} className='w-100' alt='Twitter' />
                                </div>
                                <div className='VK_footer_img'>
                                    <img src={require('../../assets/youtube.png')} className='w-100' alt='Youtube' />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={2} lg={2} md={3} sm={6} xs={12} className='px-2 text-white my-4 ms-xxl-auto'>
                        <h5 className='font_20 fw-500 mb-4'>
                            Categories
                        </h5>
                        <ul className='list-unstyled VK_footer_ul'>
                            <li className='my-2'>
                                Women's Fashion
                            </li>
                            <li className='my-2'>
                                Electronics
                            </li>
                            <li className='my-2'>
                                Beauty
                            </li>
                            <li className='my-2'>
                                Luggage
                            </li>
                            <li className='my-2'>
                                Sports
                            </li>
                        </ul>
                    </Col>
                    <Col xl={2} md={3} sm={6} xs={6} className='px-2 text-white my-4'>
                        <h5 className='font_20 fw-500 mb-4'>
                            Quick Links
                        </h5>
                        <ul className='list-unstyled VK_light_color VK_footer_ul'>
                            <li className='my-2'>
                                My Account
                            </li>
                            <li className='my-2'>
                                My Order
                            </li>
                            <li className='my-2'>
                                My Wishlist
                            </li>
                            <li className='my-2'>
                                My Cart
                            </li>
                        </ul>
                    </Col>
                    <Col xl={2} md={2} sm={6} xs={6} className='px-2 text-white my-4'>
                        <h5 className='font_20 fw-500 mb-4'>
                            Let us help you
                        </h5>
                        <ul className='list-unstyled VK_light_color VK_footer_ul'>
                            <li className='my-2'>
                                About Us
                            </li>
                            <li className='my-2'>
                                Help & Support
                            </li>
                            <li className='my-2'>
                                Contact Us
                            </li>
                            <li className='my-2'>
                                FAQs
                            </li>
                            <li className='my-2'>
                                Terms of use
                            </li>
                            <li className='my-2'>
                                Privacy & Security
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className='VK_footer_net'>
                <img src={require('../../assets/net.png')} className='w-100' alt="" />
            </div>
        </footer>
    );
};

export default Footer;
