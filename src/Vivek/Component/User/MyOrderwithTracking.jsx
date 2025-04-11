import React, { useEffect, useState } from 'react';
import '../User/user.css';
import Map from '../Map';
import { useFormik } from 'formik';
import { Modal } from 'react-bootstrap';
import Header from '../../Component/header/Header.jsx'
import Footer from '../footer/Footer.jsx';
import * as Yup from 'yup'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function MyOrderwithTracking() {

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const navigate = useNavigate();
    const { id } = useParams();

    const [returncard, setReturncard] = useState(false);
    const [successcard, setSuccesscard] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [data, setData] = useState([]);
    const [reason, setReason] = useState([]);
    const [mobileNo, setMobileNo] = useState('');
    const [returnRequest, setReturnRequest] = useState({
        orderId: id,
        reasonForReturn: '',
        mobileNo: ''
    });
    const [invoiceModal, setInvoiceModal] = useState(false);
    const [returnOrderId, setReturnOrderId] = useState('');
    
    // OTP states and logic
    const [otpVerification, setOtpVerification] = useState(false);
    const [otpValue, setOtpValue] = useState('');
    const [otp, setOtp] = useState({
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
        otp5: '',
        otp6: ''
    });
    const [otpError, setOtpError] = useState('');

    const handleReturnOrder = () => {
        // Reset form data when opening modal
        setReturnRequest({
            orderId: id,
            reasonForReturn: '',
            mobileNo: ''
        });
        setOtpVerification(false);
        setOtp({
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
            otp5: '',
            otp6: ''
        });
        setOtpError('');
        setReturncard(true); // Show the return order modal
    };

    // Handle reason selection
    const handleReasonChange = (e) => {
        setReturnRequest({
            ...returnRequest,
            reasonForReturn: e.target.value
        });
    };

    // Handle mobile number input
    const handleMobileChange = (e) => {
        setReturnRequest({
            ...returnRequest,
            mobileNo: e.target.value
        });
    };

    const handleRequestOtp = async (event) => {
        event.preventDefault();
        
        // Validate inputs before requesting OTP
        if (!returnRequest.reasonForReturn || !returnRequest.mobileNo) {
            alert("Please select a reason and provide mobile number");
            return;
        }

        // Mobile number validation (simple validation for example)
        if (!/^\d{10}$/.test(returnRequest.mobileNo)) {
            alert("Please enter a valid 10-digit mobile number");
            return;
        }

        setIsSubmitting(true);
        
        try {
            // Call the API to generate OTP
            const response = await axios.post(`${BaseUrl}/api/generateReturnOrderOtp`, returnRequest, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.data.status === 201) {
                setOtpVerification(true);
                setIsSubmitting(false);
            } else {
                alert(response.data.message || "Failed to send OTP. Please try again.");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Error requesting OTP:", error);
            alert(error.response?.data?.message || "Failed to send OTP. Please try again.");
            setIsSubmitting(false);
        }
    };

    const handleOtpChange = (e, field) => {
        // Allow only numeric input
        const value = e.target.value.replace(/[^0-9]/g, '');
        
        setOtp({
            ...otp,
            [field]: value
        });

        // Calculate the complete OTP value whenever any digit changes
        const updatedOtp = { ...otp, [field]: value };
        const fullOtp = Object.values(updatedOtp).join('');
        setOtpValue(fullOtp);
    };

    const handleSubmitReturn = async (event) => {
        event.preventDefault();
        
        // Validate the OTP before submission
        const fullOtp = Object.values(otp).join('');
        if (fullOtp.length !== 6) {
            setOtpError("Please enter a valid 6-digit OTP");
            return;
        }
    
        setIsSubmitting(true);
        setOtpError('');
    
        try {
            // Prepare the payload for OTP verification
            const verifyPayload = {
                orderId: returnRequest.orderId,
                otp: parseInt(fullOtp),  // Convert to number as per your API
                mobileNo: returnRequest.mobileNo
            };
    
            // Call the API to verify OTP
            const response = await axios.post(`${BaseUrl}/api/verifyReturnOrderOtp`, verifyPayload, {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log("response", response.data);
            if (response.data.status === 200) {
                // Store the return order ID from the response
                if (response.data.returnOrder && response.data.returnOrder._id) {
                    setReturnOrderId(response.data.returnOrder._id);
                }
                setIsSubmitting(false);
                setReturncard(false);
                setSuccesscard(true);
            } else {
                setOtpError(response.data.message || "OTP verification failed");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            setOtpError(error.response?.data?.message || "OTP verification failed. Please try again.");
            setIsSubmitting(false);
        }
    };

    const handleCloseSuccessModal = () => {
        setSuccesscard(false); // Close the success modal
    };

    // Handle OTP input focus
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getOrder/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setData(response.data.order);
            } catch (error) {
                console.error('Data Fetching Error:', error);
            }
        }
        fetchData();
    }, [id, BaseUrl, token]);

    // Fetch return reasons
    useEffect(() => {
        const fetchReasons = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/allReasons`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log("response.data.reason",response.data.reasons);
                setReason(response.data.reasons);
            } catch (error) {
                console.error('Failed to fetch return reasons:', error);
            }
        };
        fetchReasons();
    }, [BaseUrl, token]);

    // Update orderId in ReturnRequest state when id changes
    useEffect(() => {
        setReturnRequest(prev => ({
            ...prev,
            orderId: id
        }));
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
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
                                {data.map((item) => {
                                    return (
                                        <div className='VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap  py-3' key={item._id}>
                                            <div className="row m-0 flex-lg-row flex-column-reverse w-100 ">
                                                <div className="col-lg-4 ">
                                                    <div className='d-flex'>
                                                        <div className='px-2'>
                                                            <img src={`${BaseUrl}/${item.productVariantData[0].images[0]}`} alt="" width="100px" height="120px" />
                                                        </div>
                                                        <div className='ps-2 ps-sm-4'>
                                                            <h1 className='V_full_pair'>{item.productData[0].productName}</h1>
                                                            <p className='V_full_child_text mb-0'>{item.productVariantData[0].description}</p>
                                                            <div className='d-flex py-2'>
                                                                <p className='V_light mb-0 me-3'>
                                                                    <span className='V_xl'>
                                                                        {item.productVariantData[0]?.colorName?.split(',')[0] || "N/A"}
                                                                    </span>
                                                                </p>
                                                                <p className='V_light mb-0 '>
                                                                    <span className='V_xl'>
                                                                        {item.productVariantData[0]?.size?.split(',')[0] || "N/A"}
                                                                    </span>
                                                                </p>
                                                            </div>
                                                            <p className='V_track_order_price mb-0'>${item.totalAmount}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 py-3 VK_subtrack pt-lg-0 pt-xl-3 position-relative overflow-auto">
                                                    <div className='V_back-line2'></div>
                                                    <div className="d-flex justify-content-between px-md-3 px-lg-5 ">
                                                        <div className='text-center'>
                                                            <p className='V_confirmed mb-0'>Order Confirmed</p>
                                                            <img src={require('../../assets/ordered confirmed.png')} alt="" className='py-2' />
                                                            <p className='V_track_time mb-0'>{new Date(item.createdAt).toLocaleDateString()} <span>{new Date(item.createdAt).toLocaleTimeString()}</span></p>
                                                            <p className='V_order_description mb-0'>your order has been placed.</p>
                                                        </div>
                                                        <div className='text-center'>
                                                            <p className='V_confirmed mb-0'>Shipped</p>
                                                            <img src={require('../../assets/shipped.png')} alt="" className='py-2' />
                                                            <p className='V_track_time mb-0'>02 Oct, 2024 <span>5:21 PM </span></p>
                                                            <p className='V_order_description mb-0'>Your item has been shipped</p>
                                                        </div>
                                                        <div className='text-center'>
                                                            <p className='V_confirmed mb-0'>Out for Delivery</p>
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
                                    )
                                })}
                                {data.length > 0 && data[0] && (
                                    <div className="V_pad pt-lg-3">
                                        <p className='V_label'>Order ID: <span className='V_label_value ps-2'>#{data[0]._id}</span></p>
                                        <div className="d-flex flex-xl-nowrap">
                                            <p className='V_label mb-0'>Order Date: <span className='V_label_value ps-2'>{formatDate(data[0].createdAt)}</span></p>
                                            <p className='V_label ps-3 mb-0'>Delivery Date: <span className='V_label_value ps-2'>10/10/2024</span></p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className='VK_order_card my-3 my-sm-5'>
                            <div className='VK_order_product h-100 w-100  py-3'>
                                <div className="row m-0">
                                    {data.length > 0 && data[0] && data[0].addressData && data[0].addressData.length > 0 && (
                                        <div className="col-6 col-sm-4 V_right_border py-3">
                                            <div className='V_delivery_address_width'>
                                                <h1 className='V_delivery_address'>Delivery Address</h1>
                                                <p className='V_customer_name pt-3'>{data[0].addressData[0].name}</p>
                                                <p className='V_customer_address'>{`${data[0].addressData[0].landmark}, ${data[0].addressData[0].city}, ${data[0].addressData[0].state}, ${data[0].addressData[0].pincode}`}</p>
                                                <p className='V_customer_number'>+1 {data[0].addressData[0].contactNo}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div className="col-6 col-sm-4 V_right_border d-flex justify-content-center py-3">
                                        <div className="justify-content-start text-start">
                                            <h1 className='V_delivery_address'>Payment Details</h1>
                                            {data.length > 0 && data[0] && (
                                                <>
                                                    <p className='V_customer_name pt-3 pb-2 mb-0'>{data[0].paymentMethod}</p>
                                                    <p className='V_card_name mb-0 py-1'>Payment Status <span className='V_success'> Success </span></p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 py-3">
                                        <div className="V_invoice_width">
                                            <h1 className='V_invoice'>Invoice</h1>
                                            <p className='V_down_invoic mt-3'
                                            onClick={() => setInvoiceModal(true)}
                                             style={{ cursor: 'pointer', textDecoration: 'underline' }}>Download Invoice</p>
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

            {/* Invoice Modal */}
            <Modal show={invoiceModal} onHide={() => setInvoiceModal(false)} centered className='VK_add_address_model_'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 className='VK_add_address_model_heading'>Invoice Details</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-2 py-3'>
                        {data.length > 0 ? (
                            <div>
                                <p><strong>Order ID:</strong> #{data[0]._id}</p>
                                <p><strong>Order Date:</strong> {new Date(data[0].createdAt).toLocaleDateString()}</p>
                                <p><strong>Payment Method:</strong> {data[0].paymentMethod}</p>
                                <p><strong>Total Amount:</strong> ${data[0].totalAmount}</p>
                                <div className="mt-3 text-center">
                                    <a href={`${BaseUrl}/invoices/${data[0]._id}`} className="V_cancle_order_btn px-sm-3 px-md-4 py-2" download>
                                        Download Invoice
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <p>No invoice data available.</p>
                        )}
                    </div>
                </Modal.Body>
            </Modal>


            {/* Return Order Modal */}
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
                        <form onSubmit={otpVerification ? handleSubmitReturn : handleRequestOtp} className='w-100 VK_address_form'>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Order ID<span className='V_complasery'>*</span>
                                </span>
                                <input 
                                    type="text" 
                                    className='VK_from_input w-100 py-2 px-3 mt-2'
                                    value={returnRequest.orderId}
                                    readOnly
                                />
                            </div>
                            <div className='VK_name mb-4'>
                                <span className='VK_input_label pb-1'>
                                    Reason for Return <span className='V_complasery'>*</span>
                                </span>
                                <select 
                                    className='VK_from_input w-100 py-2 px-3 mt-2' 
                                    value={returnRequest.reasonForReturn}
                                    onChange={handleReasonChange}
                                    required
                                    disabled={otpVerification}
                                >
                                    <option value="">Select a reason</option>
                                    {reason && reason.map((item) => (
                                        <option key={item._id} value={item._id}>
                                            {item.reasonName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='VK_name mb-4'>
                                <span className='VK_input_label pb-1'>
                                    Mobile No <span className='V_complasery'>*</span>
                                </span>
                                <input 
                                    type="text" 
                                    className='VK_from_input w-100 py-2 px-3 mt-2'
                                    placeholder='Enter Mobile no..'
                                    value={returnRequest.mobileNo}
                                    onChange={handleMobileChange}
                                    required
                                    disabled={otpVerification}
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid 10-digit mobile number"
                                />
                            </div>
                            
                            {otpVerification && (
                                <div className="mb-3">
                                    <span className='text-dark d-block'>
                                        Enter OTP to return order
                                    </span>
                                    <div className='my-3 my-sm-4 d-flex gap-3 justify-content-between'>
                                        {[1, 2, 3, 4, 5, 6].map((num) => (
                                            <input
                                                key={num}
                                                type="text"
                                                className='V_otp_input1'
                                                maxLength="1"
                                                value={otp[`otp${num}`]}
                                                onChange={(e) => handleOtpChange(e, `otp${num}`)}
                                                onInput={(e) => handleInput(e, num-1)}
                                                pattern="[0-9]"
                                                required={otpVerification}
                                            />
                                        ))}
                                    </div>
                                    {otpError && <p className="text-danger small">{otpError}</p>}
                                </div>
                            )}
                            
                            <div className='mt-3 text-center'>
                                {!otpVerification ? (
                                    <button 
                                        type="submit" 
                                        className='VK_add_address_submit mt-4'
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Processing...' : 'Request for OTP'}
                                    </button>
                                ) : (
                                    <button 
                                        type="submit" 
                                        className='VK_add_address_submit mt-4'
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Processing...' : 'Verify & Submit'}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Return Success Modal */}
            <Modal
                show={successcard}
                onHide={handleCloseSuccessModal}
                centered
                className='VK_add_address_model_'
            >
                <Modal.Body>
                    <div className='p-2 py-3 text-center'>
                        <img src={require('../../assets/track return order.png')} alt="Return Request Successful" className='pt-5 pb-4' />
                        <p className='mb-0 V_success_modal'>Your request for return product has been <br />
                            successfully received</p>
                        <div className='mt-3 text-center'>
                            <Link to='/' className='V_order_success px-4 py-2 mt-3 mx-3 text-dark bg-white text-decoration-none'>
                                Back to Home
                            </Link>
                            <button 
                                type="button" 
                                onClick={() => navigate(`/returnrefund/${returnOrderId}`)} 
                                className='V_order_success px-4 py-2 mt-3 mx-3 text-white bg-dark'
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