import React, { useEffect, useState } from 'react';
import '../User/user.css';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { usePDF } from 'react-to-pdf';

function TrackReturnRefund() {
    const { id } = useParams(); // Get the returnOrder_id from URL parameters
    const [returnOrderData, setReturnOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showInvoice, setShowInvoice] = useState(false);

    // Initialize the PDF generation functionality
    const { toPDF, targetRef } = usePDF({
        filename: 'invoice.pdf',
        page: { margin: 10 }
    });

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchReturnOrderData = async () => {
            try {
                setLoading(true);
                // console.log("Fetching return order with id:", id);
                const response = await axios.get(`${BaseUrl}/api/getReturnOrder/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                // console.log("Return order API response:", response.data.returnOrder[0]);

                if (response.data && response.data.returnOrder && response.data.returnOrder.length > 0) {
                    setReturnOrderData(response.data.returnOrder[0]);
                } else {
                    setError("No return order found");
                }

                setLoading(false);
            } catch (err) {
                console.error("Error fetching return order data:", err);
                setError("Failed to load return order details. Please try again later.");
                setLoading(false);
            }
        };

        if (id) {
            fetchReturnOrderData();
        }
    }, [id, BaseUrl, token]);

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formatTime = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // Function to get status timeline data with proper status handling
    const getTimelineData = (data) => {
        if (!data) return null;

        // Create timeline based on returnOrderStatus and dates
        const createdDate = formatDate(data.createdAt);
        const createdTime = formatTime(data.createdAt);
        const updatedDate = formatDate(data.updatedAt);
        const updatedTime = formatTime(data.updatedAt);

        // Calculate expected dates for subsequent steps
        const receivedDate = new Date(data.createdAt);
        receivedDate.setDate(receivedDate.getDate() + 1);

        const refundInitiatedDate = new Date(data.createdAt);
        refundInitiatedDate.setDate(refundInitiatedDate.getDate() + 3);

        const refundCreditedDate = new Date(data.createdAt);
        refundCreditedDate.setDate(refundCreditedDate.getDate() + 5);

        // Determine current status
        const status = data.returnOrderStatus?.toLowerCase() || 'pending';

        // Map status to completed steps
        const statusMap = {
            'pending': ['initiated'],
            'picked up': ['initiated', 'pickedUp'],
            'received': ['initiated', 'pickedUp', 'received'],
            'refund initiated': ['initiated', 'pickedUp', 'received', 'refundInitiated'],
            'refund credited': ['initiated', 'pickedUp', 'received', 'refundInitiated', 'refundCredited']
        };

        const completedSteps = statusMap[status] || ['initiated'];

        return {
            initiated: {
                date: createdDate,
                time: createdTime,
                completed: completedSteps.includes('initiated')
            },
            pickedUp: {
                date: updatedDate,
                time: updatedTime,
                completed: completedSteps.includes('pickedUp')
            },
            received: {
                date: formatDate(receivedDate),
                time: '2:00 PM',
                completed: completedSteps.includes('received')
            },
            refundInitiated: {
                date: formatDate(refundInitiatedDate),
                time: '3:15 PM',
                completed: completedSteps.includes('refundInitiated')
            },
            refundCredited: {
                date: formatDate(refundCreditedDate),
                time: '11:30 AM',
                completed: completedSteps.includes('refundCredited')
            }
        };
    };

    const handleDownloadInvoice = () => {
        setShowInvoice(true);

        setTimeout(() => {
            toPDF();
            setTimeout(() => {
                setShowInvoice(false);
            }, 1000);
        }, 500);
    };

    const calculateInvoiceTotals = () => {
        let subtotal = 0;
        
        // Calculate subtotal from product variant data
        returnOrderData?.productVariantData?.forEach((variant, index) => {
            const quantity = returnOrderData?.items?.[index]?.quantity || 1;
            const price = variant?.originalPrice ? 
                (variant.originalPrice - (variant.originalPrice * variant.discountPrice / 100)) : 
                0;
            subtotal += price * quantity;
        });
        
        // If no subtotal was calculated but we have order data with totalAmount, use that
        if (subtotal === 0 && returnOrderData?.orderData?.[0]?.totalAmount) {
            subtotal = returnOrderData.orderData[0].totalAmount;
        }
        
        // Calculate tax amounts (assuming 9% each for SGST and CGST)
        const taxRate = 0.09; // 9%
        const sgstAmount = subtotal * taxRate;
        const cgstAmount = subtotal * taxRate;
        
        // Calculate total amount
        const totalAmount = subtotal + sgstAmount + cgstAmount;
        
        return {
            subtotal,
            sgstAmount,
            cgstAmount,
            totalAmount
        };
    };
    
    const { subtotal, sgstAmount, cgstAmount, totalAmount } = calculateInvoiceTotals();

    // Show loading state
    if (loading) {
        return (
            <React.Fragment>
                <Header />
                <section className='VK_user_profile mb-4 h-100'>
                    <div className="d_container text-center py-5">
                        <p>Loading return order details...</p>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }

    // Show error state
    if (error) {
        return (
            <React.Fragment>
                <Header />
                <section className='VK_user_profile mb-4 h-100'>
                    <div className="d_container text-center py-5">
                        <p className="text-danger">{error}</p>
                        <button className="VK_empty_order_btn" onClick={() => window.history.back()}>
                            Go Back
                        </button>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }

    // Show empty order state if no data returned
    if (!returnOrderData) {
        return (
            <React.Fragment>
                <Header />
                <section className='VK_user_profile mb-4 h-100 '>
                    <div className="d_container">
                        <h2 className='VK_trackorder_heading py-5 mb-0'>
                            My Order
                        </h2>
                        <div className='VK_my_order d-flex justify-content-center align-items-center h-100'>
                            <div className='VK_empty_order text-center'>
                                <div className='VK_empty_order_img'>
                                    <img src={require('../../assets/empty_cart.png')} alt="Empty cart" />
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
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }

    // Get timeline data
    const timeline = getTimelineData(returnOrderData);

    // Get product name and image
    const productName = returnOrderData.productData && returnOrderData.productData.length > 0
        ? returnOrderData.productData[0].productName
        : "Product";


    // Get return reason
    const returnReason = returnOrderData.cancellationData && returnOrderData.cancellationData.length > 0
        ? returnOrderData.cancellationData[0].reasonName
        : "Reason not specified";
    // console.log("returnOrderData.orderStatus",returnOrderData.returnOrderStatus);
    // Main content when data is loaded successfully
    return (
        <React.Fragment>
            <Header />
            <section className='VK_user_profile mb-4 h-100 '>
                <div className="d_container">
                    <h2 className='VK_trackorder_heading py-5 mb-0'>
                        My Order
                    </h2>

                    {/* my order */}
                    <div>
                        <div className='VK_order_parent'>
                            <div className='VK_order_card my-sm-3'>
                                <div className='V_pad'>
                                    <p className='m-0 fw-600 font_18'>
                                        Order Details
                                    </p>
                                </div>

                                <div className='d-flex justify-content-between flex-wrap align-items-center V_border_bottom'>
                                </div>
                                <div className='VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap py-3'>
                                    <div className="row m-0 flex-lg-row flex-column-reverse w-100">
                                        <div className="col-lg-4 px-0">
                                            <div className='d-flex'>
                                                <img src={`${BaseUrl}/${returnOrderData.productVariantData[0].images[0]}`} alt="" width="100px" height="120px" />
                                                <div className='ps-2 ps-sm-4'>
                                                    <h1 className='V_full_pair'>{productName}</h1>
                                                    <p className='V_full_child_text mb-0'>
                                                        {returnReason}
                                                    </p>
                                                    <div className='d-flex py-2'>
                                                        <p className='V_light mb-0 me-3'>
                                                            {/* Color: &nbsp; */}
                                                            <span className='V_xl'>
                                                                {returnOrderData.productVariantData[0]?.colorName?.split(',')[0] || "N/A"}
                                                            </span>
                                                        </p>
                                                        <p className='V_light mb-0 '>
                                                            {/* Color: &nbsp; */}
                                                            <span className='V_xl'>
                                                                {returnOrderData.productVariantData[0]?.size?.split(',')[0] || "N/A"}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <p className='V_track_order_price mb-0'>${totalAmount}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 py-3 VK_subtrack pt-lg-0 pt-xl-3 position-relative overflow-auto">
                                            <div className='V_back-line3'></div>
                                            <div className="d-flex justify-content-between px-md-3 px-lg-5">
                                                {/* Order Initiated Step */}
                                                <div className='text-center'>
                                                    <p className='V_confirmed mb-0'>Initiated</p>
                                                    <img
                                                        src={require('../../assets/ordered confirmed.png')}
                                                        alt=""
                                                        className='py-2'
                                                        style={{ opacity: returnOrderData.returnOrderStatus === 'Initiated' || returnOrderData.returnOrderStatus === 'Picked up' || returnOrderData.returnOrderStatus === 'Received' || returnOrderData.returnOrderStatus === 'Refund Initiated' || returnOrderData.returnOrderStatus === 'Refund Credited' ? 1 : 0.5 }}
                                                    />
                                                    {(returnOrderData.returnOrderStatus === 'Initiated' || returnOrderData.returnOrderStatus === 'Picked up' || returnOrderData.returnOrderStatus === 'Received' || returnOrderData.returnOrderStatus === 'Refund Initiated' || returnOrderData.returnOrderStatus === 'Refund Credited') && (
                                                        <>
                                                            <p className='V_track_time mb-0'>{new Date(returnOrderData.createdAt).toLocaleDateString()} <span>{new Date(returnOrderData.createdAt).toLocaleTimeString()}</span></p>
                                                            <p className='V_order_description mb-0'>Your order Has Been Placed.</p>
                                                        </>
                                                    )}
                                                </div>

                                                {/* Picked up Step */}
                                                <div className='text-center'>
                                                    <p className='V_confirmed mb-0'>Picked up</p>
                                                    <img
                                                        src={require('../../assets/shipped.png')}
                                                        alt=""
                                                        className='py-2'
                                                        style={{ opacity: returnOrderData.returnOrderStatus === 'Picked up' || returnOrderData.returnOrderStatus === 'Received' || returnOrderData.returnOrderStatus === 'Refund Initiated' || returnOrderData.returnOrderStatus === 'Refund Credited' ? 1 : 0.5 }}
                                                    />
                                                    {(returnOrderData.returnOrderStatus === 'Picked up' || returnOrderData.returnOrderStatus === 'Received' || returnOrderData.returnOrderStatus === 'Refund Initiated' || returnOrderData.returnOrderStatus === 'Refund Credited') && (
                                                        <>
                                                            {returnOrderData.shippedAt && (
                                                                <p className='V_track_time mb-0'>{new Date(returnOrderData.shippedAt).toLocaleDateString()} <span>{new Date(returnOrderData.shippedAt).toLocaleTimeString()}</span></p>
                                                            )}
                                                            <p className='V_order_description mb-0'>Your Item Has <br /> Been Picked Up</p>
                                                        </>
                                                    )}
                                                </div>

                                                {/*Received Step */}
                                                <div className='text-center'>
                                                    <p className='V_confirmed mb-0'>Received</p>
                                                    <img
                                                        src={require('../../assets/Out for Delivery logo.png')}
                                                        alt=""
                                                        className='py-2'
                                                        style={{ opacity: returnOrderData.returnOrderStatus === 'Received' || returnOrderData.returnOrderStatus === 'Refund Initiated' || returnOrderData.returnOrderStatus === 'Refund Credited' ? 1 : 0.5 }}
                                                    />
                                                    {(returnOrderData.returnOrderStatus === 'Received' || returnOrderData.returnOrderStatus === 'Refund Initiated' || returnOrderData.returnOrderStatus === 'Refund Credited') && (
                                                        <>
                                                            {returnOrderData.outForDeliveryAt && (
                                                                <p className='V_track_time mb-0'>{new Date(returnOrderData.outForDeliveryAt).toLocaleDateString()} <span>{new Date(returnOrderData.outForDeliveryAt).toLocaleTimeString()}</span></p>
                                                            )}
                                                            <p className='V_order_description mb-0'>Your Item Has <br /> Been Received</p>
                                                        </>
                                                    )}
                                                </div>

                                                {/* Refund Initiated Step */}
                                                <div className='text-center'>
                                                    <p className='V_confirmed mb-0'>Refund Initiated</p>
                                                    <img
                                                        src={require('../../assets/delivered logo.png')}
                                                        alt=""
                                                        className='py-2'
                                                        style={{ opacity: returnOrderData.returnOrderStatus === 'Refund Initiated' || returnOrderData.returnOrderStatus === 'Refund Credited' ? 1 : 0.5 }}
                                                    />
                                                    {(returnOrderData.returnOrderStatus === 'Refund Initiated' || returnOrderData.returnOrderStatus === 'Refund Credited') && (
                                                        <>
                                                            {returnOrderData.deliveredAt && (
                                                                <p className='V_track_time mb-0'>{new Date(returnOrderData.deliveredAt).toLocaleDateString()} <span>{new Date(returnOrderData.deliveredAt).toLocaleTimeString()}</span></p>
                                                            )}
                                                            <p className='V_order_description mb-0'>Your Money Is <br /> In Process</p>
                                                        </>
                                                    )}
                                                </div>

                                                {/* Refund Credited Step */}
                                                <div className='text-center'>
                                                    <p className='V_confirmed mb-0'>Refund Credited</p>
                                                    <img
                                                        src={require('../../assets/delivered logo.png')}
                                                        alt=""
                                                        className='py-2'
                                                        style={{ opacity: returnOrderData.returnOrderStatus === 'Refund Credited' ? 1 : 0.5 }}
                                                    />
                                                    {returnOrderData.returnOrderStatus === 'Refund Credited' && (
                                                        <>
                                                            {returnOrderData.deliveredAt && (
                                                                <p className='V_track_time mb-0'>{new Date(returnOrderData.deliveredAt).toLocaleDateString()} <span>{new Date(returnOrderData.deliveredAt).toLocaleTimeString()}</span></p>
                                                            )}
                                                            <p className='V_order_description mb-0'>Your Money Has <br /> Been Credited To Your Account</p>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="V_pad pt-lg-3">
                                    <p className='V_label'>Return ID: <span className='V_label_value ps-2'>#{returnOrderData._id}</span></p>
                                    <div className="d-flex flex-xl-nowrap">
                                        <p className='V_label mb-0'>Return Date: <span className='V_label_value ps-2'>{formatDate(returnOrderData.createdAt)}</span></p>
                                        {returnOrderData.orderData && returnOrderData.orderData.length > 0 && (
                                            <p className='V_label ps-3 mb-0'>Order Date: <span className='V_label_value ps-2'>{formatDate(returnOrderData.orderData[0].createdAt)}</span></p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='VK_order_card my-3 my-sm-5'>
                            <div className='VK_order_product h-100 w-100 py-3'>
                                <div className="row m-0">
                                    <div className="col-6 col-sm-4 V_right_border py-3">
                                        <div className='V_delivery_address_width'>
                                            <h1 className='V_delivery_address'>Picked  up Address</h1>
                                            {returnOrderData.userData && returnOrderData.userData.length > 0 && (
                                                <>
                                                    <p className='V_customer_name pt-3'>{returnOrderData.userData[0].name}</p>
                                                    <p className='V_customer_address'> {returnOrderData.addressData
                                                    [0].address}, {returnOrderData.addressData
                                                    [0].landmark}, {returnOrderData.addressData
                                                    [0].city}, {returnOrderData.addressData
                                                    [0].state}, {returnOrderData.addressData
                                                    [0].pincode}</p>
                                                    <p className='V_customer_number'>{returnOrderData.mobileNo || returnOrderData.returnOrderData.userData[0].mobileNo}</p>
                                                </>
                                            )}

                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 V_right_border d-flex justify-content-center py-3">
                                        <div className="justify-content-start text-start V_new_details">
                                            <h1 className='V_delivery_address'>Return Details</h1>
                                            <p className='V_customer_name pt-3 pb-2 mb-0'>Return Status</p>
                                            <p className='V_wed mb-0 py-1'>
                                                Status: <strong>{returnOrderData.returnOrderStatus}</strong>
                                            </p>
                                            <p className='V_wed mb-0 py-1'>
                                                Reason: {returnReason}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 py-3">
                                        <div className="V_invoice_width">
                                            <h1 className='V_invoice'>Invoice</h1>
                                            <p
                                                className='V_down_invoic mt-3'
                                                onClick={handleDownloadInvoice}
                                                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                            >
                                                Download Invoice
                                            </p>
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
                                                <h5 className="ds_in-name">{returnOrderData?.userData?.[0].name}</h5>
                                                <h6 className="ds_in-email">{returnOrderData?.userData?.[0].email}</h6>
                                                <h6 className="ds_in-email">+1 {returnOrderData?.userData?.[0].mobileNo}</h6>
                                            </div>
                                            <div className="d-flex justify-content-between mt-4 ds_in-flex-manage">
                                                <div>
                                                    <p className="ds_in-text mb-0">Invoice No</p>
                                                    <p className="ds_in-text mb-0">Invoice Date</p>
                                                    <p className="ds_in-text mb-0">Order ID</p>
                                                </div>
                                                <div className="text-end">
                                                    <p className="ds_in-text mb-0 text-dark fw-500">#123456</p>
                                                    <p className="ds_in-text mb-0 text-dark fw-500">{new Date(returnOrderData?.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}</p>
                                                    <p className="ds_in-text mb-0 text-dark fw-500">{returnOrderData?._id}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                                            <div className="ds_in-border h-100">
                                                <p className="ds_in-sold fw-500 mb-2">SOLD BY</p>
                                                <p className="ds_in-sold text-dark fw-600 mb-0">COCOBLU RETAIL LIMITED </p>
                                                <p className="ds_in-add text-dark fw-400">Renaissance industrial smart city, Kalyan Sape road, Thane, Maharashtra, 421302 IN</p>
                                            </div>
                                        </div> */}
                                        <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                                            <div className="ds_in-border h-100">
                                                <p className="ds_in-sold fw-500 mb-2">Picked up Address</p>
                                                <p className="ds_in-sold text-dark fw-600 mb-0">{returnOrderData?.addressData[0]?.name}</p>
                                                <p className="ds_in-add text-dark fw-400">{returnOrderData?.addressData[0] &&
                                                    `${returnOrderData.addressData[0].address}, ${returnOrderData.addressData[0].landmark}, 
                                                        ${returnOrderData.addressData[0].city}, ${returnOrderData.addressData[0].state}, 
                                                        ${returnOrderData.addressData[0].pincode}`
                                                }</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 mt-4">
                                            <div className="ds_in-border border-0 h-100">
                                                <p className="ds_in-sold fw-500 mb-2">Return Details</p>
                                                <p className='V_customer_name pt-3 pb-2 mb-0'>Return Status</p>
                                                <p className='V_wed mb-0 py-1'>
                                                    Status: <strong>{returnOrderData.returnOrderStatus}</strong>
                                                </p>
                                                <p className='V_wed mb-0 py-1'>
                                                    Reason: {returnReason}
                                                </p>
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
                                                    {returnOrderData?.productData?.map((product, index) => {
                                                        const variantData = returnOrderData?.productVariantData?.[index];
                                                        const itemData = returnOrderData?.items?.[index] || { quantity: 1 };

                                                        const price = variantData?.originalPrice ?
                                                            (variantData.originalPrice - (variantData.originalPrice * variantData.discountPrice / 100)).toFixed(2) :
                                                            0;

                                                        const itemTotal = (price * itemData.quantity).toFixed(2);

                                                        return (
                                                            <tr key={`${product._id}-${index}`}>
                                                                <td>
                                                                    <div className="ds_table-title">{product.productName}</div>
                                                                </td>
                                                                <td className="ds_table-quantity">{itemData.quantity}</td>
                                                                <td className="ds_table-price">${price}</td>
                                                                <td className="ds_table-price">${itemTotal}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div>
                                            <div className="ds_in-line mt-5"></div>
                                        </div>

                                        <div>
                                            <div className="d-flex justify-content-between flex-wrap align-items-end ">
                                                <div className="mt-4">
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

           

            <Footer />
        </React.Fragment>
    );
}

export default TrackReturnRefund;