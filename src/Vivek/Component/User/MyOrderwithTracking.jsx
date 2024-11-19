import React, { useState } from 'react';
import '../User/user.css';
import Map from '../Map';
import { useFormik } from 'formik';
import { Modal } from 'react-bootstrap';
import Header from '../../Component/header/Header.jsx'
import Footer from '../footer/Footer.jsx';
import * as Yup from 'yup'


function MyOrderwithTracking() {

    const [returncard, setReturncard] = useState(false);
    const [canclecard, setCanclecard] = useState(false);
    const [change, setchange] = useState(false);
    const [otpmodel, setotpmodel] = useState(false);
    const [resetpassword, setresetpassword] = useState(false);

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
    // otp model
    const otp_validation = Yup.object({
        otp1: Yup.string().required('Required').matches(/^[0-9]$/, 'Must be a number'),
        otp2: Yup.string().required('Required').matches(/^[0-9]$/, 'Must be a number'),
        otp3: Yup.string().required('Required').matches(/^[0-9]$/, 'Must be a number'),
        otp4: Yup.string().required('Required').matches(/^[0-9]$/, 'Must be a number'),
        otp5: Yup.string().required('Required').matches(/^[0-9]$/, 'Must be a number'),
        otp6: Yup.string().required('Required').matches(/^[0-9]$/, 'Must be a number'),
    });

    const otpFormik = useFormik({
        initialValues: {
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
            otp5: '',
            otp6: ''
        },
        validationSchema: otp_validation,
        onSubmit: (values) => {
            otp_submit(values);
        }
    });

    const otp_submit = (values) => {
        const otp = values.otp1 + values.otp2 + values.otp3 + values.otp4;
        console.log('OTP Submitted:', otp);
        if (change) {
            setresetpassword(true)
        }
        setotpmodel(false);
    };

    // otp model focus
    const handleInput = (e, index) => {
        const input = e.target;
        const nextInput = input.nextElementSibling;
        const prevInput = input.previousElementSibling;

        if (input.value.length === 1 && nextInput) {
            nextInput.focus();
        } else if (input.value.length === 0 && prevInput) {
            prevInput.focus();
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
                                        <div className="col-lg-4 ">
                                            <div className='d-flex'>
                                                <div className='px-2'>
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
                                            <div className="d-flex justify-content-between px-md-3 px-lg-5 ">
                                                <div className='text-center'>
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
                                <select type="text" className='VK_from_input w-100 py-2 px-3 mt-2' placeholder='Select Reason' >
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
                                <form method='post' onSubmit={otpFormik.handleSubmit}>
                                    <div className=' my-3 my-sm-4 d-flex gap-3 justify-content-between'>
                                        <input
                                            type="text"
                                            className='V_otp_input1'
                                            maxLength="1"
                                            name="otp1"
                                            value={otpFormik.values.otp1}
                                            onChange={otpFormik.handleChange}
                                            onBlur={otpFormik.handleBlur}
                                            onInput={(e) => handleInput(e, 0)}
                                        />
                                        <input
                                            type="text"
                                            className='V_otp_input1'
                                            maxLength="1"
                                            name="otp2"
                                            value={otpFormik.values.otp2}
                                            onChange={otpFormik.handleChange}
                                            onBlur={otpFormik.handleBlur}
                                            onInput={(e) => handleInput(e, 1)}
                                        />
                                        <input
                                            type="text"
                                            className='V_otp_input1'
                                            maxLength="1"
                                            name="otp3"
                                            value={otpFormik.values.otp3}
                                            onChange={otpFormik.handleChange}
                                            onBlur={otpFormik.handleBlur}
                                            onInput={(e) => handleInput(e, 2)}
                                        />
                                        <input
                                            type="text"
                                            className='V_otp_input1'
                                            maxLength="1"
                                            name="otp4"
                                            value={otpFormik.values.otp4}
                                            onChange={otpFormik.handleChange}
                                            onBlur={otpFormik.handleBlur}
                                            onInput={(e) => handleInput(e, 3)}
                                        />
                                        <input
                                            type="text"
                                            className='V_otp_input1'
                                            maxLength="1"
                                            name="otp5"
                                            value={otpFormik.values.otp5}
                                            onChange={otpFormik.handleChange}
                                            onBlur={otpFormik.handleBlur}
                                            onInput={(e) => handleInput(e, 4)}
                                        />
                                        <input
                                            type="text"
                                            className='V_otp_input1'
                                            maxLength="1"
                                            name="otp6"
                                            value={otpFormik.values.otp6}
                                            onChange={otpFormik.handleChange}
                                            onBlur={otpFormik.handleBlur}
                                            onInput={(e) => handleInput(e, 5)}
                                        />
                                    </div>

                                    {/* Display validation errors
                                    <div className='text-center'>
                                        {(otpFormik.touched.otp1 && otpFormik.errors.otp1) ||
                                            (otpFormik.touched.otp2 && otpFormik.errors.otp2) ||
                                            (otpFormik.touched.otp3 && otpFormik.errors.otp3) ||
                                            (otpFormik.touched.otp4 && otpFormik.errors.otp4) ? (
                                            <span className='VK_error_text text-danger'>
                                                Please fill all OTP fields correctly
                                            </span>
                                        ) : null}
                                    </div> */}

                                    {/* <div className='mb-4 pt-2'>
                                        <input type="submit" value={"Submit OTP"} className='w-100 inter model_theme' />
                                    </div> */}
                                </form>
                            </div>
                            <div className='mt-3 text-center'>
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
                            <button type="submit" className='V_order_success px-4 py-2 mt-3 mx-3 text-dark bg-white'
                            >
                                Back to Home
                            </button>
                            <button type="submit" className='V_order_success px-4 py-2 mt-3 mx-3 text-white bg-dark'
                            >
                                Track Return/Refund
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <Footer />
        </React.Fragment>
    )
}

export default MyOrderwithTracking