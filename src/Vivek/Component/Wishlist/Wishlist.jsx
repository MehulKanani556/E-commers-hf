import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './wishlist.css';
import '../common.css';
import { Col, Row } from 'react-bootstrap';
import { FaHeart, FaStar } from 'react-icons/fa6';
import axios from 'axios';

const Wishlist = () => {
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [wishlistdata, setWishlistdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWishlistData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${BaseUrl}/api/allwishList`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log("Response data:", response.data);

                // Transform the data to match your component's structure
                const transformedData = response.data.wishlist.map(item => {
                    // Extract product variant info
                    const variantData = item.productVariantData?.[0] || {};

                    // Extract colors from the colorName string if it exists
                    const colors = variantData.colorName ?
                        variantData.colorName.split(',') :
                        ["#FFFFFF"];

                    // Get the first image URL if available
                    const imageUrl = variantData.images && variantData.images.length > 0 ?
                        variantData.images[0].replace('public\\', '/') :
                        null;

                    return {
                        id: item._id,
                        name: item.productData?.[0]?.productName || "Product Name",
                        description: variantData.shortDescription || "Product Description",
                        price: variantData.discountPrice || 0,
                        old_price: variantData.originalPrice || 0,
                        rating: 4.5, // Default rating since it's not in your data
                        image: imageUrl,
                        color: colors,
                        stockStatus: item.productData?.[0]?.stockStatus || "Out of Stock"
                    };
                });

                setWishlistdata(transformedData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching wishlist data:", error);
                setIsLoading(false);
            }
        };

        fetchWishlistData();
    }, [BaseUrl, token]);

    const handleRemoveFromWishlist = async (wishlistId) => {
        try {
            await axios.delete(`${BaseUrl}/api/deleteWishList/${wishlistId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            // Update the state after successful removal
            setWishlistdata(prevData => prevData.filter(item => item.id !== wishlistId));

        } catch (error) {
            console.error("Error removing item from wishlist:", error);
        }
    };

    return (
        <React.Fragment>
            <Header />

            {isLoading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : wishlistdata.length === 0 ? (
                <div className='VK_empty_wishlist d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                        <img src={require('../../assets/empty wishlist.png')} alt="Empty Wishlist" />
                        <p className='mb-2 fw-600'>Your wishlist is empty!</p>
                        <p className='font_14'>Explore more and shortlist some items.</p>
                        <button className='VK_theme_btn'>Continue Shopping</button>
                    </div>
                </div>
            ) : (
                <section className='py-5'>
                    <div className='d_container'>
                        <Row>
                            <Col>
                                <h4>Wishlist</h4>
                            </Col>
                        </Row>
                        <Row>
                            {wishlistdata.map((item, index) => (
                                <Col xl={3} lg={4} sm={6} className='my-3' key={index}>
                                    <div className="VK_wishlist_boxshadow">
                                        <div className='VK_wishlist_parent'>
                                            <div className='VK_wishlist_img'>

                                                <img
                                                    src={`${BaseUrl}/${item.image}`}
                                                    className='w-100 h-100 object_cover object_top'
                                                    alt={item.name}
                                                />

                                            </div>
                                            <div className='VK_wishlist_bt'>
                                                <button
                                                    className='VK_wishlist_btn'
                                                    onClick={() => handleRemoveFromWishlist(item.id)}
                                                >
                                                    <FaHeart className='text-danger vk_IN' />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='VK_wislist_desc'>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <h5 className='m-0 VK_wishlist_cart_tit'>{item.name}</h5>
                                                <div className='VK_revire_desc d-inline-flex'>
                                                    <FaStar className='text-warning VK_icns' />
                                                    <span className='font_14'>{item.rating}</span>
                                                </div>
                                            </div>
                                            <p className='mb-2 font_14 fw-500'>{item.description}</p>
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div className='d-flex align-items-center gap-2'>
                                                    {item.color.map((color, ind) => (
                                                        <span
                                                            key={ind}
                                                            className='VK_wishlist_color_span d-inline-block'
                                                            style={{ backgroundColor: color }}
                                                        ></span>
                                                    ))}
                                                </div>
                                                <div className='d-flex align-items-end'>
                                                    <p className='m-0 fw-600 text-black'>${item.price}</p>
                                                    <p className='m-0 light_color font_14 ps-1'>
                                                        <strike>${item.old_price}</strike>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='mt-2'>
                                                <span className={`badge ${item.stockStatus === 'In Stock' ? 'bg-success' : 'bg-danger'}`}>
                                                    {item.stockStatus}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
            )}
            <Footer />
        </React.Fragment>
    );
};

export default Wishlist;