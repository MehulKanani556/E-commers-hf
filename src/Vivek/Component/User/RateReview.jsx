import React, { useState, useEffect } from 'react';
import '../User/user.css';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import { FaStar } from 'react-icons/fa6';
import axios from 'axios';

function RateReview() {
    const location = useLocation();
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');
    const orderData = location.state?.orderData || null;

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');
    const [images, setImages] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    // Initialize formData with the correct productId and productVariantId
    const [formData, setFormData] = useState({
        productId: orderData?.productId || '',
        productVariantId: orderData?.productVariantId || '',
        rating: '',
        review: '',
        productImages: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("orderData", orderData);
                if (orderData && orderData.productId) {
                    const response = await axios.get(`${BaseUrl}/api/getProduct/${orderData.productId}`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    console.log("response>>>>>>>>>>>>>>>>>>", response.data);
                    setData(response.data);
                } else {
                    console.error("No productId available in orderData");
                }
            } catch (error) {
                console.error('Data fetching failed:', error);
            }
        };
        fetchData();
    }, [BaseUrl, token, orderData]);

    useEffect(() => {
        // Update formData when orderData changes
        if (orderData) {
            setFormData({
                productId: orderData.productId || '',
                productVariantId: orderData.productVariantId || '',
                rating: '',
                review: '',
            });
        }
    }, [orderData]);

    // Handle rating selection
    const handleRatingClick = (ratingValue) => {
        setRating(ratingValue);
        setFormData(prevData => ({
            ...prevData,
            rating: ratingValue.toString() // Convert to string as per backend requirement
        }));
    };

    // Handle review text
    const handleReviewChange = (e) => {
        const reviewText = e.target.value;
        setReview(reviewText);
        setFormData(prevData => ({
            ...prevData,
            review: reviewText
        }));
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.multiple = true;
        fileInput.accept = 'image/*';
        
        fileInput.onchange = (e) => {
            const files = Array.from(e.target.files);
            if (files.length > 0) {
                // Limit to 5 images
                const totalFiles = [...imageFiles, ...files].slice(0, 5);
                setImageFiles(totalFiles);
                
                // Create preview URLs for the images
                const newImageUrls = files.map(file => URL.createObjectURL(file));
                setImages(prevImages => [...prevImages, ...newImageUrls].slice(0, 5));
            }
        };
        
        fileInput.click();
    };

    // Remove an image
    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
        
        const newImageFiles = [...imageFiles];
        newImageFiles.splice(index, 1);
        setImageFiles(newImageFiles);
    };

    // Clear form fields
    const clearForm = () => {
        setFormData({
            productId: orderData?.productId || '',
            productVariantId: orderData?.productVariantId || '',
            rating: '',
            review: '',
            productImages: null
        });
        setRating(0);
        setHover(0);
        setReview('');
        setImages([]);
        setImageFiles([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Form validation
        if (!formData.rating) {
            setError('Please select a rating');
            setLoading(false);
            return;
        }

        if (!formData.review.trim()) {
            setError('Please write a review');
            setLoading(false);
            return;
        }

        try {
            // Create multipart form data to send files
            const submitFormData = new FormData();
            submitFormData.append('productId', formData.productId);
            submitFormData.append('productVariantId', formData.productVariantId);
            submitFormData.append('rating', formData.rating);
            submitFormData.append('review', formData.review);
            
            // Append each image file
            imageFiles.forEach(file => {
                submitFormData.append('productImages', file);
            });

            console.log("Submitting form data:", formData);
            console.log("Sending files:", imageFiles);
            
            const response = await axios.post(
                `${BaseUrl}/api/createRatingAndReview`,
                submitFormData,
                { 
                    headers: { 
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    } 
                }
            );

            console.log('Response:', response.data);

            if (response.status === 200) {
                setSuccess('Your review has been submitted successfully.');
                clearForm();
            }
        } catch (err) {
            console.error('API Error:', err);
            setError(err.response?.data?.message || 'Failed to submit review. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // If no order data was passed, show appropriate message
    if (!orderData) {
        return (
            <React.Fragment>
                <Header />
                <section className='VK_user_profile mb-4 h-100'>
                    <div className="d_container">
                        <h2 className='VK_trackorder_heading pt-5 pb-3 mb-0'>
                            Rate & Review
                        </h2>
                        <div className='VK_my_order d-flex justify-content-center align-items-center h-100'>
                            <div className='VK_empty_order text-center'>
                                <div className='VK_empty_order_img'>
                                    <img src={require('../../assets/empty_cart.png')} alt="Empty cart" />
                                </div>
                                <div>
                                    <p className='text-black fw-bold mb-1'>
                                        No product selected for review
                                    </p>
                                    <p className='font_14 mb-4'>
                                        Please select a product from your orders to review
                                    </p>
                                    <button className='VK_empty_order_btn'>
                                        Return to My Orders
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

    return (
        <React.Fragment>
            <Header />
            <section className='VK_user_profile mb-4 h-100'>
                <div className="d_container">
                    <h2 className='VK_trackorder_heading pt-5 pb-3 mb-0'>
                        Rate & Review
                    </h2>

                    {success && (
                        <div className="alert alert-success" role="alert">
                            {success}
                        </div>
                    )}

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    <div>
                        <div className='VK_order_parent'>
                            <div className='my-sm-3'>
                                <div className='VK_order_product h-100 w-100 justify-content-between d-flex flex-wrap py-3'>
                                    <div className="row m-0 flex-lg-row flex-column-reverse w-100">
                                        <div className="col">
                                            <div className='d-flex'>
                                                <div className='px-2'>
                                                    <img
                                                        src={orderData.images ? `${BaseUrl}/${orderData.images}` : require('../../assets/order1.png')}
                                                        alt={orderData.name}
                                                        width="120px"
                                                        height="140px"
                                                        className="object_cover"
                                                    />
                                                </div>
                                                <div className='ps-2 ps-sm-4 align-content-center pb-3'>
                                                    <h1 className='V_full_pair_review'>{orderData.name}</h1>
                                                    <div className='d-flex '>
                                                        <div className='V_bg_star '>
                                                            <p className='mb-0 px-2 d-flex align-items-center'>
                                                                <FaStar className='V_star justify-items-center '></FaStar>
                                                                <span className='ps-2 fw-bolder'>
                                                                    {data && data.product && data.product[0]?.ratingData && data.product[0]?.ratingData[0]?.rating ?
                                                                        data.product[0].ratingData[0].rating : "0.0"}
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className='px-3 fw-bold'>
                                                            ({data && data.product && data.product[0]?.ratingData ?
                                                                data.product[0].ratingData.length : "0"})
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='pt-5 ps-2 VK_border_bottom1'>
                                                <h1 className='V_rate_this'>
                                                    Rate this Product
                                                </h1>
                                                <div className="d-flex">
                                                    {[...Array(5)].map((star, i) => {
                                                        const ratingValue = i + 1;
                                                        return (
                                                            <FaStar
                                                                key={i}
                                                                className={`V_star_size pe-2 ${ratingValue <= (hover || rating) ? 'V_star' : 'V_star_size1'}`}
                                                                onClick={() => handleRatingClick(ratingValue)}
                                                                onMouseEnter={() => setHover(ratingValue)}
                                                                onMouseLeave={() => setHover(0)}
                                                            />
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div>
                                                    <h1 className='pt-5 V_rev'>Review</h1>
                                                    <textarea
                                                        className='V_review_textarea py-2 px-3 mt-2'
                                                        placeholder='Write your feedback'
                                                        value={review}
                                                        onChange={handleReviewChange}
                                                    />
                                                </div>
                                                <div>
                                                    <h1 className='pt-5 V_rev'>Add Photo or Video</h1>
                                                </div>
                                                <div className='d-flex flex-wrap'>
                                                    {images.length > 0 && images.map((image, index) => (
                                                        <div key={index} className='pe-3 pb-5 pt-3 position-relative'>
                                                            <img 
                                                                src={image} 
                                                                alt={`uploaded-${index}`} 
                                                                width="78px" 
                                                                height="85px" 
                                                                className="object-fit-cover"
                                                            />
                                                            <img
                                                                src={require('../../assets/cancle button.png')}
                                                                alt="cancel"
                                                                className='V_cancle'
                                                                onClick={() => removeImage(index)}
                                                            />
                                                        </div>
                                                    ))}
                                                    {images.length < 5 && (
                                                        <div className='pb-5 pt-3'>
                                                            <span
                                                                className='V_add_image d-flex align-self-center justify-content-center'
                                                                onClick={handleImageUpload}
                                                            >
                                                                +
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <button 
                                                        type="submit" 
                                                        className='V_submiy_rate_button'
                                                        disabled={loading}
                                                    >
                                                        {loading ? 'Submitting...' : 'Submit'}
                                                    </button>
                                                </div>
                                            </form>
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
    );
}

export default RateReview;