import React from 'react';
import '../User/user.css';
import Map from '../Map.jsx';
// import { Modal } from 'react-bootstrap';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx';
import { FaStar } from 'react-icons/fa6';

function RateReview() {
    return (
        <React.Fragment>
            <Header />
            <section className='VK_user_profile mb-4 h-100 '>
                <div className="d_container">
                    <h2 className='VK_trackorder_heading pt-5 pb-3 mb-0'>
                        Rate & Review
                    </h2>
                    {/* empty order */}
                    <div className='VK_my_order d-flex justify-content-center align-items-center h-100 d-none'>
                        <div className='VK_empty_order text-center'>
                            <div className='VK_empty_order_img'>
                                <img src={require('../../assets/empty_cart.png')} alt="" />
                            </div>
                            <div>
                                <p className='text-black fw-bold mb-1'>
                                    You have no orders
                                </p>
                                <p className='font_14 mb-4'>
                                    You have no order with us keep shopping with us
                                </p>
                                <button className='VK_empty_order_btn'>
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* my order */}
                    <div>
                        <div className='VK_order_parent'>
                            <div className='my-sm-3'>
                                <div className='VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap  py-3'>
                                    <div className="row m-0 flex-lg-row flex-column-reverse w-100 ">
                                        <div className="col">
                                            <div className='d-flex'>
                                                <div className='px-2'>
                                                    <img src={require('../../assets/order1.png')} alt="" width="120px" height="140px" />
                                                </div>
                                                <div className='ps-2 ps-sm-4 align-content-center pb-3'>
                                                    <h1 className='V_full_pair_review'>Full pair stretched</h1>
                                                    <div className='d-flex '>
                                                        <div className='V_bg_star '>
                                                            <p className='mb-0 px-2 d-flex align-items-center'> <FaStar className='V_star justify-items-center '></FaStar> <span className='ps-2 fw-bolder'>4.5</span></p>
                                                        </div>
                                                        <div className='px-3 fw-bold'>(2,256)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pt-5 ps-2 VK_border_bottom1'>
                                                <h1 className='V_rate_this'>
                                                    Rate this Product
                                                </h1>
                                                <div className="d-flex">
                                                    <FaStar className='V_star justify-items-center V_star_size pe-2'></FaStar>
                                                    <FaStar className='justify-items-center  V_star_size1 pe-2'></FaStar>
                                                    <FaStar className='justify-items-center  V_star_size1 pe-2'></FaStar>
                                                    <FaStar className='justify-items-center  V_star_size1 pe-2'></FaStar>
                                                    <FaStar className='justify-items-center  V_star_size1 pe-2'></FaStar>
                                                </div>
                                            </div>
                                            <div>
                                                <h1 className='pt-5 V_rev'>Review</h1>
                                                <textarea type="text" className='V_review_textarea py-2 px-3 mt-2' placeholder='Write your feedback'>

                                                </textarea>
                                            </div>
                                            <div>
                                                <h1 className='pt-5 V_rev'>Add Photo or Video</h1>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='pe-3 pb-5 pt-3 '>
                                                    <img src={require('../../assets/order1.png')} alt="" width="78px" height="85px" />
                                                    <img src={require('../../assets/cancle button.png')} alt="" className='V_cancle' />
                                                </div>
                                                <div className='pb-5 pt-3'>
                                                    <span className='V_add_image d-flex align-self-center justify-content-center'>+</span>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="submit" className='V_submiy_rate_button'>
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </React.Fragment>
    )
}

export default RateReview