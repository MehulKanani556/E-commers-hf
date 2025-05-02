import React, { useEffect, useState } from 'react';
import './footer.css';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/allMainCategory`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                // console.log("response", response.data.users);
                setData(response.data.users);
            } catch (error) {
                console.error('Data fetching Error:', error);
            }
        }
        fetchData();
    }, []);
    return (
        <footer className='Footer VK_footer_par'>
            <div className='d_container inter VK_sec_padding'>
                <Row className='m-0 justify-content-xxl-center justify-content-between'>
                    <Col xl={4} lg={3} md={6} sm={6} className='px-2 text-white my-sm-4 my-2'>
                        <div className='text-white'>
                            <h2 className='fw-bolder'>
                                Logo
                            </h2>
                            <p className='VK_light_color'>
                                Lorem ipsum dolor sit amet consectetur. Amet viverra nec netus donec. Et ut cursus nisl tincidunt egestas morbi aliquet.
                            </p>
                        </div>
                        <div className='mt-sm-5 mt-4'>
                            <h5 className='font_20 fw-600 text-white mb-sm-4 mb-2'>
                                Connect with us
                            </h5>
                            <div className='d-flex gap-3'>
                                <div className='VK_footer_img d_cur'>
                                    <img src={require('../../assets/facebook.png')} className='w-100' alt='Facebook' />
                                </div>
                                <div className='VK_footer_img d_cur'>
                                    <img src={require('../../assets/instagram.png')} className='w-100' alt='Instagram' />
                                </div>
                                <div className='VK_footer_img d_cur'>
                                    <img src={require('../../assets/twitter.png')} className='w-100' alt='Twitter' />
                                </div>
                                <div className='VK_footer_img d_cur'>
                                    <img src={require('../../assets/youtube.png')} className='w-100' alt='Youtube' />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={2} lg={3} md={6} sm={6} xs={6} className='px-2 text-white my-sm-4 my-2 ms-xl-auto '>
                        <h5 className='font_20 fw-500 mb-sm-4 mb-2 '>
                            Categories
                        </h5>
                        <ul className='list-unstyled VK_footer_ul'>
                            {data.map((item) => (
                                <li className='my-2' key={item._id}>
                                    <Link to={`/category/${item._id}`}>{item.mainCategoryName}</Link>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col xl={2} lg={3} md={6} sm={6} xs={6} className='px-2 text-white my-sm-4 my-2'>
                        <h5 className='font_20 fw-500 mb-sm-4 mb-2'>
                            Quick Links
                        </h5>
                        <ul className='list-unstyled VK_light_color VK_footer_ul'>
                            <li className='my-2'>
                                <Link to='/user/profile'>My Account</Link>
                            </li>
                            <li className='my-2'>
                                <Link to='/user/myorder' state={{ activeSection: 'order' }}>My Order</Link>
                            </li>
                            <li className='my-2'>
                                <Link to='/wishlist'>My Wishlist</Link>
                            </li>
                            <li className='my-2'>
                                <Link to='/cart'>My Cart</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xl={2} lg={3} md={6} sm={6} xs={12} className='px-2 text-white my-sm-4 my-2'>
                        <h5 className='font_20 fw-500 mb-sm-4 mb-2'>
                            Let us help you
                        </h5>
                        <ul className='list-unstyled VK_light_color VK_footer_ul'>
                            <li className='my-2'>
                                <Link to='/about'>About Us</Link>
                            </li>
                            <li className='my-2'>
                                <Link to='/help'>Help & Support</Link>
                            </li>
                            <li className='my-2'>
                                <Link to='/contact'>Contact Us</Link>
                            </li>
                            <li className='my-2'>
                                <Link to='/profile' state={{ activeSection: 'faqs' }}>FAQs</Link>
                            </li>
                            <li className='my-2'>
                                <Link to='/profile' state={{ activeSection: 'terms' }}>Terms of use</Link>
                            </li>
                            <li className='my-2'>
                                <Link to=''>Privacy & Security</Link>
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
