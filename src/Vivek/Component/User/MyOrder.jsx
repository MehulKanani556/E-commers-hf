import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyOrder = () => {
    const navigate = useNavigate();
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/getAllMyOrders`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log("API response", response.data);

                if (response.data.allMyOrders && Array.isArray(response.data.allMyOrders)) {
                    // Process the orders
                    const processedOrders = [];

                    response.data.allMyOrders.forEach(order => {
                        // For each order, process all items
                        order.items.forEach((item, itemIndex) => {
                            // Find corresponding product and variant data
                            const productData = order.productData.find(p => p._id === item.productId) || {};
                            const variantData = order.productVariantData.find(v => v._id === item.productVariantId) || {};
                            processedOrders.push({
                                id: `${order._id}-${itemIndex}`, // Create unique ID for each item in order
                                orderId: order._id,
                                name: productData.productName || "Unknown Product",
                                description: variantData.shortDescription || "No description available",
                                color: variantData.colorName ? variantData.colorName.split(',')[0] : null,
                                size: variantData.size ? variantData.size.split(',')[0] : null,
                                price: order.totalAmount || 0,
                                originalPrice: variantData.originalPrice || 0,
                                status: order.orderStatus === "Confirmed" ? "arriving" : order.orderStatus,
                                status_date: new Date(order.createdAt).toLocaleDateString('en-US', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric'
                                }),
                                message: getStatusMessage(order.orderStatus),
                                images: variantData.images && variantData.images.length > 0 ?
                                    variantData.images[0].replace(/\\/g, '/') : null,
                                // quantity: item.quantity || 1,
                                // specifications: variantData.specifications || {}
                            });
                        });
                    });

                    setOrders(processedOrders);
                    setFilteredOrders(processedOrders);
                }
            } catch (error) {
                console.error('Data fetching failed', error);
            }
        };

        fetchData();
    }, [BaseUrl, token]);

    // Helper function to generate appropriate status messages
    const getStatusMessage = (status) => {
        switch (status) {
            case 'Delivered':
                return 'Your item has been delivered successfully';
            case 'Cancelled':
                return 'Your item has been cancelled successfully';
            case 'Confirmed':
                return 'Your order is confirmed and will be shipped soon';
            default:
                return `Order status: ${status}`;
        }
    };

    const handle_filter = (e, orderby) => {
        const buttons = document.querySelectorAll('.VK_order_btn');
        buttons.forEach(button => button.classList.remove('VK_order_btn_active'));
        e.target.classList.add('VK_order_btn_active');

        if (orderby === 'All') {
            setFilteredOrders(orders);
        } else if (orderby === 'Delivered') {
            setFilteredOrders(orders.filter(el => el.status === 'Delivered'));
        } else if (orderby === 'Cancelled') {
            setFilteredOrders(orders.filter(el => el.status === 'Cancelled'));
        } else if (orderby === 'Progress') {
            setFilteredOrders(orders.filter(el => el.status === 'arriving'));
        }
    };

    const handleClick = (item) => {
        // console.log("item", item)

        const itemId = item.orderId;
        if (item.status === 'Delivered') {
            navigate('/ratereview');
        } else if (item.status === 'arriving') {
            navigate(`/trackorder/${itemId}`);
        } else if (item.status === 'Cancelled') {
            navigate('/trackrefund');
        }
    };

    // Calculate savings
    const calculateSavings = (originalPrice, discountPrice, quantity) => {
        const savings = (originalPrice - discountPrice) * quantity;
        return savings > 0 ? savings : 0;
    };

    return (
        <React.Fragment>
            <section className='VK_user_profile mb-4 h-100'>
                <h2 className='VK_profile_heading mb-4'>My Order</h2>

                {/* Filter buttons */}
                <div className='d-flex flex-wrap gap-3 mb-4'>
                    <button className='VK_order_btn VK_order_btn_active' onClick={(e) => handle_filter(e, 'All')}>
                        All
                    </button>
                    <button className='VK_order_btn' onClick={(e) => handle_filter(e, 'Progress')}>
                        In Progress
                    </button>
                    <button className='VK_order_btn' onClick={(e) => handle_filter(e, 'Delivered')}>
                        Delivered
                    </button>
                    <button className='VK_order_btn' onClick={(e) => handle_filter(e, 'Cancelled')}>
                        Cancelled
                    </button>
                </div>

                {/* Order list */}
                <div className='VK_order_parent'>
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map((item, index) => (
                            <div key={item.id} className='VK_order_card my-3'>
                                <div className='VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap'>
                                    <div className='VK_order_detail d-flex flex-sm-row flex-column'>
                                        <div>
                                            <img
                                                src={item.images ? `${BaseUrl}/${item.images}` : '/default-product.png'}
                                                className='VK_order_images object_cover'
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className='ps-sm-4 my-4 my-sm-0'>
                                            <h5 className='text-black fw-bold'>{item.name}</h5>
                                            <p className='font_14 mb-1 text-black fw-500'>{item.description}</p>
                                            {item.color && <p className='font_14 light_color mb-1'>Color: {item.color}</p>}
                                            {item.size && <p className='font_14 light_color mb-1'>Size: {item.size}</p>}
                                            {/* <p className='font_14 light_color mb-1'>Quantity: {item.quantity}</p> */}

                                            {/* Display specifications if available */}
                                            {/* {Object.keys(item.specifications).length > 0 && (
                                            <div className='mt-2'>
                                                <p className='font_14 mb-1 fw-500'>Specifications:</p>
                                                {Object.entries(item.specifications).map(([key, value]) => (
                                                    <p key={key} className='font_14 light_color mb-0'>{key}: {value}</p>
                                                ))}
                                            </div>
                                        )} */}
                                        </div>
                                    </div>
                                    <div className='VK_order_price'>
                                        <p className='m-0 fw-bold'>${item.price}</p>
                                        {/* {item.originalPrice > item.price && (
                                        <>
                                            <p className='m-0 text-decoration-line-through text-muted font_14'>${item.originalPrice}</p>
                                            <p className='m-0 text-success font_14'>
                                                Save: ${calculateSavings(item.originalPrice, item.price, item.quantity)}
                                            </p>
                                        </>
                                    )} */}
                                    </div>
                                    <div className='VK_order_status ms-xl-0 ms-auto mt-xl-0 mt-4'>
                                        <div className='h-100 d-flex flex-column'>
                                            <h4 className='d-flex flex-wrap align-items-center'>
                                                <span className='VK_order_dots me-sm-3 me-2'></span>
                                                <span className={`VK_order_stu ${item.status === 'Delivered' ? 'text-success' :
                                                        item.status === 'arriving' ? 'text-warning' :
                                                            item.status === 'Cancelled' ? 'text-danger' : ''
                                                    }`}>
                                                    Order {item.status}
                                                </span>
                                                <span className='VK_order_date ps-2'>On {item.status_date}</span>
                                            </h4>
                                            <p className='font_14 fw-bold light_color'>{item.message}</p>
                                            <p className='mt-auto text-end m-0 font_16 VK_track fw-500'>
                                                <div className='mv_other_page' onClick={() => handleClick(item)}>
                                                    {item.status === 'Delivered'
                                                        ? 'Add Rate & Review'
                                                        : item.status === 'arriving'
                                                            ? 'Track Order'
                                                            : item.status === 'Cancelled'
                                                                ? 'View refund status'
                                                                : null}
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No orders found</p>
                    )}
                </div>
            </section>
        </React.Fragment>
    );
};

export default MyOrder;