import React, { useEffect, useState } from 'react';
import '../User/user.css';
import { Modal } from 'react-bootstrap';
import Header from '../../Component/header/Header.jsx'
import Footer from '../footer/Footer.jsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { usePDF } from 'react-to-pdf';

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
    const [returnRequest, setReturnRequest] = useState({
        orderId: id,
        reasonForReturn: '',
        mobileNo: ''
    });
    // Initialize the PDF generation functionality
    const { toPDF, targetRef } = usePDF({
        filename: 'invoice.pdf',
        page: { margin: 10 }
    });
     const [showInvoice, setShowInvoice] = useState(false);
    const [returnOrderId, setReturnOrderId] = useState('');
    
    // OTP states and logic
    const [otpVerification, setOtpVerification] = useState(false);
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

    const handleOtpChange = (e, name) => {
        const value = e.target.value.replace(/[^0-9]/g, ''); // Only allow numbers
        setOtp((prev) => ({
            ...prev,
            [name]: value,
        }));
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
            // console.log("response", response.data);
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
                // console.log("response.data.reason",response.data.reasons);
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

    const handleKeyDown = (e, index) => {
        const inputs = document.querySelectorAll('.V_otp_input1');
    
        switch (e.key) {
            case "Backspace":
                if (e.target.value === "") {
                    if (index > 0) inputs[index - 1].focus();
                } else {
                    e.preventDefault();
                    const updatedOtp = { ...otp };
                    updatedOtp[`otp${index + 1}`] = '';
                    setOtp(updatedOtp);
                }
                break;
    
            case "ArrowLeft":
                e.preventDefault(); // prevent cursor move
                if (index > 0) inputs[index - 1].focus();
                break;
    
            case "ArrowRight":
                e.preventDefault(); // prevent cursor move
                if (index < inputs.length - 1) inputs[index + 1].focus();
                break;
    
            default:
                if (/^[0-9]$/.test(e.key)) {
                    setTimeout(() => {
                        if (index < inputs.length - 1) inputs[index + 1].focus();
                    }, 10);
                }
                break;
        }
    };    
    
    const handlePasteOtp = (e) => {
        e.preventDefault();
        const paste = e.clipboardData.getData('text').trim();
    
        if (/^\d{6}$/.test(paste)) {
            const updatedOtp = {};
            paste.split('').forEach((digit, idx) => {
                updatedOtp[`otp${idx + 1}`] = digit;
            });
            setOtp(updatedOtp);
    
            // Optional: Move focus to last box
            const inputs = document.querySelectorAll('.V_otp_input1');
            if (inputs[5]) inputs[5].focus();
        }
    };

    const calculateSubtotal = () => {
        // console.log("ordedata",orderData);

        return data[0]?.items?.reduce((total, item, index) => {
            const price = data[0]?.productVariantData[index]?.originalPrice -
                (data[0]?.productVariantData[index]?.originalPrice *
                    data[0]?.productVariantData[index]?.discountPrice / 100);
            return total + (price * item.quantity);
        }, 0) || 0;
    };

    const subtotal = calculateSubtotal();
    const sgstRate = 0.015; // 1.5%
    const cgstRate = 0.025; // 2.5%
    const sgstAmount = subtotal * sgstRate;
    const cgstAmount = subtotal * cgstRate;
    const totalAmount = subtotal + sgstAmount + cgstAmount;

    const handleDownloadInvoice = () => {
        setShowInvoice(true);

        setTimeout(() => {
            toPDF();
            setTimeout(() => {
                setShowInvoice(false);
            }, 1000); 
        }, 500);
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
                                            onClick={handleDownloadInvoice}
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

            <section ref={targetRef} style={{ display: showInvoice ? 'block' : 'none', position: showInvoice ? 'absolute' : 'fixed', left: '-9999px' }}>
                <div>
                    <div className="d_container">
                        <div className="mt-4">
                            <div className="row justify-content-center">
                                <div className="col-12 ">
                                    <div className="ds_in-bg">
                                        <h5 className="fw-bold">LOGO</h5>
                                        <div className="d-flex flex-wrap justify-content-between ">
                                            <div className="mt-4">
                                                <h5 className="ds_in-name">{data[0]?.userData?.[0].name}</h5>
                                                <h6 className="ds_in-email">{data[0]?.userData?.[0].email}</h6>
                                                <h6 className="ds_in-email">+1 {data[0]?.userData?.[0].mobileNo}</h6>
                                            </div>
                                            <div className="d-flex justify-content-between mt-4 ds_in-flex-manage">
                                                <div>
                                                    <p className="ds_in-text mb-0">Invoice No</p>
                                                    <p className="ds_in-text mb-0">Invoice Date</p>
                                                    <p className="ds_in-text mb-0">Order ID</p>
                                                </div>
                                                <div className="text-end">
                                                    <p className="ds_in-text mb-0 text-dark fw-500">#123456</p>
                                                    <p className="ds_in-text mb-0 text-dark fw-500">{new Date(data[0]?.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}</p>
                                                    <p className="ds_in-text mb-0 text-dark fw-500">{data[0]?._id}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                                            <div className="ds_in-border h-100">
                                                <p className="ds_in-sold fw-500 mb-2">SOLD BY</p>
                                                <p className="ds_in-sold text-dark fw-600 mb-0">COCOBLU RETAIL LIMITED </p>
                                                <p className="ds_in-add text-dark fw-400">Renaissance industrial smart city, Kalyan Sape road, Thane, Maharashtra, 421302 IN</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                                            <div className="ds_in-border h-100">
                                                <p className="ds_in-sold fw-500 mb-2">BILLED TO</p>
                                                <p className="ds_in-sold text-dark fw-600 mb-0">{data[0]?.addressData[0]?.name}</p>
                                                <p className="ds_in-add text-dark fw-400">{data[0]?.addressData[0] &&
                                                    `${data[0].addressData[0].address}, ${data[0].addressData[0].landmark}, 
                                                        ${data[0].addressData[0].city}, ${data[0].addressData[0].state}, 
                                                        ${data[0].addressData[0].pincode}`
                                                }</p>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                                            <div className="ds_in-border border-0 h-100">
                                                <p className="ds_in-sold fw-500 mb-2">SHIPPED TO</p>
                                                <p className="ds_in-sold text-dark fw-600 mb-0">{data[0]?.addressData[0]?.name}</p>
                                                <p className="ds_in-add text-dark fw-400">{data[0]?.addressData[0] &&
                                                    `${data[0].addressData[0].address}, ${data[0].addressData[0].landmark}, 
                                                    ${data[0].addressData[0].city}, ${data[0].addressData[0].state}, 
                                                    ${data[0].addressData[0].pincode}`
                                                }</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="ds_in-line mt-3"></div>
                                        </div>

                                        <div className="mt-4 ds_table-main">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="ds_table-th">Item</th>
                                                        <th className="ds_table-th">Qty.</th>
                                                        <th className="ds_table-th">Price</th>
                                                        <th className="ds_table-th">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data[0]?.productData?.map((product, index) => (
                                                        <tr key={product._id}>
                                                            <td>
                                                                <div className="ds_table-title">{product.productName}</div>
                                                                <div className="ds_table-desc">{data[0]?.productVariantData[index]?.shortDescription}</div>
                                                            </td>
                                                            <td className="ds_table-quantity">{data[0]?.items[index]?.quantity}</td>
                                                            <td className="ds_table-price"> ${data[0]?.productVariantData[index]?.originalPrice &&
                                                                (data[0].productVariantData[index].originalPrice -
                                                                    (data[0].productVariantData[index].originalPrice *
                                                                        data[0].productVariantData[index].discountPrice / 100))}</td>
                                                            <td className="ds_table-price"> ${(data[0]?.productVariantData[index]?.originalPrice &&
                                                                (data[0].productVariantData[index].originalPrice -
                                                                    (data[0].productVariantData[index].originalPrice *
                                                                        data[0].productVariantData[index].discountPrice / 100)) *
                                                                data[0]?.items[index]?.quantity).toFixed(2)}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div>
                                            <div className="ds_in-line mt-5"></div>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between flex-wrap align-items-end ">
                                                <div className="mt-4">
                                                    <h6 className="ds_in-method">Payment Method </h6>
                                                    <p className="ds_in-name mb-0">Bank Name : Bank Central Asia (BCA)</p>
                                                    <p className="ds_in-name mb-0">Card No. : 1234 5678 9123 4567</p>
                                                    <p className="ds_in-name mb-0">Name : Jhon Wick</p>
                                                </div>
                                                <div className="mt-4">
                                                    <div className="d-flex justify-content-between">
                                                        <div>
                                                            <p className="ds_in-sub">Sub Total</p>
                                                            {/* <p className="ds_in-sub">Discount</p> */}
                                                            <p className="ds_in-sub">SGST</p>
                                                            <p className="ds_in-sub">CGST</p>
                                                            <h6 className="ds_in-total">Total Amount</h6>
                                                        </div>
                                                        <div className="ms-5">
                                                            <p className="ds_in-sub fw-600 text-dark">${subtotal.toFixed(2)}</p>
                                                            {/* <p className="ds_in-sub fw-600" style={{ color: "#0F993E" }}>-$40.00</p> */}
                                                            <p className="ds_in-sub fw-600 text-dark">${sgstAmount.toFixed(2)}</p>
                                                            <p className="ds_in-sub fw-600 text-dark">${cgstAmount.toFixed(2)}</p>
                                                            <h6 className="ds_in-total">${totalAmount.toFixed(2)}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-5 text-center">
                                            <div>
                                                <p className="ds_in-thank mb-0">Thank you for shopping with us!</p>
                                                <p className="ds_in-thank ">Have a nice day &#128522;</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d_invoicefooter">
                        <p className="mb-0">If you have any questions, feel free to call customer care at +1 565 5656 565 or use Contact Us section.</p>
                    </div>
                </div>
            </section>


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
                                        {[1, 2, 3, 4, 5, 6].map((num, index) => (
                                            <input
                                                key={num}
                                                type="text"
                                                className='V_otp_input1'
                                                maxLength="1"
                                                value={otp[`otp${num}`]}
                                                onChange={(e) => handleOtpChange(e, `otp${num}`)}
                                                onInput={(e) => handleInput(e, index)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                pattern="[0-9]"
                                                required={otpVerification}
                                                onPaste={handlePasteOtp}
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