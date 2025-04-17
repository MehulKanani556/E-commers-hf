import React, { useEffect,  useState } from 'react';
import '../User/user.css';
import { Modal } from 'react-bootstrap';
import Header from '../../Component/header/Header.jsx'
import Footer from '../footer/Footer.jsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { usePDF } from 'react-to-pdf';


function TrackOrder() {

    const navigate = useNavigate();
    const { id } = useParams();

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    const [reason, setReason] = useState([]);
    const [Cancel, setCancel] = useState({
        orderId: id,
        reasonForCancellationId: '',
        comments: '',
    });

    // Initialize the PDF generation functionality
    const { toPDF, targetRef } = usePDF({
        filename: 'invoice.pdf',
        page: { margin: 10 }
    });
    const [deletecard, setDeletecard] = useState(false);
    const [canclecard, setCanclecard] = useState(false);
    const [cancelComment, setCancelComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [cancelOrderId, setCancelOrderId] = useState('');
    const [showInvoice, setShowInvoice] = useState(false);

    const handleCancelOrder = () => {
        // Reset form data when opening modal
        setCancel({
            orderId: id,
            reasonForCancellationId: '',
            comments: ''
        });
        setDeletecard(true); // Show the cancel order modal
    };

    // Handle reason selection
    const handleReasonChange = (e) => {
        setCancel({
            ...Cancel,
            reasonForCancellationId: e.target.value
        });
    };


    const handleSaveCancel = async (event) => {
        event.preventDefault();

        // Validate inputs before submission
        if (!Cancel.reasonForCancellationId || !cancelComment) {
            alert("Please select a reason and provide comments");
            return;
        }

        // Update the Cancel object with the comment from the state
        const cancelData = {
            ...Cancel,
            comments: cancelComment
        };

        setIsSubmitting(true);

        try {
            const response = await axios.post(`${BaseUrl}/api/cancelleOrder`, cancelData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            // console.log("Order cancelled successfully", response.data);
            if (response.data.cancelOrder && response.data.cancelOrder._id) {
                setCancelOrderId(response.data.cancelOrder._id);
                // console.log("response.data.cancelOrder._id", response.data);
            }

            setIsSubmitting(false);
            setDeletecard(false);
            setCanclecard(true);
        } catch (error) {
            console.error("Error cancelling order:", error);
            setIsSubmitting(false);
            alert(error);
        }
    };


    const handleCloseSuccessModal = () => {
        setCanclecard(false); // Close the success modal
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getOrder/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                // console.log("response>>>>>>>>>>>>>>>>>>", response.data.order[0].trackingNumber)
                setData(response.data.order);
                if (response.data.order[0]?.trackingNumber) {
                    fetchTrackingInfo(response.data.order[0].trackingNumber);
                }
            } catch (error) {
                console.error('Data fetching failed:', error);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, BaseUrl, token]);

    const fetchTrackingInfo = async (trackingNumber) => {
        try {
            const response = await axios.get(`${BaseUrl}/api/tracking/${trackingNumber}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (response.data.status === 200 && response.data.trackingData) {
                const steps = response.data.trackingData.steps || [];

                // setTrackingSteps(steps);

                const status = updateOrderTrackingStatus(steps);
                setData((prevData) => {
                    const updatedOrder = { ...prevData[0], ...status };
                    return [updatedOrder];
                });
            }
        } catch (error) {
            console.error('Tracking Fetch Error:', error);
        }
    };
    const formatDateTime = (value) => {
        if (!value) return '';
        const date = new Date(value);
        const formattedDate = date.toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
        const formattedTime = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        return `${formattedDate} ${formattedTime}`;
    };

    const updateOrderTrackingStatus = (steps) => {
        const updatedStatus = {
            orderStatus: 'Confirmed', // Default
            shippedAt: null,
            outForDeliveryAt: null,
            deliveredAt: null
        };

        for (let step of steps) {
            const { description, date } = step;

            if (description.includes('Picked up')) {
                updatedStatus.orderStatus = 'Shipped';
                updatedStatus.shippedAt = formatDateTime(date);
            }

            if (description.includes('On FedEx vehicle for delivery')) {
                updatedStatus.orderStatus = 'outForDelivery';
                updatedStatus.outForDeliveryAt = formatDateTime(date);
            }

            if (description.includes('Ready for recipient pickup')) {
                updatedStatus.orderStatus = 'Delivered';
                updatedStatus.deliveredAt = formatDateTime(date);
            }
        }

        return updatedStatus;
    };

    const getStepStatus = (item, step) => {
        const now = new Date();
        const createdAt = new Date(item.createdAt);

        const isValidStep = (stepDate) => {
            const stepTime = new Date(stepDate);
            return stepTime >= createdAt && stepTime <= now;
        };

        switch (step) {
            case 'Confirmed':
                return createdAt <= now ? 'active' : '';
            case 'Shipped':
                return item.shippedAt && isValidStep(item.shippedAt) ? 'active' : '';
            case 'outForDelivery':
                return item.outForDeliveryAt && isValidStep(item.outForDeliveryAt) ? 'active' : '';
            case 'Delivered':
                return item.deliveredAt && isValidStep(item.deliveredAt) ? 'active' : '';
            default:
                return '';
        }
    };

    const getProgressWidth = (item) => {
        let progressWidth = '25%';

        if (getStepStatus(item, 'Delivered') === 'active') {
            progressWidth = '100%';
        } else if (getStepStatus(item, 'outForDelivery') === 'active') {
            progressWidth = '75%';
        } else if (getStepStatus(item, 'Shipped') === 'active') {
            progressWidth = '50%';
        }

        return progressWidth;
    };


    useEffect(() => {
        const reason = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/allReasons`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                // console.log("response", response.data)
                setReason(response.data.reasons);
            } catch (error) {
                console.error('Data fetching failed:', error);
            }
        };
        reason();
    }, [BaseUrl, token]);

    useEffect(() => {
        // Update orderId in Cancel state when id changes
        setCancel(prev => ({
            ...prev,
            orderId: id
        }));
    }, [id]);

    // const formatDate = (dateString) => {
    //     const date = new Date(dateString);
    //     const day = date.getDate().toString().padStart(2, '0');
    //     const month = (date.getMonth() + 1).toString().padStart(2, '0');
    //     const year = date.getFullYear();
    //     return `${day}/${month}/${year}`;
    // };

    // // Calculate expected delivery date (adding 5 days to order date)
    // const calculateExpectedDelivery = (orderDate) => {
    //     const date = new Date(orderDate);
    //     date.setDate(date.getDate() + 5); // Adding 5 days for delivery
    //     return formatDate(date);
    // };


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
                        Track Order
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
                                {data.map((item) => (
                                    <div key={item._id} className='VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap py-3'>
                                        <div className="row m-0 flex-lg-row flex-column-reverse w-100 ">
                                            <div className="col-lg-4 px-0">
                                                <div className='d-flex'>
                                                    <div className='px-0'>
                                                        <img src={`${BaseUrl}/${item.productVariantData[0].images[0]}`} alt="" width="100px" height="120px" />
                                                    </div>
                                                    <div className='ps-2 ps-sm-4'>
                                                        <h1 className='V_full_pair'>{item.productData[0]?.productName || "Product Name"}</h1>
                                                        <p className='V_full_child_text mb-0'>{item.productVariantData[0]?.shortDescription || "No description available"}</p>
                                                        <div className='d-flex py-2'>
                                                            <p className='V_light mb-0 me-3'>
                                                                {/* Color: &nbsp; */}
                                                                <span className='V_xl'>
                                                                    {item.productVariantData[0]?.colorName?.split(',')[0] || "N/A"}
                                                                </span>
                                                            </p>
                                                            <p className='V_light mb-0 '>
                                                                {/* Color: &nbsp; */}
                                                                <span className='V_xl'>
                                                                    {item.productVariantData[0]?.size?.split(',')[0] || "N/A"}
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <p className='V_track_order_price mb-0'>${item.totalAmount}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 py-3 pt-lg-0 pt-xl-3 VK_subtrack position-relative VK_padding overflow-auto">
                                                <div className='V_back-line4'>
                                                    <div className="progress-line" style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        height: '100%',
                                                        width: getProgressWidth(item),
                                                        backgroundColor: '#4CAF50',
                                                        transition: 'width 0.5s ease'
                                                    }}></div>
                                                </div>
                                                <div className="d-flex justify-content-between px-md-3 px-lg-5">
                                                    {/* Order Confirmed Step */}
                                                    <div className='text-center'>
                                                        <p className='V_confirmed mb-0'>Order Confirmed</p>
                                                        <img
                                                            src={require('../../assets/ordered confirmed.png')}
                                                            alt=""
                                                            className='py-2'
                                                            style={{ opacity: getStepStatus(item, 'Confirmed') === 'active' ? 1 : 0.5 }}
                                                        />
                                                        {getStepStatus(item, 'Confirmed') === 'active' && (
                                                            <>
                                                                <p className='V_track_time mb-0'>
                                                                    {/* {item.createdAt} */}
                                                                    <span>{formatDateTime(item.createdAt)}</span>
                                                                </p>
                                                                <p className='V_order_description mb-0'>Your order has been placed.</p>
                                                            </>
                                                        )}
                                                    </div>

                                                    {/* Shipped Step */}
                                                    <div className='text-center'>
                                                        <p className='V_confirmed mb-0'>Shipped</p>
                                                        <img
                                                            src={require('../../assets/shipped.png')}
                                                            alt=""
                                                            className='py-2'
                                                            style={{ opacity: getStepStatus(item, 'Shipped') === 'active' ? 1 : 0.5 }}
                                                        />
                                                        {item.shippedAt && (
                                                            <p className='V_track_time mb-0'>
                                                                <span>{item.shippedAt}</span>
                                                            </p>
                                                        )}
                                                        {getStepStatus(item, 'Shipped') === 'active' && (
                                                            <>
                                                                <p className='V_order_description mb-0'>Your item has been shipped</p>
                                                            </>
                                                        )}
                                                    </div>

                                                    {/* Out for Delivery Step */}
                                                    <div className='text-center'>
                                                        <p className='V_confirmed mb-0'>Out for Delivery</p>
                                                        <img
                                                            src={require('../../assets/Out for Delivery logo.png')}
                                                            alt=""
                                                            className='py-2'
                                                            style={{ opacity: getStepStatus(item, 'outForDelivery') === 'active' ? 1 : 0.5 }}
                                                        />
                                                        {item.outForDeliveryAt && (
                                                            <p className='V_track_time mb-0'>
                                                                <span> {item.outForDeliveryAt}</span>
                                                            </p>
                                                        )}
                                                        {getStepStatus(item, 'outForDelivery') === 'active' && (
                                                            <>
                                                                <p className='V_order_description mb-0'>Out for delivery</p>
                                                            </>
                                                        )}
                                                    </div>

                                                    {/* Delivered Step */}
                                                    <div className='text-center'>
                                                        <p className='V_confirmed mb-0'>Delivered</p>
                                                        <img
                                                            src={require('../../assets/delivered logo.png')}
                                                            alt=""
                                                            className='py-2'
                                                            style={{ opacity: getStepStatus(item, 'Delivered') === 'active' ? 1 : 0.5 }}
                                                        />
                                                        {item.deliveredAt && (
                                                            <p className='V_track_time mb-0'>
                                                                {/* {item.deliveredAt} */}
                                                                <span>{item.deliveredAt}</span>
                                                            </p>
                                                        )}
                                                        {getStepStatus(item, 'Delivered') === 'active' && (
                                                            <>
                                                                <p className='V_order_description mb-0'>Your item has been delivered</p>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {data.map((item) => (
                                    <div key={item._id} className="V_pad pt-lg-3">
                                        <p className='V_label'>Order ID: <span className='V_label_value ps-2'>#{item._id}</span></p>
                                        <div className="d-flex flex-xl-nowrap">
                                            <p className='V_label mb-0'>Order Date: <span className='V_label_value ps-2'>{formatDateTime(item.createdAt)}</span></p>
                                            <p className='V_label ps-3 mb-0'>Expected Delivery: <span className='V_label_value ps-2'>{item.deliveredAt}</span></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='VK_order_card my-3 my-sm-5'>
                            <div className='VK_order_product h-100 w-100  py-3'>
                                <div className="row m-0">
                                    <div className="col-6 col-sm-4 V_right_border py-3">
                                        <div className='V_delivery_address_width'>
                                            <h1 className='V_delivery_address'>Delivery Address</h1>
                                            {data.length > 0 && data[0].addressData && data[0].addressData.length > 0 ? (
                                                <>
                                                    <p className='V_customer_name pt-3'>{data[0].addressData[0].name}</p>
                                                    <p className='V_customer_address'>{data[0].addressData[0].address}, {data[0].addressData[0].landmark}, {data[0].addressData[0].city}, {data[0].addressData[0].state}, {data[0].addressData[0].pincode}</p>
                                                    <p className='V_customer_number'>{data[0].addressData[0].contactNo}</p>
                                                </>
                                            ) : (
                                                <p className='V_customer_name pt-3'>No address data available</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-4 V_right_border d-flex justify-content-center py-3">
                                        {data.map((item) => (
                                            <div key={item._id} className="justify-content-start text-start">
                                                <h1 className='V_delivery_address'>Payment Details</h1>
                                                <p className='V_customer_name pt-3 pb-2 mb-0'>Debit Card</p>
                                                <p className='V_card_name mb-0 py-1'>Card Name <span className='V_ame_exp'>American Express </span></p>
                                                <p className='V_card_name mb-0 py-1'>Transaction ID <span className='V_ame_exp'> #123456789 </span></p>
                                                <p className='V_card_name mb-0 py-1'>Payment Status <span className='V_success'> {item.paymentMethod} </span></p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-6 col-sm-4 py-3">
                                        <div className="V_invoice_width">
                                            <h1 className='V_invoice'>Invoice</h1>
                                            {data.length > 0 && (
                                                <p
                                                    className='V_down_invoic mt-3'
                                                    onClick={handleDownloadInvoice}
                                                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                                                >
                                                    Download Invoice
                                                </p>
                                            )}
                                        </div>
                                        <div className='text-end'>
                                            <button type='submit' className='V_cancle_order_btn px-sm-3 px-md-4 py-2'
                                                onClick={handleCancelOrder}
                                            >
                                                Cancel Order
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

            {/* Cancel order modal */}
            <Modal
                show={deletecard}
                onHide={() => setDeletecard(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='VK_add_address_model_'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h5 className='VK_add_address_model_heading'>
                            Cancel Order
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-2 py-3'>
                        <form action="" onSubmit={handleSaveCancel} className='w-100 VK_address_form'>
                            <div className='VK_name mb-4'>
                                <span className='VK_input_label pb-1'>
                                    Reason for cancellation <span className='V_complasery'>*</span>
                                </span>
                                <select
                                    className='VK_from_input w-100 py-2 px-3 mt-2'
                                    value={Cancel.reasonForCancellationId}
                                    onChange={handleReasonChange}
                                    required
                                >
                                    <option value="">Select a reason</option>
                                    {reason && reason.map((item) => (
                                        <option key={item._id} value={item._id}>
                                            {item.reasonName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='VK_name mb-3'>
                                <span className='VK_input_label pb-1'>
                                    Comments <span className='V_complasery'>*</span>
                                </span>
                                <textarea
                                    className='V_textarea w-100 py-2 px-3 mt-2'
                                    value={cancelComment}
                                    onChange={(e) => setCancelComment(e.target.value)}
                                    required
                                >
                                </textarea>
                            </div>
                            <div className='mt-5 text-center'>
                                <button
                                    type="submit"
                                    className='VK_add_address_submit mt-4'
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Processing...' : 'Save'}
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
                        <img src={require('../../assets/order cancle successfully.png')} alt="Order Cancelled Successfully" className='pt-5 pb-4' />
                        <p className='mb-0'>Your order has been cancelled successfully.</p>
                        <div className='mt-5 text-center'>
                            <Link to='/' type="submit" className='V_order_success px-4 py-2 mt-3 mx-3 text-dark bg-white text-decoration-none'
                            >
                                Back to Home
                            </Link>
                            <button
                                type="button"
                                onClick={() => navigate(`/trackrefund/${cancelOrderId}`)}
                                className='V_order_success px-4 py-2 mt-3 mx-3 text-white bg-dark'
                            >
                                Track Refund
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <Footer />
        </React.Fragment >
    )
}

export default TrackOrder