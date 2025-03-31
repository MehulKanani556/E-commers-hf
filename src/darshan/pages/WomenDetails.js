import React, { useEffect, useRef, useState } from 'react';
import { IoClose, IoLocationSharp, IoShareSocialSharp } from 'react-icons/io5';
// import detailImg4 from './../d_img/detailimg4.png';
import icon360 from './../d_img/360.png';
import './../css/womendetail.css';
import { FaStar } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import Accordion from 'react-bootstrap/Accordion';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
// import Bought from '../components/Bought';
import Like from '../components/Like';
import Recentlyviewed from '../components/Recentlyviewed';
import Customerlike from '../components/Customerlike';
import { Carousel, Modal, Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../../Vivek/Component/header/Header';
import Subscribe from '../../Vivek/Component/common/Subscribe';
import Process from '../../Vivek/Component/common/Process';
import Footer from '../../Vivek/Component/footer/Footer';
import ReactImageMagnify from 'react-image-magnify';
import axios from 'axios';


const WomenDetails = () => {

    const { productId } = useParams();

    const BaseUrl = process.env.REACT_APP_BASEURL;
    const token = localStorage.getItem('token');

    const [product, setProduct] = useState([]);
    const [data, setData] = useState([]);
    const [bestSellerIds, setBestSellerIds] = useState([]);
    const [newArrivalIds, setNewArrivalIds] = useState([]);
    const [mainContent, setMainContent] = useState({
        type: 'image',
        src: '',
        index: 0
    });
    const [isquantityOpen, setIsquantityOpen] = useState(false);
    const [sizemodalShow, setsizeModalShow] = useState(false);
    const [offermodalShow, setofferModalShow] = useState(false);
    const videoRef = useRef(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState('Select')
    const [show, setShow] = useState(false);
    const [galleryView, setGalleryView] = useState({
        isOpen: false,
        activeIndex: 0
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleThumbnailClick = (item) => {

        setMainContent({
            type: 'image',
            src: `${BaseUrl}/${item.replace(/\\/g, '/')}`,
            index: 0
        });

        // If it's a video, play it
        if (mainContent.type === 'video' && videoRef.current) {
            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.play();
                }
            }, 0);
        }
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Product Details',
                url: window.location.href
            });
        }
    };

    // Toggle dropdown visibility
    const togglequantity = (e) => {
        e.stopPropagation(); // Prevent immediate closure on toggle click
        setIsquantityOpen(!isquantityOpen);
    };
    const selectQuantity = (quantity) => {
        setSelectedQuantity(quantity);
        setIsquantityOpen(false);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BaseUrl}/api/getProduct/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log("Productresponse", response.data.product);
            setProduct(response.data.product);

            if (response.data.product.length > 0 &&
                response.data.product[0].productVariantData.length > 0 &&
                response.data.product[0].productVariantData[0].images.length > 0) {

                const firstImage = response.data.product[0].productVariantData[0].images[0];
                setMainContent({
                    type: 'image',
                    src: `${BaseUrl}/${firstImage.replace(/\\/g, '/')}`,
                    index: 0
                });
            }

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId, token]);


    //All product 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bestSellerResponse = await axios.get(`${BaseUrl}/api/topProducts`);
                const BestSellarId = bestSellerResponse.data.data.map(product => product.productId);
                setBestSellerIds(BestSellarId);

                const newArrivalResponse = await axios.get(`${BaseUrl}/api/newArivalProduct`);
                const NewArrivalId = newArrivalResponse.data.map(product => product._id);
                setNewArrivalIds(NewArrivalId);

                const response = await axios.get(`${BaseUrl}/api/allProduct`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                // console.log("response", response.data.product);
                setData(response.data.product);
            } catch (error) {
                console.error('Data Fetching Error:', error);
            }
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [BaseUrl, token]);

    const getRandomProducts = (data, count = 5) => {
        return data.sort(() => 0.5 - Math.random()).slice(0, count);
    };

    const formetDate = (dateString) => {
        const createdAt = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - createdAt) / 1000);

        if (diffInSeconds < 60) {
            return `${diffInSeconds} seconds ago`;
        }

        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
            return `${diffInMinutes} minutes ago`;
        }

        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
            return `${diffInHours} hours ago`;
        }

        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} days ago`;
    };
    return (
        <>
            {/* Header section  */}
            <Header />
            {/* Personal Details section start */}
            {product.map((item) => {
                const discountAmount = (item.productVariantData[0].originalPrice * item.productVariantData[0].discountPrice) / 100;
                const sizesArray = item.productVariantData[0].size.split(',').map(size => parseInt(size.trim()));
                const images = item.productVariantData[0].images || [];
                return (
                    <>
                        <section className='d_p-50 pb-0 d_womendetail'>
                            <div className="d_container">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="row flex-row flex-sm-row flex-column-reverse">
                                            {/* Thumbnail Column */}
                                            <div className="col-12 col-sm-3 d-flex justify-content-center">
                                                <div className="d_subimg">
                                                    {item.productVariantData[0].images.map((item, index) => (

                                                        <div
                                                            key={index}
                                                            className="d_img d_cur"

                                                        >
                                                            <img
                                                                src={`${BaseUrl}/${item.replace(/\\/g, '/')}`}
                                                                alt=""
                                                                className="w-100 h-100"
                                                                onClick={() => handleThumbnailClick(item)}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Main Content */}
                                            <div className="col-12 col-sm-9">
                                                <div className="d_mainimg">
                                                    <div className="d_img ">
                                                        <div className='d_reactglass'>
                                                            <ReactImageMagnify
                                                                {...{
                                                                    smallImage: {
                                                                        alt: 'Main content',
                                                                        isFluidWidth: true,
                                                                        src: mainContent.src,
                                                                    },
                                                                    largeImage: {
                                                                        src: mainContent.src,
                                                                        width: 1200,
                                                                        height: 1800,
                                                                    },
                                                                    enlargedImagePosition: "over",
                                                                    lensStyle: {
                                                                        backgroundColor: 'rgba(255,255,255,0.3)',
                                                                    },
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="d_delicon">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <img
                                                                    src={icon360}
                                                                    alt="360 View"
                                                                    style={{ cursor: 'pointer' }}
                                                                    onClick={handleShow}
                                                                />
                                                                <IoShareSocialSharp
                                                                    className='d_shareicon d_cur'
                                                                    onClick={handleShare}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* {console.log("item>>>>>>>>>>", item)} */}
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="d_detail">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d_name">{item.subCategoriesData[0].subCategoryName}</div>
                                                <div className="d_starbg">
                                                    <div className="d-flex ">
                                                        <FaStar className=" d_staricon me-1" />
                                                        <div className="d_review">{item?.ratingData[0]?.rating}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d_colordesc'>{item.productName}</div>
                                            <div className="d_stock">{item.stockStatus}</div>
                                            {/* <div className="d_outofstock">Out of Stock</div> */}
                                            <div className="d_desc">{item.productVariantData[0].description}</div>
                                            <div className="d-flex align-items-end">
                                                <div className="d_price me-2">${(item.productVariantData[0].originalPrice - discountAmount)}</div>
                                                <div className="d_originalprice me-2 text-decoration-line-through">${item.productVariantData[0].originalPrice}</div>
                                                <div className="d_saveprice ">
                                                    (Save ${discountAmount.toFixed(2)})
                                                </div>
                                            </div>
                                            <div className="d_offer">
                                                <div className="d_acc">
                                                    <div className="d_accitem">
                                                        <div className="d_acctitle d-flex justify-content-between">
                                                            <div className='d_title'>Best Offers</div>
                                                            <div className='d_icon d_cur' onClick={() => setofferModalShow(true)}>View More</div>
                                                        </div>
                                                        <div className="d_acccon">
                                                            <div className="d-flex align-items-center">
                                                                <img src={require('./../d_img/offer.png')} alt="" className='me-2' />
                                                                <div className="d-flex justify-content-between w-100 aling-items-center">
                                                                    <div className="d_offertitle">NEW100</div>
                                                                    <div className="d_savepri">Save $100 </div>
                                                                </div>
                                                            </div>
                                                            <div className="d_offerdesc ms-4">Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d_deliver">
                                                <div className="d_tit">
                                                    <IoLocationSharp className='me-2 d_loc' />Deliver to
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                                                        <div className="d_input d-flex justify-content-between align-items-center">
                                                            <input type="text" placeholder='Enter delivery Pincode' />
                                                            <Link to="">Check</Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-lg-12 col-xl-6 d_psdeliver">
                                                        <div className="d_delivertime">Delivery by 7 Oct, Monday</div>
                                                        <div className="d_deliverordertoday">if ordered before 5:11PM</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d_color">
                                                <div className="d_title">Colors :</div>
                                                <div className='d-flex align-items-center gap-2'>
                                                    {item.productVariantData[0].colorName &&
                                                        item.productVariantData[0].colorName.split(',').map((color, index) => (
                                                            <div
                                                                key={index}
                                                                style={{ backgroundColor: color, width: '30px', height: '30px', borderRadius: '50%' }}
                                                            ></div>
                                                        ))}
                                                </div>
                                            </div>
                                            <div className="d_size">
                                                <div className="row">
                                                    <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d_title">Size :</div>
                                                            <Link className='text-decoration-underline d_cur' onClick={(e) => { e.preventDefault(); setsizeModalShow(true) }}>Size chart</Link>
                                                        </div>
                                                        <div className="d-flex">
                                                            {sizesArray.map((size) => (
                                                                <div
                                                                    key={size}
                                                                    className={`d_sizebox d-flex justify-content-center align-items-center d_cur ${selectedSize === size ? 'active' : ''} ${size === sizesArray[0] ? 'd_disable' : ''}`}
                                                                    onClick={() => size !== sizesArray[0] && setSelectedSize(size)}
                                                                >
                                                                    {size === sizesArray[0] && <div className="d_diagonal-line"></div>}
                                                                    <p className="mb-0">{size}</p>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                    <div className="col-6 col-sm-6 col-lg-12 col-xl-6 d_psdeliver">
                                                        <div className="d_qun">Quantity :</div>
                                                        <div className="d_dropdownqun">
                                                            <button className="d_dropbtnqun" onClick={togglequantity}>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    {selectedQuantity}
                                                                    <MdKeyboardArrowDown className='ms-2 d_dropicon' />
                                                                </div>
                                                            </button>
                                                            {isquantityOpen && (
                                                                <div className="d_dropconqun">
                                                                    {[1, 2, 3, 4, 5].map((quantity) => (
                                                                        <p key={quantity} onClick={() => selectQuantity(quantity)}>
                                                                            {quantity}
                                                                        </p>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d_delbtn">
                                                <div className="d-flex">
                                                    <div className="d_cta d-flex justify-content-center align-items-center me-3">
                                                        <Link to="" className='d_hearticon'><CiHeart className='' /></Link>
                                                    </div>
                                                    <div className="d_cta  d-flex justify-content-center align-items-center me-3">
                                                        <Link to="" className='text-decoration-none d_buy text-center'>Buy Now</Link>
                                                    </div>
                                                    <div className="d_cta  d-flex justify-content-center align-items-center">
                                                        <Link to="" className='text-decoration-none d_addcartbtn text-center d-block'>Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d_feau">
                                                <div className="d-flex flex-wrap">
                                                    <div className="d-flex align-items-center d_feabg">
                                                        <img src={require('./../d_img/fea1.png')} className='me-1' alt="" />
                                                        <p className='mb-0'>Dispatch in 2 days</p>
                                                    </div>
                                                    <div className="d-flex align-items-center d_feabg">
                                                        <img src={require('./../d_img/fea2.png')} className='me-1' alt="" />
                                                        <p className='mb-0'>Easy return</p>
                                                    </div>
                                                    <div className="d-flex align-items-center d_feabg">
                                                        <img src={require('./../d_img/fea3.png')} className='me-1' alt="" />
                                                        <p className='mb-0'>Worldwide Shipping</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d_text">
                                                <p className='mb-1'>* Additional 5 - 6 business days is required for delivery.</p>
                                                <p className='mb-0'>* For Plus Size Extra 5 - 10 business days is required for delivery.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section >
                        <Modal show={show} onHide={handleClose}
                            size="xl"
                            centered
                            className="gallery-modal"
                        >
                            <Modal.Header closeButton className='border-bottom-0'>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row">
                                    <div className="col-md-6 offset-md-3">
                                        <Carousel
                                            indicators={false}
                                            controls={false}
                                            interval={null}
                                            activeIndex={galleryView.activeIndex}
                                            onSelect={(selectedIndex) => {
                                                setGalleryView({
                                                    ...galleryView,
                                                    activeIndex: selectedIndex
                                                });
                                            }}
                                        >
                                            {images.map((image, index) => (
                                                <Carousel.Item key={index}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={`${BaseUrl}/${image.replace(/\\/g, '/')}`}
                                                        alt={`Product view ${index + 1}`}
                                                        style={{
                                                            maxHeight: '700px',
                                                            objectFit: 'contain'
                                                        }}
                                                    />
                                                </Carousel.Item>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>

                                {/* Thumbnail strip */}
                                <div className="d-flex justify-content-center mt-3 flex-wrap">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={`${BaseUrl}/${image.replace(/\\/g, '/')}`}
                                            alt={`Thumbnail ${index + 1}`}
                                            onClick={() => {
                                                setGalleryView({
                                                    ...galleryView,
                                                    activeIndex: index
                                                });
                                            }}
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                objectFit: 'cover',
                                                margin: '0 5px',
                                                cursor: 'pointer',
                                                border: index === galleryView.activeIndex ? '2px solid #000' : '1px solid #ddd',
                                                opacity: index === galleryView.activeIndex ? 1 : 0.7
                                            }}
                                        />
                                    ))}
                                </div>
                            </Modal.Body>
                        </Modal>
                    </>
                )
            })}
            {/* Personal Details section end */}

            {/* Product Information section Start */}

            <section className='d_proinfo d_p-50'>
                <div className="d_container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d_heading">Product Information</div>
                        </div>
                    </div>
                    {product.map((item) => (

                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Product Description</Accordion.Header>
                                <Accordion.Body className="d_prodesc">
                                    <div className="d_desc">{item.productVariantData[0].description}</div>
                                    <div className="d_digitalphoto">
                                        <p className='mb-0'>Slight colour variation is possible due to digital photography.</p>
                                    </div>
                                    <div className="prodel">
                                        <div className="d_head">Product Details</div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="d_con">
                                                    <p className='mb-0'>Fabric</p>
                                                    <div className="d_conhead">{item.productVariantData[0].specifications.fabric || '-'}</div>
                                                </div>
                                                <div className="d_con">
                                                    <p className='mb-0'>Wash Care</p>
                                                    <div className="d_conhead">{item.productVariantData[0].specifications.washCare || '-'}</div>
                                                </div>
                                                <div className="d_con">
                                                    <p className='mb-0'>Work</p>
                                                    <div className="d_conhead">{item.productVariantData[0].specifications.work || '-'}</div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d_con">
                                                    <p className='mb-0'>Occasion</p>
                                                    <div className="d_conhead">{item.productVariantData[0].specifications.occasion || '-'}</div>
                                                </div>
                                                <div className="d_con">
                                                    <p className='mb-0'>Country Origin</p>
                                                    <div className="d_conhead">{item.productVariantData[0].specifications.countryOrigin || '-'}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d_con">
                                            <p className='mb-0'>Manufacturing details</p>
                                            <div className="d_conhead d_add">{item.productVariantData[0].manufacturingDetails}</div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Shipping</Accordion.Header>
                                <Accordion.Body className="d_proshipping">
                                    <p>{item.productVariantData[0].shiping}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Return/Exchange policy</Accordion.Header>
                                <Accordion.Body className="d_proshipping">
                                    <p>{item.productVariantData[0].returnPolicy}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Rating & Review</Accordion.Header>
                                <Accordion.Body className="d_review">
                                    <div className="row">
                                        <div className="col-12 col-sm-3 text-center mb-3 mb-sm-0">
                                            <div className="d_leftbox h-100 d-flex flex-column justify-content-center">
                                                <div className="d_number">
                                                    {item.ratingData.length > 0 ? item.ratingData[0].rating : "0.0"}
                                                </div>
                                                <div className="d-flex justify-content-center mb-3">
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <FaStar
                                                            key={index}
                                                            className={`me-1 ${index < Math.floor(item.ratingData.length > 0 ? item.ratingData[0].rating : 0) ? 'd_staricon' : 'd_emptystar'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <p className='mb-0'>Product Rating</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-9">
                                            <div className="d_rightbox">
                                                {item.ratingData.map((rate) => {
                                                    const rating = parseFloat(rate.rating) || 0;
                                                    const percentage = (rating / 5) * 100;
                                                    return (
                                                        <div className="d-flex align-items-center d_rating" key={rate._id}>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar"
                                                                    role="progressbar"
                                                                    style={{ width: `${percentage}%` }}
                                                                    aria-valuenow={percentage}
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <div className="ms-3">
                                                                {Array.from({ length: 5 }).map((_, index) => (
                                                                    <FaStar
                                                                        key={index}
                                                                        className={`me-1 ${index < Math.floor(rating) ? 'd_staricon' : 'd_emptystar'}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                            <div className="ms-3 d_percetage">{percentage.toFixed(0)}%</div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d_reviewlist">
                                        <div className="d_head">Reviews</div>
                                        {item.ratingData.map((rate) => {
                                            const rating = parseFloat(rate.rating) || 0;
                                            return (
                                                <div className="d_list">
                                                    <div className="d-flex">
                                                        <div>
                                                            <div className="d_namecircle d-flex justify-content-center align-items-center">
                                                                <span>A.T</span>
                                                            </div>
                                                        </div>
                                                        <div className="d_desc ms-3">
                                                            <div className="d-flex align-items-center">
                                                                <div className="d_name me-2">Nicolas cage</div>
                                                                <div className="d_dayago">{formetDate(rate.createdAt)}</div>
                                                            </div>
                                                            <div className="d-flex mb-lg-3 mb-1">
                                                                {Array.from({ length: 5 }).map((_, index) => (
                                                                    <FaStar style={{ fontSize: '16px' }}
                                                                        key={index}
                                                                        className={`me-1 ${index < Math.floor(rating) ? 'd_staricon' : 'd_emptystar'}`}
                                                                    />
                                                                ))}
                                                            </div>
                                                            {/* <div className="d_title">Great Product</div> */}
                                                            <div className="d_desc">{rate.review}</div>
                                                            <div className="d-flex mb-2">
                                                                <div className="d_img">
                                                                    <img src={`${BaseUrl}/${rate.productImages}`} alt='' />
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="d_like me-3">
                                                                    <AiOutlineLike className='d_icon me-1' /> Liked
                                                                </div>
                                                                <div className="d_dislike">
                                                                    <AiOutlineDislike className='d_icon me-1' /> Dislike
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                </div>
            </section>

            {/* Product Information section End */}

            {/* Frequently bought together section start */}

            {/* <Bought /> */}

            {/* Frequently bought together section end */}

            {/* You may also like this section start */}

            <Like data={getRandomProducts(data)} bestSellerIds={bestSellerIds} newArrivalIds={newArrivalIds} />

            {/* You may also like this section end */}

            {/* Recently Viewed items section start */}

            <Recentlyviewed data={getRandomProducts(data)} bestSellerIds={bestSellerIds} newArrivalIds={newArrivalIds} />

            {/* Recently Viewed items section end */}

            {/* Customer also like this section start */}

            <Customerlike data={getRandomProducts(data)} bestSellerIds={bestSellerIds} newArrivalIds={newArrivalIds} />

            {/* Customer also like this section end */}

            {/* Subscribe section */}
            <Subscribe />

            {/* Process section */}
            <Process />

            {/* Footer section */}
            <Footer />

            {/* Size chart Women section start */}
            {console.log("product@@@@@@@@@@@@@@", product)}

            {product[0]?.mainCategoriesData?.[0]?.mainCategoryName === "Women" ? (
                <Modal className="d_sizemodal"
                    show={sizemodalShow}
                    onHide={() => setsizeModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <div className="d_closeicon d-flex justify-content-end d_cur" onClick={() => setsizeModalShow(false)}>
                            <IoClose className='icon' />
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-6">
                                <div className="d_img">
                                    <img src={require('./../d_img/womensize.png')} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="d_text">
                                    <h4>Size Chart for Women </h4>
                                    <p className='mb-0'>This size chart shows product measurements taken when products are laid flat.</p>
                                    <p className='mb-0'>Actual product measurements may vary by up to 1".</p>
                                </div>
                            </div>
                        </div>
                        <div className="d_inch">
                            <div className="table-responsive">
                                <Table bordered className="text-center mb-0 align-middle">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className='d_inchbg'>Inch</div>
                                            </th>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>L</th>
                                            <th>XL</th>
                                            <th>2XL</th>
                                            <th>3XL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>A Length</th>
                                            <td>25.2</td>
                                            <td>26</td>
                                            <td>26.6</td>
                                            <td>27.2</td>
                                            <td>27.6</td>
                                            <td>28</td>
                                        </tr>
                                        <tr>
                                            <th>B Bust</th>
                                            <td>34.6</td>
                                            <td>36.6</td>
                                            <td>38.6</td>
                                            <td>40.6</td>
                                            <td>42.5</td>
                                            <td>44.5</td>
                                        </tr>
                                        <tr>
                                            <th>C Shoulder</th>
                                            <td>14.9</td>
                                            <td>15.4</td>
                                            <td>15.8</td>
                                            <td>16.3</td>
                                            <td>17.2</td>
                                            <td>17.7</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="d_inch">
                            <div className="table-responsive">
                                <Table bordered className="text-center mb-0 align-middle">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className='d_inchbg'>Centimetre</div>
                                            </th>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>L</th>
                                            <th>XL</th>
                                            <th>2XL</th>
                                            <th>3XL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>A Length</th>
                                            <td>64</td>
                                            <td>66</td>
                                            <td>67.5</td>
                                            <td>69</td>
                                            <td>70</td>
                                            <td>71</td>
                                        </tr>
                                        <tr>
                                            <th>B Bust</th>
                                            <td>88</td>
                                            <td>93</td>
                                            <td>98</td>
                                            <td>103</td>
                                            <td>108</td>
                                            <td>113</td>
                                        </tr>
                                        <tr>
                                            <th>C Shoulder</th>
                                            <td>37.8</td>
                                            <td>39</td>
                                            <td>40.2</td>
                                            <td>41.4</td>
                                            <td>42.6</td>
                                            <td>43.8</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            ) : (<></>)}

            {/* Size chart women section End */}

            {/* Size chart Men section start */}
            {product[0]?.mainCategoriesData?.[0]?.mainCategoryName === "Men" ? (
                <Modal className="d_sizemodal d-none"
                    show={sizemodalShow}
                    onHide={() => setsizeModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <div className="d_closeicon d-flex justify-content-end d_cur" onClick={() => setsizeModalShow(false)}>
                            <IoClose className='icon' />
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-6">
                                <div className="d_img">
                                    <img src={require('./../d_img/womensize.png')} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="d_text">
                                    <h4>Size Chart for Men </h4>
                                    <p className='mb-0'>This size chart shows product measurements taken when products are laid flat.</p>
                                    <p className='mb-0'>Actual product measurements may vary by up to 1".</p>
                                </div>
                            </div>
                        </div>
                        <div className="d_inch">
                            <div className="table-responsive">
                                <Table bordered className="text-center mb-0 align-middle">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className='d_inchbg'>Inch</div>
                                            </th>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>L</th>
                                            <th>XL</th>
                                            <th>2XL</th>
                                            <th>3XL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>A Length</th>
                                            <td>28</td>
                                            <td>29.1</td>
                                            <td>29.9</td>
                                            <td>31.1</td>
                                            <td>31.9</td>
                                            <td>33.1</td>
                                        </tr>
                                        <tr>
                                            <th>B Bust</th>
                                            <td>36.2</td>
                                            <td>40.2</td>
                                            <td>44.1</td>
                                            <td>48</td>
                                            <td>52</td>
                                            <td>55.9</td>
                                        </tr>
                                        <tr>
                                            <th>C Shoulder</th>
                                            <td>15.7</td>
                                            <td>16.9</td>
                                            <td>18.1</td>
                                            <td>19.3</td>
                                            <td>20.5</td>
                                            <td>21.7</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="d_inch">
                            <div className="table-responsive">
                                <Table bordered className="text-center mb-0 align-middle">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className='d_inchbg'>Centimetre</div>
                                            </th>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>L</th>
                                            <th>XL</th>
                                            <th>2XL</th>
                                            <th>3XL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>A Length</th>
                                            <td>71</td>
                                            <td>74</td>
                                            <td>76</td>
                                            <td>79</td>
                                            <td>80</td>
                                            <td>84</td>
                                        </tr>
                                        <tr>
                                            <th>B Bust</th>
                                            <td>82</td>
                                            <td>92</td>
                                            <td>102</td>
                                            <td>112</td>
                                            <td>122</td>
                                            <td>132</td>
                                        </tr>
                                        <tr>
                                            <th>C Shoulder</th>
                                            <td>37</td>
                                            <td>40</td>
                                            <td>43</td>
                                            <td>46</td>
                                            <td>49</td>
                                            <td>52</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            ) : (<></>)}
            {/* Size chart Men section End */}

            {/* Size chart kids section start */}
            {product[0]?.mainCategoriesData?.[0]?.mainCategoryName === "Baby & Kids" ? (
                <Modal className="d_sizemodal d-none"
                    show={sizemodalShow}
                    onHide={() => setsizeModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <div className="d_closeicon d-flex justify-content-end d_cur" onClick={() => setsizeModalShow(false)}>
                            <IoClose className='icon' />
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-6">
                                <div className="d_img">
                                    <img src={require('./../d_img/womensize.png')} alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="d_text">
                                    <h4>Size Chart for Kid </h4>
                                    <p className='mb-0'>This size chart shows product measurements taken when products are laid flat.</p>
                                    <p className='mb-0'>Actual product measurements may vary by up to 1".</p>
                                </div>
                            </div>
                        </div>
                        <div className="d_inch">
                            <div className="table-responsive">
                                <Table bordered className="text-center mb-0 align-middle">
                                    <thead>
                                        <tr className='d_yr'>
                                            <td></td>
                                            <td>5-6 yr</td>
                                            <td>7-8 yr</td>
                                            <td>9-10 yr</td>
                                            <td>11-12 yr</td>
                                            <td>13-14 yr</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <div className='d_inchbg'>Inch</div>
                                            </th>
                                            <th>XS</th>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>L</th>
                                            <th>XL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>A Length</th>
                                            <td>18.1</td>
                                            <td>20.1</td>
                                            <td>22</td>
                                            <td>24</td>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <th>B Bust</th>
                                            <td>23.6</td>
                                            <td>27.6</td>
                                            <td>31.5</td>
                                            <td>35.4</td>
                                            <td>40.2</td>
                                        </tr>
                                        <tr>
                                            <th>C Shoulder</th>
                                            <td>10.2</td>
                                            <td>11.8</td>
                                            <td>13.4</td>
                                            <td>15.0</td>
                                            <td>16.5</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="d_inch">
                            <div className="table-responsive">
                                <Table bordered className="text-center mb-0 align-middle">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className='d_inchbg'>Centimetre</div>
                                            </th>
                                            <th>XS</th>
                                            <th>S</th>
                                            <th>M</th>
                                            <th>L</th>
                                            <th>XL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>A Length</th>
                                            <td>46</td>
                                            <td>51</td>
                                            <td>56</td>
                                            <td>61</td>
                                            <td>66</td>
                                        </tr>
                                        <tr>
                                            <th>B Bust</th>
                                            <td>60</td>
                                            <td>70</td>
                                            <td>80</td>
                                            <td>90</td>
                                            <td>102</td>
                                        </tr>
                                        <tr>
                                            <th>C Shoulder</th>
                                            <td>26</td>
                                            <td>30</td>
                                            <td>34</td>
                                            <td>38</td>
                                            <td>42</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            ) : (<></>)}
            {/* Size chart Men section End */}

            {/* Offer Modal section start */}

            <Modal className='d_offermodal'
                show={offermodalShow}
                onHide={() => setofferModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className="d_topsec">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className='mb-0'>Best Offers</h4>
                            <IoClose className='icon d_cur' onClick={() => setofferModalShow(false)} />
                        </div>
                    </div>
                    <div className="d_offercon">
                        <div className="d-flex">
                            <div>
                                <div className="d_img me-2">
                                    <img src={require('./../d_img/offer.png')} alt="" />
                                </div>
                            </div>
                            <div className="d_text ms-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d_title">NEW100</div>
                                    <div className="d_saveprice">Save $100 </div>
                                </div>
                                <p className='mb-0'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d_offercon">
                        <div className="d-flex">
                            <div>
                                <div className="d_img me-2">
                                    <img src={require('./../d_img/offer.png')} alt="" />
                                </div>
                            </div>
                            <div className="d_text ms-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d_title">NEW100</div>
                                    <div className="d_saveprice">Save $100 </div>
                                </div>
                                <p className='mb-0'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d_offercon">
                        <div className="d-flex">
                            <div>
                                <div className="d_img me-2">
                                    <img src={require('./../d_img/td.png')} alt="" />
                                </div>
                            </div>
                            <div className="d_text ms-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d_title">TD Bank</div>
                                    {/* <div className="d_saveprice">Save $100 </div> */}
                                </div>
                                <p className='mb-0'>Extra ₹500 off on TD Bank Pixel Credit Card EMI Transactions. Min Txn Value: ₹5,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="d_offercon">
                        <div className="d-flex">
                            <div>
                                <div className="d_img me-2">
                                    <img src={require('./../d_img/cob.png')} alt="" />
                                </div>
                            </div>
                            <div className="d_text ms-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d_title">Capital One bank</div>
                                    {/* <div className="d_saveprice">Save $100 </div> */}
                                </div>
                                <p className='mb-0'>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="d_offercon">
                        <div className="d-flex">
                            <div>
                                <div className="d_img me-2">
                                    <img src={require('./../d_img/wfb.png')} alt="" />
                                </div>
                            </div>
                            <div className="d_text ms-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d_title">Wells Fargo Bank</div>
                                    {/* <div className="d_saveprice">Save $100 </div> */}
                                </div>
                                <p className='mb-0'>Extra ₹500 off on TD Bank Pixel Credit Card EMI Transactions. Min Txn Value: ₹5,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="d_offercon">
                        <div className="d-flex">
                            <div>
                                <div className="d_img me-2">
                                    <img src={require('./../d_img/citi.png')} alt="" />
                                </div>
                            </div>
                            <div className="d_text ms-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d_title">Citi Bank</div>
                                    {/* <div className="d_saveprice">Save $100 </div> */}
                                </div>
                                <p className='mb-0'>Extra ₹500 off on TD Bank Pixel Credit Card EMI Transactions. Min Txn Value: ₹5,000</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Offer Modal section end */}

        </>
    );
};

export default WomenDetails;