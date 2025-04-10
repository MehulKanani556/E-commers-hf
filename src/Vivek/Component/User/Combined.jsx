import React, { useRef, useState } from 'react';
import '../User/user.css';
import Map from '../Map.jsx';
// import { Modal } from 'react-bootstrap';
import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx';
import { Modal } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

function Combined() {

    const navigate = useNavigate();

    const [returncard, setReturncard] = useState(false);
    const [canclecard, setCanclecard] = useState(false);
    const inputRefs = useRef([]);

    const handleReturnOrder = () => {
        setReturncard(true); // Show the cancel order modal
    };

    const handleSaveCancel = (event) => {
        event.preventDefault();
        setReturncard(false); // Close the cancel order modal
        setCanclecard(true); // Show the success modal
    };

    const handleCloseSuccessModal = () => {
        setCanclecard(false); // Close the success modal
    };

    const handleInputChange = (e, index) => {
        const value = e.target.value;

        if (e.key === 'Backspace' && !value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
        else if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };


    return (
        <React.Fragment>
            <Header />
            <section className='VK_user_profile mb-4 h-100 '>
                <div className="d_container">
                    <h2 className='VK_trackorder_heading py-5 mb-0'>
                        My Order
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
                            <div className='VK_order_card my-sm-3'>

                                <div className='V_pad'>
                                    <p className='m-0 fw-600 font_18'>
                                        Order Details
                                    </p>
                                </div>

                                <div className='d-flex justify-content-between flex-wrap align-items-center V_border_bottom '>
                                </div>
                                <div className='VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap  py-3'>
                                    <div className="row m-0 flex-lg-row flex-column-reverse w-100 ">
                                        <div className="col-lg-4 px-0">
                                            <div className='d-flex'>
                                                <div className='px-0'>
                                                    <img src={require('../../assets/order1.png')} alt="" width="100px" height="120px" />
                                                </div>
                                                <div className='ps-2 ps-sm-4'>
                                                    <h1 className='V_full_pair'>Full pair stretched</h1>
                                                    <p className='V_full_child_text mb-0'>Lorem ipsum dolor sit amet consectetur. Ac iaculis viverra purus malesuada </p>
                                                    <p className='V_light mb-0 py-2'>Light Brown <span className='V_xl'>XL</span></p>
                                                    <p className='V_track_order_price mb-0'>$120</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 py-3 VK_subtrack pt-lg-0 pt-xl-3 position-relative overflow-auto">
                                            <div className='V_back-line2'></div>
                                            <div className="d-flex justify-content-between px-md-2 px-lg-5 ">
                                                <div className='text-center '>
                                                    <p className='V_confirmed mb-0'>Order Confirmed</p>
                                                    <img src={require('../../assets/ordered confirmed.png')} alt="" className='py-2' />
                                                    <p className='V_track_time mb-0'>01 Oct, 2024 <span>1:21 PM</span></p>
                                                    <p className='V_order_description mb-0'>your order has been placed.</p>
                                                </div>
                                                <div className='text-center'>
                                                    <p className='V_confirmed mb-0'>Shipped</p>
                                                    <img src={require('../../assets/shipped.png')} alt="" className='py-2' />
                                                    <p className='V_track_time mb-0'>02 Oct, 2024 <span>5:21 PM </span></p>
                                                    <p className='V_order_description mb-0'>Your item has been shipped</p>
                                                </div>
                                                <div className='text-center'>
                                                    <p className='V_confirmed mb-0'>Order Confirmed</p>
                                                    <img src={require('../../assets/Out for delivery 2.png')} alt="" className='py-2' />
                                                    <p className='V_track_time mb-0'>05 Oct, 2024 <span>8:36 PM</span></p>
                                                    <p className='V_order_description mb-0'>Your item has been out for delivery</p>
                                                </div>
                                                <div className='text-center'>
                                                    <p className='V_confirmed mb-0'>Delivered</p>
                                                    <img src={require('../../assets/delivered 2.png')} alt="" className='py-2' />
                                                    <p className='V_track_time mb-0'>10 Oct, 2024 <span>8:36 PM</span></p>
                                                    <p className='V_order_description mb-0'>Your item has been delivered</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="V_pad  pt-lg-3 ">
                                    <p className='V_label '>Order ID:   <span className='V_label_value ps-2'> #5656565656</span></p>
                                    <div className="d-flex flex-xl-nowrap">
                                        <p className='V_label mb-0'>Order Date:   <span className='V_label_value ps-2'> 21/09/2024</span> </p>
                                        <p className='V_label ps-3 mb-0'>Expected Delivery:  <span className='V_label_value ps-2'> 26/09/2024</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='VK_order_card my-3 my-sm-5'>
                            <div className='VK_order_product h-100 w-100  py-3'>
                                <div className="row m-0">
                                    <div className="col-6 col-sm-4 V_right_border py-3">
                                        <div className='V_delivery_address_width'>
                                            <h1 className='V_delivery_address'>Delivery Address</h1>
                                            <p className='V_customer_name pt-3'>Jhon Wick</p>
                                            <p className='V_customer_address'>Ehrenkranz 13 Washington Square S, New York,Washington Square, NY 10012, USA</p>
                                            <p className='V_customer_number'>+1 56565 56565</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 V_right_border d-flex justify-content-center py-3">
                                        <div className="justify-content-start text-start">
                                            <h1 className='V_delivery_address'>Payment Details</h1>
                                            <p className='V_customer_name pt-3 pb-2 mb-0'>Debit Card</p>
                                            <p className='V_card_name mb-0 py-1'>Card Name <span className='V_ame_exp'>American Express </span></p>
                                            <p className='V_card_name mb-0 py-1'>Transaction ID <span className='V_ame_exp'> #123456789 </span></p>
                                            <p className='V_card_name mb-0 py-1'>Payment Status <span className='V_success'> Success </span></p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 py-3">
                                        <div className="V_invoice_width">
                                            <h1 className='V_invoice'>Invoice</h1>
                                            <p className='V_down_invoic mt-3'>Download Invoice</p>
                                        </div>
                                        <div className='text-end'>
                                            <button type='submit' className='V_cancle_order_btn px-sm-3 px-md-4 py-2'
                                                onClick={handleReturnOrder}
                                            >
                                                Return Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* Cancle ordered model */}
            <Modal
                show={returncard}
                onHide={() => setReturncard(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_add_address_model_'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5 className='VK_add_address_model_heading'>
                            Return Order
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-2 py-3'>
                        <form action="" onSubmit={handleSaveCancel} className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Order ID<span className='V_complasery'>*</span>
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3 mt-2'
                                    placeholder='Enter Order ID'>

                                </input>
                            </div>
                            <div className='VK_name mb-4'>
                                <span className='VK_input_label pb-1'>
                                    Reason for Return <span className='V_complasery'>*</span>
                                </span>
                                <select type="text" className='VK_from_input VK_return_input w-100 py-2 px-3 mt-2' placeholder='Select Reason' >
                                    <option value="">I was hopping for a shorter delivery time</option>
                                    <option value="">Product quality does not match the level of its worth</option>
                                    <option value="">The product doesn't look like the online picture </option>
                                    <option value="">The product was damaged in transit or was poorly made </option>
                                    <option value="">The product information was misleading</option>
                                    <option value="">My reason are not listed here</option>
                                </select>
                            </div>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Mobile No <span className='V_complasery'>*</span>
                                </span>
                                <input type="text" className='VK_from_input w-100 py-2 px-3 mt-2'
                                    placeholder='Enter Mobile no..'>
                                </input>
                            </div>
                            <div className="mb-3">
                                <span className='text-dark pb-3 pt-5'>
                                    Enter OTP to return order
                                </span>
                                <div className="d-flex justify-content-between mt-3">
                                    {Array(6).fill("").map((_, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            maxLength="1"
                                            style={{ width: "40px", height: "40px", textAlign: "center" }}
                                            className="me-2"
                                            onKeyUp={(e) => handleInputChange(e, index)}
                                            ref={(el) => inputRefs.current[index] = el}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='mt-5 text-center'>
                                <button type="submit" className='VK_add_address_submit mt-4'
                                    onClick={() => setCanclecard(true)}
                                >
                                    Request for OTP
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>



            {/* Cancel Success Modal */}
            <Modal
                show={canclecard}
                onHide={handleCloseSuccessModal}
                centered
                className='VK_add_address_model_'
            >
                <Modal.Body>
                    <div className='p-2 py-3 text-center'>
                        <img src={require('../../assets/track return order.png')} alt="Order Cancelled Successfully" className='pt-5 pb-4' />
                        <p className='mb-0 V_success_modal'>Your request for return product has been <br />
                            successfully received</p>
                        <div className='mt-3 text-center'>
                            <Link to='/' type="submit" className='V_order_success px-4 py-2 mt-3 mx-3 text-dark bg-white text-decoration-none'
                            >
                                Back to Home
                            </Link>
                            <button type="submit" onClick={() => navigate('/returnrefund')} className='V_order_success px-4 py-2 mt-3 mx-3 text-white bg-dark'
                            >
                                Track Return/Refund
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>














            <section className='VK_user_profile mb-4 h-100 px-2'>
                <div className="d_container">
                    <h2 className='VK_trackorder_heading pt-3 pb-3 mb-0'>
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
                                <div className='VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap  py-3 '>
                                    <div className="row m-0 flex-lg-row flex-column-reverse w-100 ">
                                        <div className="col-12 m-0 px-0">
                                            {/* <div className='d-flex'>
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
                                            </div> */}
                                            <div className=' VK_border_bottom1'>
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

export default Combined