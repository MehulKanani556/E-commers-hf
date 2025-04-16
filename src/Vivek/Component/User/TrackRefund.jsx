import React, { useEffect, useState } from 'react';
import '../User/user.css';
import { Modal } from 'react-bootstrap';
import Header from '../../Component/header/Header.jsx'
import Footer from '../footer/Footer.jsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function TrackRefund() {
    const navigate = useNavigate();
    const { id } = useParams();
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    const [invoiceModal, setInvoiceModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getCancelledOrder/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                // console.log("response----------",response.data.cancelleOrder);
                const order = response.data.cancelleOrder;
                if (Array.isArray(order)) {
                    setData(order);
                } else if (order) {
                    setData([order]); // wrap in array if it's a single object
                } else {
                    setData([]);
                }
            } catch (error) {
                console.error('Data fetching failed:', error);
                setData([]); // ensure it's always an array even on error
            }
        };
        fetchData();
    }, [id, BaseUrl, token]);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    return (
        <React.Fragment>
            <Header />
            <section className='VK_user_profile mb-4 h-100 '>
                <div className="d_container">
                    <h2 className='VK_trackorder_heading py-5 mb-0'>
                        Track Refund
                    </h2>

                    {/* empty order */}
                    {Array.isArray(data) && data.length === 0 ? (
                        <div className='VK_my_order d-flex justify-content-center align-items-center h-100'>
                            <div className='VK_empty_order text-center'>
                                <div className='VK_empty_order_img'>
                                    <img src={require('../../assets/empty_cart.png')} alt="" />
                                </div>
                                <div>
                                    <p className='text-black fw-bold mb-1'>
                                        You have no refunds
                                    </p>
                                    <p className='font_14 mb-4'>
                                        You have no refunds with us, keep shopping with us
                                    </p>
                                    <Link to="/">
                                        <button className='VK_empty_order_btn'>
                                            Continue Shopping
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* my order */
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
                                    {Array.isArray(data) && data.map((item) => (
                                        <div key={item._id} className='VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap  py-3'>
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
                                                            <p className='V_track_order_price mb-0'>${item.orderData[0].totalAmount}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 VK_subtrack py-3 pt-lg-0 pt-xl-3 position-relative overflow-auto">
                                                    <div className='V_back-line'></div>
                                                    <div className="d-flex justify-content-between px-md-3 px-lg-5 ">
                                                        <div className='text-center'>
                                                            <p className='V_confirmed mb-0'>Refund Initiated</p>
                                                            <img
                                                                src={require('../../assets/ordered confirmed.png')}
                                                                alt=""
                                                                className='py-2'
                                                                style={{ opacity: item.cancelOrderStatus === 'Refund Initiated' || item.cancelOrderStatus === 'Refund In Progress' || item.cancelOrderStatus === 'Refund Credited' ? 1 : 0.5 }}
                                                            />
                                                            {(item.cancelOrderStatus === 'Refund Initiated' || item.cancelOrderStatus === 'Refund In Progress' || item.cancelOrderStatus === 'Refund Credited') && (
                                                                <p className='V_track_time mb-0'>
                                                                    {item.refundInitiatedAt ? formatDate(item.refundInitiatedAt) : formatDate(item.createdAt)}
                                                                    <span>{item.refundInitiatedAt ? formatTime(item.refundInitiatedAt) : formatTime(item.createdAt)}</span>
                                                                </p>
                                                            )}
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="V_confirmed mb-0">Refund In Progress</p>
                                                            <img
                                                                src={require('../../assets/refund in process.png')}
                                                                alt="Refund In Progress"
                                                                className="py-2"
                                                                style={{
                                                                    opacity:
                                                                        item.cancelOrderStatus === 'Refund In Progress' ||
                                                                            item.cancelOrderStatus === 'Refund Credited'
                                                                            ? 1
                                                                            : 0.5,
                                                                }}
                                                            />
                                                            {(item.cancelOrderStatus === 'Refund In Progress' ||
                                                                item.cancelOrderStatus === 'Refund Credited') && (
                                                                    <p className="V_track_time mb-0">
                                                                        {item.refundProcessingAt ? formatDate(item.refundProcessingAt) : ''}
                                                                        <span>
                                                                            {item.refundProcessingAt ? formatTime(item.refundProcessingAt) : ''}
                                                                        </span>
                                                                    </p>
                                                                )}
                                                        </div>
                                                        <div className='text-center'>
                                                            <p className='V_confirmed mb-0'>Refund Credited</p>
                                                            <img
                                                                src={require('../../assets/delivered logo.png')}
                                                                alt=""
                                                                className='py-2'
                                                                style={{ opacity: item.cancelOrderStatus === 'Refund Credited' ? 1 : 0.5 }}
                                                            />
                                                            {item.cancelOrderStatus === 'Refund Credited' && (
                                                                <p className='V_track_time mb-0'>
                                                                    {item.refundCompletedAt ? formatDate(item.refundCompletedAt) : ''}
                                                                    <span>{item.refundCompletedAt ? formatTime(item.refundCompletedAt) : ''}</span>
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="V_pad pt-lg-3">
                                                <p className='V_label'>Order ID: <span className='V_label_value ps-2'>#{item._id}</span></p>
                                                <p className='V_label mb-0'>Order Date: <span className='V_label_value ps-2'>{formatDate(item.createdAt)}</span></p>
                                                {item.cancelledAt && (
                                                    <p className='V_label mb-0'>Cancelled Date: <span className='V_label_value ps-2'>{formatDate(item.cancelledAt)}</span></p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='VK_order_card my-3 my-sm-5'>
                                <div className='VK_order_product h-100 w-100 py-3'>
                                    <div className="row m-0">
                                        <div className="col-6 V_right_border py-3">
                                            <div className='V_delivery_address_width'>
                                                <h1 className='V_delivery_address'>Delivery Address</h1>
                                                {data.length > 0 && data[0].userData?.length > 0 && data[0].addressData?.length > 0 ? (
                                                    <>
                                                        <p className='V_customer_name pt-3'>{data[0].userData[0].name}</p>
                                                        <p className='V_customer_address'>
                                                            {data[0].addressData[0].address}, {data[0].addressData[0].landmark}, {data[0].addressData[0].city}, {data[0].addressData[0].state} - {data[0].addressData[0].pincode}
                                                        </p>
                                                        <p className='V_customer_number'>{data[0].addressData[0].contactNo}</p>
                                                    </>
                                                ) : (
                                                    <p className='V_customer_name pt-3'>No address data available</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-6 py-3">
                                            <div className="V_invoice_width">
                                                <h1 className='V_invoice'>Invoice</h1>
                                                <p
                                                    className='V_down_invoic mt-3'
                                                    onClick={() => setInvoiceModal(true)}
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
                    )}
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
                                <p><strong>Order Date:</strong> {formatDate(data[0].createdAt)}</p>
                                <p><strong>Payment :</strong> {data[0].orderData[0].paymentMethod}</p>
                                <p><strong>Total Amount:</strong> ${data[0].orderData[0].totalAmount}</p>
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

            <Footer />
        </React.Fragment>
    )
}

export default TrackRefund