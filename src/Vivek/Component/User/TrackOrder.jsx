    // import React, { useEffect, useState } from 'react';
    // import '../User/user.css';
    // import { Modal } from 'react-bootstrap';
    // import Header from '../../Component/header/Header.jsx'
    // import Footer from '../footer/Footer.jsx';
    // import { Link, useNavigate, useParams } from 'react-router-dom';
    // import axios from 'axios';


    // function TrackOrder() {

    //     const navigate = useNavigate();
    //     const { id } = useParams();

    //     const BaseUrl = process.env.REACT_APP_BASEURL;
    //     const token = localStorage.getItem('token');
    //     const [data, setData] = useState([]);
    //     const [reason, setReason] = useState([]);
    //     const [Cancel, setCancel] = useState({
    //         orderId: id,
    //         reasonForCancellationId: '',
    //         comments: '',
    //     });

    //     const [deletecard, setDeletecard] = useState(false);
    //     const [canclecard, setCanclecard] = useState(false);
    //     const [invoiceModal, setInvoiceModal] = useState(false);
    //     const [cancelComment, setCancelComment] = useState("");
    //     const [isSubmitting, setIsSubmitting] = useState(false);

    //     const handleCancelOrder = () => {
    //         // Reset form data when opening modal
    //         setCancel({
    //             orderId: id,
    //             reasonForCancellationId: '',
    //             comments: ''
    //         });
    //         setDeletecard(true); // Show the cancel order modal
    //     };

    //     // Handle reason selection
    //     const handleReasonChange = (e) => {
    //         setCancel({
    //             ...Cancel,
    //             reasonForCancellationId: e.target.value
    //         });
    //     };


    //     const handleSaveCancel = async (event) => {
    //         event.preventDefault();

    //         // Validate inputs before submission
    //         if (!Cancel.reasonForCancellationId || !cancelComment) {
    //             alert("Please select a reason and provide comments");
    //             return;
    //         }

    //         // Update the Cancel object with the comment from the state
    //         const cancelData = {
    //             ...Cancel,
    //             comments: cancelComment
    //         };

    //         setIsSubmitting(true);

    //         try {
    //             await axios.post(`${BaseUrl}/api/cancelleOrder`, cancelData, {
    //                 headers: { Authorization: `Bearer ${token}` },
    //             });

    //             // console.log("Order cancelled successfully", response.data);
    //             setIsSubmitting(false);
    //             setDeletecard(false);
    //             setCanclecard(true);
    //         } catch (error) {
    //             console.error("Error cancelling order:", error);
    //             setIsSubmitting(false);
    //             alert(error);
    //         }
    //     };


    //     const handleCloseSuccessModal = () => {
    //         setCanclecard(false); // Close the success modal
    //     };

    //     useEffect(() => {
    //         const fetchData = async () => {
    //             console.log("id", id)
    //             try {
    //                 const response = await axios.get(`${BaseUrl}/api/getOrder/${id}`, {
    //                     headers: { Authorization: `Bearer ${token}` },
    //                 });
    //                 // console.log("response>>>>>>>>>>>>>>>>>>", response.data)
    //                 setData(response.data.order);
    //             } catch (error) {
    //                 console.error('Data fetching failed:', error);
    //             }
    //         };
    //         fetchData();
    //     }, [id, BaseUrl, token]);

    //     useEffect(() => {
    //         const reason = async () => {
    //             try {
    //                 const response = await axios.get(`${BaseUrl}/api/allReasons`, {
    //                     headers: { Authorization: `Bearer ${token}` },
    //                 });
    //                 // console.log("response", response.data)
    //                 setReason(response.data.reasons);
    //             } catch (error) {
    //                 console.error('Data fetching failed:', error);
    //             }
    //         };
    //         reason();
    //     }, [BaseUrl, token]);

    //     useEffect(() => {
    //         // Update orderId in Cancel state when id changes
    //         setCancel(prev => ({
    //             ...prev,
    //             orderId: id
    //         }));
    //     }, [id]);

    //     const formatDate = (dateString) => {
    //         const date = new Date(dateString);
    //         const day = date.getDate().toString().padStart(2, '0');
    //         const month = (date.getMonth() + 1).toString().padStart(2, '0');
    //         const year = date.getFullYear();
    //         return `${day}/${month}/${year}`;
    //     };

    //     // Calculate expected delivery date (adding 5 days to order date)
    //     const calculateExpectedDelivery = (orderDate) => {
    //         const date = new Date(orderDate);
    //         date.setDate(date.getDate() + 5); // Adding 5 days for delivery
    //         return formatDate(date);
    //     };

    //     return (
    //         <React.Fragment>
    //             <Header />
    //             <section className='VK_user_profile mb-4 h-100 '>
    //                 <div className="d_container">
    //                     <h2 className='VK_trackorder_heading py-5 mb-0'>
    //                         Track Order
    //                     </h2>

    //                     {/* empty order */}
    //                     <div className='VK_my_order d-flex justify-content-center align-items-center h-100 d-none'>
    //                         <div className='VK_empty_order text-center'>
    //                             <div className='VK_empty_order_img'>
    //                                 <img src={require('../../assets/empty_cart.png')} alt="" />
    //                             </div>
    //                             <div>
    //                                 <p className='text-black fw-bold mb-1'>
    //                                     You have no orders
    //                                 </p>
    //                                 <p className='font_14 mb-4'>
    //                                     You have no order with us keep shopping with us
    //                                 </p>
    //                                 <button className='VK_empty_order_btn'>
    //                                     Continue Shopping
    //                                 </button>
    //                             </div>
    //                         </div>
    //                     </div>

    //                     {/* my order */}
    //                     <div>
    //                         <div className='VK_order_parent'>
    //                             <div className='VK_order_card my-sm-3'>
    //                                 <div className='V_pad'>
    //                                     <p className='m-0 fw-600 font_18'>
    //                                         Order Details
    //                                     </p>
    //                                 </div>
    //                                 <div className='d-flex justify-content-between flex-wrap align-items-center V_border_bottom '>
    //                                 </div>
    //                                 {data.map((item) => (
    //                                     <div key={item._id} className='VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap py-3'>
    //                                         <div className="row m-0 flex-lg-row flex-column-reverse w-100 ">
    //                                             <div className="col-lg-4 px-0">
    //                                                 <div className='d-flex'>
    //                                                     <div className='px-0'>
    //                                                         <img src={`${BaseUrl}/${item.productVariantData[0].images[0]}`} alt="" width="100px" height="120px" />
    //                                                     </div>
    //                                                     <div className='ps-2 ps-sm-4'>
    //                                                         <h1 className='V_full_pair'>{item.productData[0]?.productName || "Product Name"}</h1>
    //                                                         <p className='V_full_child_text mb-0'>{item.productVariantData[0]?.shortDescription || "No description available"}</p>
    //                                                         <div className='d-flex py-2'>
    //                                                             <p className='V_light mb-0 me-3'>
    //                                                                 {/* Color: &nbsp; */}
    //                                                                 <span className='V_xl'>
    //                                                                     {item.productVariantData[0]?.colorName?.split(',')[0] || "N/A"}
    //                                                                 </span>
    //                                                             </p>
    //                                                             <p className='V_light mb-0 '>
    //                                                                 {/* Color: &nbsp; */}
    //                                                                 <span className='V_xl'>
    //                                                                     {item.productVariantData[0]?.size?.split(',')[0] || "N/A"}
    //                                                                 </span>
    //                                                             </p>
    //                                                         </div>
    //                                                         <p className='V_track_order_price mb-0'>${item.totalAmount}</p>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                             <div className="col-lg-8 py-3 pt-lg-0 pt-xl-3 VK_subtrack position-relative VK_padding overflow-auto">
    //                                                 <div className='V_back-line4'></div>
    //                                                 <div className="d-flex justify-content-between px-md-3 px-lg-5">
    //                                                     <div className='text-center'>
    //                                                         <p className='V_confirmed mb-0'>Order Confirmed</p>
    //                                                         <img src={require('../../assets/ordered confirmed.png')} alt="" className='py-2' />
    //                                                         <p className='V_track_time mb-0'>{new Date(item.createdAt).toLocaleDateString()} <span>{new Date(item.createdAt).toLocaleTimeString()}</span></p>
    //                                                         <p className='V_order_description mb-0'>Your order has been placed.</p>
    //                                                     </div>
    //                                                     <div className='text-center'>
    //                                                         <p className='V_confirmed mb-0'>Shipped</p>
    //                                                         <img src={require('../../assets/shipped.png')} alt="" className='py-2' />
    //                                                         {/* <p className='V_track_time mb-0'>02 Oct, 2024 <span>5:21 PM </span></p> */}
    //                                                         <p className='V_order_description mb-0'>Your item has been shipped</p>
    //                                                     </div>
    //                                                     <div className='text-center'>
    //                                                         <p className='V_confirmed mb-0'>Out for Delivery</p>
    //                                                         <img src={require('../../assets/Out for Delivery logo.png')} alt="" className='py-2' />
    //                                                         {/* <p className='V_track_time mb-0'>05 Oct, 2024 <span>8:36 PM</span></p> */}
    //                                                     </div>
    //                                                     <div className='text-center'>
    //                                                         <p className='V_confirmed mb-0'>Delivered</p>
    //                                                         <img src={require('../../assets/delivered logo.png')} alt="" className='py-2' />
    //                                                         <p className='V_track_time mb-0'>10 Oct, 2024 <span>8:36 PM</span></p>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 ))}
    //                                 {data.map((item) => (
    //                                     <div key={item._id} className="V_pad pt-lg-3">
    //                                         <p className='V_label'>Order ID: <span className='V_label_value ps-2'>#{item._id}</span></p>
    //                                         <div className="d-flex flex-xl-nowrap">
    //                                             <p className='V_label mb-0'>Order Date: <span className='V_label_value ps-2'>{formatDate(item.createdAt)}</span></p>
    //                                             <p className='V_label ps-3 mb-0'>Expected Delivery: <span className='V_label_value ps-2'>{calculateExpectedDelivery(item.createdAt)}</span></p>
    //                                         </div>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         </div>
    //                         <div className='VK_order_card my-3 my-sm-5'>
    //                             <div className='VK_order_product h-100 w-100  py-3'>
    //                                 <div className="row m-0">
    //                                     <div className="col-6 col-sm-4 V_right_border py-3">
    //                                         <div className='V_delivery_address_width'>
    //                                             <h1 className='V_delivery_address'>Delivery Address</h1>
    //                                             {data.length > 0 && data[0].addressData && data[0].addressData.length > 0 ? (
    //                                                 <>
    //                                                     <p className='V_customer_name pt-3'>{data[0].addressData[0].name}</p>
    //                                                     <p className='V_customer_address'>{data[0].addressData[0].address}, {data[0].addressData[0].landmark}, {data[0].addressData[0].city}, {data[0].addressData[0].state}, {data[0].addressData[0].pincode}</p>
    //                                                     <p className='V_customer_number'>{data[0].addressData[0].contactNo}</p>
    //                                                 </>
    //                                             ) : (
    //                                                 <p className='V_customer_name pt-3'>No address data available</p>
    //                                             )}
    //                                         </div>
    //                                     </div>
    //                                     <div className="col-6 col-sm-4 V_right_border d-flex justify-content-center py-3">
    //                                         {data.map((item) => (
    //                                             <div key={item._id} className="justify-content-start text-start">
    //                                                 <h1 className='V_delivery_address'>Payment Details</h1>
    //                                                 {/* <p className='V_customer_name pt-3 pb-2 mb-0'>Debit Card</p>
    //                                             <p className='V_card_name mb-0 py-1'>Card Name <span className='V_ame_exp'>American Express </span></p>
    //                                             <p className='V_card_name mb-0 py-1'>Transaction ID <span className='V_ame_exp'> #123456789 </span></p> */}
    //                                                 <p className='V_card_name mb-0 py-1'>Payment Status <span className='V_success'> {item.paymentMethod} </span></p>
    //                                             </div>
    //                                         ))}
    //                                     </div>
    //                                     <div className="col-6 col-sm-4 py-3">
    //                                         <div className="V_invoice_width">
    //                                             <h1 className='V_invoice'>Invoice</h1>
    //                                             <p
    //                                                 className='V_down_invoic mt-3'
    //                                                 onClick={() => setInvoiceModal(true)}
    //                                                 style={{ cursor: 'pointer', textDecoration: 'underline' }}
    //                                             >
    //                                                 Download Invoice
    //                                             </p>
    //                                         </div>
    //                                         <div className='text-end'>
    //                                             <button type='submit' className='V_cancle_order_btn px-sm-3 px-md-4 py-2'
    //                                                 onClick={handleCancelOrder}
    //                                             >
    //                                                 Cancel Order
    //                                             </button>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </section>


    //             {/* Invoice Modal */}
    //             <Modal show={invoiceModal} onHide={() => setInvoiceModal(false)} centered className='VK_add_address_model_'>
    //                 <Modal.Header closeButton>
    //                     <Modal.Title>
    //                         <h5 className='VK_add_address_model_heading'>Invoice Details</h5>
    //                     </Modal.Title>
    //                 </Modal.Header>
    //                 <Modal.Body>
    //                     <div className='p-2 py-3'>
    //                         {data.length > 0 ? (
    //                             <div>
    //                                 <p><strong>Order ID:</strong> #{data[0]._id}</p>
    //                                 <p><strong>Order Date:</strong> {new Date(data[0].createdAt).toLocaleDateString()}</p>
    //                                 <p><strong>Payment Method:</strong> {data[0].paymentMethod}</p>
    //                                 <p><strong>Total Amount:</strong> ${data[0].totalAmount}</p>
    //                                 <div className="mt-3 text-center">
    //                                     <a href={`${BaseUrl}/invoices/${data[0]._id}`} className="V_cancle_order_btn px-sm-3 px-md-4 py-2" download>
    //                                         Download Invoice
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                         ) : (
    //                             <p>No invoice data available.</p>
    //                         )}
    //                     </div>
    //                 </Modal.Body>
    //             </Modal>


    //             {/* Cancel order modal */}
    //             <Modal
    //                 show={deletecard}
    //                 onHide={() => setDeletecard(false)}
    //                 aria-labelledby="contained-modal-title-vcenter"
    //                 centered
    //                 className='VK_add_address_model_'
    //             >
    //                 <Modal.Header closeButton>
    //                     <Modal.Title id="contained-modal-title-vcenter">
    //                         <h5 className='VK_add_address_model_heading'>
    //                             Cancel Order
    //                         </h5>
    //                     </Modal.Title>
    //                 </Modal.Header>
    //                 <Modal.Body>
    //                     <div className='p-2 py-3'>
    //                         <form action="" onSubmit={handleSaveCancel} className='w-100 VK_address_form'>
    //                             <div className='VK_name mb-4'>
    //                                 <span className='VK_input_label pb-1'>
    //                                     Reason for cancellation <span className='V_complasery'>*</span>
    //                                 </span>
    //                                 <select
    //                                     className='VK_from_input w-100 py-2 px-3 mt-2'
    //                                     value={Cancel.reasonForCancellationId}
    //                                     onChange={handleReasonChange}
    //                                     required
    //                                 >
    //                                     <option value="">Select a reason</option>
    //                                     {reason && reason.map((item) => (
    //                                         <option key={item._id} value={item._id}>
    //                                             {item.reasonName}
    //                                         </option>
    //                                     ))}
    //                                 </select>
    //                             </div>
    //                             <div className='VK_name mb-3'>
    //                                 <span className='VK_input_label pb-1'>
    //                                     Comments <span className='V_complasery'>*</span>
    //                                 </span>
    //                                 <textarea
    //                                     className='V_textarea w-100 py-2 px-3 mt-2'
    //                                     value={cancelComment}
    //                                     onChange={(e) => setCancelComment(e.target.value)}
    //                                     required
    //                                 >
    //                                 </textarea>
    //                             </div>
    //                             <div className='mt-5 text-center'>
    //                                 <button
    //                                     type="submit"
    //                                     className='VK_add_address_submit mt-4'
    //                                     disabled={isSubmitting}
    //                                 >
    //                                     {isSubmitting ? 'Processing...' : 'Save'}
    //                                 </button>
    //                             </div>
    //                         </form>
    //                     </div>
    //                 </Modal.Body>
    //             </Modal>



    //             {/* Cancel Success Modal */}
    //             <Modal
    //                 show={canclecard}
    //                 onHide={handleCloseSuccessModal}
    //                 centered
    //                 className='VK_add_address_model_'
    //             >
    //                 <Modal.Body>
    //                     <div className='p-2 py-3 text-center'>
    //                         <img src={require('../../assets/order cancle successfully.png')} alt="Order Cancelled Successfully" className='pt-5 pb-4' />
    //                         <p className='mb-0'>Your order has been cancelled successfully.</p>
    //                         <div className='mt-5 text-center'>
    //                             <Link to='/' type="submit" className='V_order_success px-4 py-2 mt-3 mx-3 text-dark bg-white text-decoration-none'
    //                             >
    //                                 Back to Home
    //                             </Link>
    //                             <button type="" onClick={() => navigate('/trackrefund')} className='V_order_success px-4 py-2 mt-3 mx-3 text-white bg-dark'
    //                             >
    //                                 Track Refund
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </Modal.Body>
    //             </Modal>


    //             <Footer />
    //         </React.Fragment >
    //     )
    // }

    // export default TrackOrder

    import React, { useEffect, useState } from 'react';
import '../User/user.css';
import { Modal } from 'react-bootstrap';
import Header from '../../Component/header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

function TrackOrder(props) {
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

    // Location tracking states
    const [currentLocation, setCurrentLocation] = useState(null);
    const [trackingEnabled, setTrackingEnabled] = useState(false);
    const [deliveryStatus, setDeliveryStatus] = useState('');
    const [lastUpdated, setLastUpdated] = useState(null);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    const [locationError, setLocationError] = useState('');
    const [showMap, setShowMap] = useState(false);

    const [deletecard, setDeletecard] = useState(false);
    const [canclecard, setCanclecard] = useState(false);
    const [invoiceModal, setInvoiceModal] = useState(false);
    const [cancelComment, setCancelComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

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
            await axios.post(`${BaseUrl}/api/cancelleOrder`, cancelData, {
                headers: { Authorization: `Bearer ${token}` },
            });

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

    // Fetch order tracking location
    const fetchCurrentLocation = async (trackingId) => {
        console.log("trackingId",trackingId);
        
        if (!trackingId) return;
        
        setIsLoadingLocation(true);
        setLocationError('');
        
        try {
            // Replace with your actual API endpoint for tracking
            const response = await axios.get(`${BaseUrl}/api/trackOrderLocation/${trackingId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            
            if (response.data && response.data.location) {
                setCurrentLocation(response.data.location);
                setDeliveryStatus(response.data.status);
                setLastUpdated(response.data.lastUpdated || new Date().toISOString());
                setTrackingEnabled(true);
                setShowMap(true);
            } else {
                setTrackingEnabled(false);
                setLocationError("Live tracking is not available for this order yet");
            }
        } catch (error) {
            console.error('Failed to fetch location data:', error);
            setTrackingEnabled(false);
            setLocationError("Unable to track this order at the moment. Please try again later.");
        } finally {
            setIsLoadingLocation(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getOrder/${id}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setData(response.data.order);
                
                console.log("response.data.order",response.data.order[0]._id);
                
                // Auto-fetch location if tracking number exists
                if (response.data.order) {
                    fetchCurrentLocation(response.data.order[0]._id);
                }
            } catch (error) {
                console.error('Data fetching failed:', error);
            }
        };
        fetchData();
    }, [id, BaseUrl, token]);

    useEffect(() => {
        const reason = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/allReasons`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
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

    // Start location tracking with interval updates if enabled
    useEffect(() => {
        let intervalId;
        
        if (trackingEnabled && data.length > 0) {
            // Initial fetch
            fetchCurrentLocation(data[0]._id);
            
            // Set up interval for updates (every 2 minutes)
            intervalId = setInterval(() => {
                fetchCurrentLocation(data[0]._id);
            }, 120000); // 2 minutes
        }
        
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [trackingEnabled, data]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // Calculate expected delivery date (adding 5 days to order date)
    const calculateExpectedDelivery = (orderDate) => {
        const date = new Date(orderDate);
        date.setDate(date.getDate() + 5); // Adding 5 days for delivery
        return formatDate(date);
    };

    // Format time for display
    const formatTime = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    
    // Format date and time together
    const formatDateTime = (dateString) => {
        if (!dateString) return 'Not available';
        const date = new Date(dateString);
        return `${formatDate(dateString)} ${formatTime(dateString)}`;
    };

    // Map component for location tracking
    const LocationMap = () => {
        if (!currentLocation || !trackingEnabled || !showMap) {
            return null;
        }
        
        return (
            <div className="map-container" style={{ height: '300px', width: '100%', position: 'relative', marginTop: '20px', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
                <Map 
                    google={props.google}
                    zoom={14}
                    initialCenter={{
                        lat: currentLocation.latitude,
                        lng: currentLocation.longitude
                    }}
                    center={{
                        lat: currentLocation.latitude,
                        lng: currentLocation.longitude
                    }}
                    containerStyle={{
                        position: 'relative',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    <Marker 
                        position={{
                            lat: currentLocation.latitude,
                            lng: currentLocation.longitude
                        }}
                        icon={{
                            // url: require('../../assets/delivery-truck.png'),
                            scaledSize: new props.google.maps.Size(40, 40)
                        }}
                    />
                </Map>
            </div>
        );
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
                    {data.length === 0 && (
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
                                    <button 
                                        className='VK_empty_order_btn'
                                        onClick={() => navigate('/')}
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* my order */}
                    {data.length > 0 && (
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
                                                            <img 
                                                                src={`${BaseUrl}/${item.productVariantData[0].images[0]}`} 
                                                                alt="Product" 
                                                                width="100px" 
                                                                height="120px" 
                                                            />
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
                                                            <p className='V_track_order_price mb-0'>${item.totalAmount}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 py-3 pt-lg-0 pt-xl-3 VK_subtrack position-relative VK_padding overflow-auto">
                                                    <div className='V_back-line4'></div>
                                                    <div className="d-flex justify-content-between px-md-3 px-lg-5">
                                                        <div className='text-center'>
                                                            <p className='V_confirmed mb-0'>Order Confirmed</p>
                                                            <img src={require('../../assets/ordered confirmed.png')} alt="Order confirmed" className='py-2' />
                                                            <p className='V_track_time mb-0'>{new Date(item.createdAt).toLocaleDateString()} <span>{new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></p>
                                                            <p className='V_order_description mb-0'>Your order has been placed.</p>
                                                        </div>
                                                        <div className='text-center'>
                                                            <p className='V_confirmed mb-0'>Shipped</p>
                                                            <img src={require('../../assets/shipped.png')} alt="Shipped" className='py-2' />
                                                            <p className='V_order_description mb-0'>Your item has been shipped</p>
                                                        </div>
                                                        <div className='text-center'>
                                                            <p className='V_confirmed mb-0'>Out for Delivery</p>
                                                            <img src={require('../../assets/Out for Delivery logo.png')} alt="Out for delivery" className='py-2' />
                                                        </div>
                                                        <div className='text-center'>
                                                            <p className='V_confirmed mb-0'>Delivered</p>
                                                            <img src={require('../../assets/delivered logo.png')} alt="Delivered" className='py-2' />
                                                            <p className='V_track_time mb-0'>10 Oct, 2024 <span>8:36 PM</span></p>
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
                                                <p className='V_label mb-0'>Order Date: <span className='V_label_value ps-2'>{formatDate(item.createdAt)}</span></p>
                                                <p className='V_label ps-3 mb-0'>Expected Delivery: <span className='V_label_value ps-2'>{calculateExpectedDelivery(item.createdAt)}</span></p>
                                            </div>
                                        </div>
                                    ))}
                                    
                                    {/* Live Tracking Section */}
                                    <div className="V_pad mt-4">
                                        <div className="location-tracking-container">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4 className="mb-0 fw-bold" style={{ fontSize: '18px' }}>Live Delivery Tracking</h4>
                                                <button 
                                                    className="btn btn-sm" 
                                                    style={{ 
                                                        backgroundColor: '#000', 
                                                        color: '#fff',
                                                        padding: '8px 15px',
                                                        borderRadius: '4px',
                                                        border: 'none'
                                                    }}
                                                    onClick={() => fetchCurrentLocation(data[0]?._id)}
                                                    disabled={isLoadingLocation}
                                                >
                                                    {isLoadingLocation ? 'Loading...' : trackingEnabled ? 'Refresh Location' : 'Show Live Location'}
                                                </button>
                                            </div>
                                            
                                            {locationError && (
                                                <div className="alert alert-warning" role="alert">
                                                    {locationError}
                                                </div>
                                            )}
                                            
                                            {trackingEnabled && currentLocation && (
                                                <div className="tracking-info p-3 mb-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p className="mb-2">
                                                                <strong>Current Status:</strong> 
                                                                <span className="ms-2 badge bg-primary">{deliveryStatus}</span>
                                                            </p>
                                                            <p className="mb-2">
                                                                <strong>Location:</strong> 
                                                                <span className="ms-2">{currentLocation.address || 'In transit'}</span>
                                                            </p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p className="mb-2">
                                                                <strong>Coordinates:</strong> 
                                                                <span className="ms-2">
                                                                    {currentLocation.latitude.toFixed(4)}, {currentLocation.longitude.toFixed(4)}
                                                                </span>
                                                            </p>
                                                            <p className="mb-0">
                                                                <strong>Last Updated:</strong> 
                                                                <span className="ms-2">{formatDateTime(lastUpdated)}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="d-flex justify-content-end mt-2">
                                                        <button 
                                                            className="btn btn-sm btn-outline-secondary"
                                                            onClick={() => setShowMap(!showMap)}
                                                        >
                                                            {showMap ? 'Hide Map' : 'Show Map'}
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                            
                                            <LocationMap />
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
                                                    <p className='V_card_name mb-0 py-1'>Payment Status <span className='V_success'> {item.paymentMethod} </span></p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-6 col-sm-4 py-3">
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
                                            <div className='text-end'>
                                                <button 
                                                    type='submit' 
                                                    className='V_cancle_order_btn px-sm-3 px-md-4 py-2'
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
                            <button type="" onClick={() => navigate('/trackrefund')} className='V_order_success px-4 py-2 mt-3 mx-3 text-white bg-dark'
                            >
                                Track Refund
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <Footer />
        </React.Fragment>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(TrackOrder);