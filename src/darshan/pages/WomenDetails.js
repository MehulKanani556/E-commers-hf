import React, { useEffect, useRef, useState } from 'react';
import ImageView360 from 'react-360-view';
import { IoLocationSharp, IoShareSocialSharp } from 'react-icons/io5';
import ReactImageMagnify from 'react-image-magnify';
import detailImg1 from './../d_img/detailimg1.png';
import detailImg2 from './../d_img/detailimg2.png';
import detailImg3 from './../d_img/detailimg3.png';
import detailImg4 from './../d_img/detailimg4.png';
import detailVideo from './../d_img/detailvideo.mp4';
import playIcon from './../d_img/play1.png';
import icon360 from './../d_img/360.png';
import './../css/womendetail.css';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import Accordion from 'react-bootstrap/Accordion';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import Bought from '../components/Bought';
import Like from '../components/Like';

const WomenDetails = () => {


    // Initialize with the properly imported main image
    const [mainContent, setMainContent] = useState({
        type: 'image',
        src: detailImg4
    });
    const [is360Active, setIs360Active] = useState(false);
    const [isActivecategory, setIsActivecategory] = useState(true)
    const [isquantityOpen, setIsquantityOpen] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    // Use the imported images/video in the subImages array
    const subImages = [
        { type: 'image', src: detailImg1 },
        { type: 'image', src: detailImg2 },
        { type: 'video', src: detailVideo },
        { type: 'image', src: detailImg3 }
    ];

    const handleSubContentClick = (content) => {
        if (content.type === 'video' && videoRef.current) {
            setMainContent(content);
            videoRef.current.play();
        } else {
            setMainContent(content);
            setIs360Active(false);
        }
    };

    const toggle360View = () => {
        setIs360Active(!is360Active);
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


    return (
        <>


            {/* Personal Details section start */}
            <section className='d_p-50 pb-0 d_womendetail'>
                <div className="d_container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="row flex-row flex-sm-row flex-column-reverse">
                                {/* Thumbnail Column */}
                                <div className="col-12 col-sm-3 d-flex justify-content-center">
                                    <div className="d_subimg">
                                        {subImages.map((item, index) => (
                                            <div
                                                key={index}
                                                className="d_img cursor-pointer"
                                                onClick={() => handleSubContentClick(item)}
                                            >
                                                {item.type === 'image' ? (
                                                    <img
                                                        src={item.src}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        className="w-100 h-100"
                                                    />
                                                ) : (
                                                    <div className="v_img">
                                                        <video>
                                                            <source src={item.src} type="video/mp4" />
                                                        </video>
                                                        <div className="d_play">
                                                            <img src={playIcon} alt="Play" />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="col-12 col-sm-9">
                                    <div className="d_mainimg ">

                                        {mainContent.type === 'image' && !is360Active && (
                                            <div className="d_img ">
                                                <img
                                                    src={mainContent.src}
                                                    alt="Main content"
                                                    className="w-100"
                                                    style={{ height: "830px" }}
                                                />
                                                <div className="d_delicon">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <img
                                                            src={icon360}
                                                            alt="360 View"
                                                            onClick={toggle360View}
                                                            style={{ cursor: 'pointer' }}
                                                        />
                                                        <IoShareSocialSharp
                                                            className='d_shareicon'
                                                            onClick={handleShare}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {mainContent.type === 'video' && (
                                            <video
                                                ref={videoRef}
                                                controls
                                                className="w-100 "
                                            >
                                                <source src={mainContent.src} type="video/mp4" />
                                            </video>
                                        )}

                                        {is360Active && (
                                            <div className="d_img ">
                                                <ImageView360
                                                    amount={3}
                                                    imagePath="/360-images/"
                                                    fileName="detailimg{index}.png"
                                                    ref={canvasRef}
                                                    height={830}
                                                    dragSpeed={3}
                                                />
                                                <div className="d_delicon">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <img
                                                            src={icon360}
                                                            alt="360 View"
                                                            onClick={toggle360View}
                                                            style={{ cursor: 'pointer' }}
                                                        />
                                                        <IoShareSocialSharp
                                                            className='d_shareicon'
                                                            onClick={handleShare}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="d_detail">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d_name">Traditional Chaniya choli</div>
                                    <div className="d_starbg">
                                        <div className="d-flex ">
                                            <FaStar className=" d_staricon me-1" />
                                            <div className="d_review">4.5</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d_colordesc'>Elegant peach cotton silk chaniya choli</div>
                                <div className="d_stock">In Stock</div>
                                {/* <div className="d_outofstock">Out of Stock</div> */}
                                <div className="d_desc">Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa </div>
                                <div className="d-flex align-items-end">
                                    <div className="d_price me-2">$120</div>
                                    <div className="d_originalprice me-2">$140</div>
                                    <div className="d_saveprice ">(Save $20)</div>
                                </div>
                                <div className="d_offer">
                                    <div className="d_acc">
                                        <div className="d_accitem">
                                            <div className="d_acctitle d-flex justify-content-between" onClick={() => setIsActivecategory(!isActivecategory)}>
                                                <div className='d_title'>Best Offers</div>
                                                <div className='d_icon d_cur'>{isActivecategory ? 'View More ' : "View Less "}</div>
                                            </div>
                                            {isActivecategory &&
                                                <>
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
                                                </>
                                            }
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
                                                <a href="">Check</a>
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
                                    <div className="d-flex">
                                        <div className="d_colorcircle active"></div>
                                        <div className="d_colorcircle" style={{ background: "#1D45A9" }}></div>
                                        <div className="d_colorcircle" style={{ background: "#172631" }}></div>
                                    </div>
                                </div>
                                <div className="d_size">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
                                            <div className="d-flex justify-content-between">
                                                <div className="d_title">Size :</div>
                                                <a href="">Size chart</a>
                                            </div>
                                            <div className="d-flex">
                                                <div className="d_sizebox d_disable d-flex justify-content-center align-items-center">
                                                    <div className="d_diagonal-line"></div>
                                                    <p className='mb-0'>34</p>
                                                </div>
                                                <div className="d_sizebox d-flex justify-content-center align-items-center">
                                                    <p className='mb-0'>36</p>
                                                </div>
                                                <div className="d_sizebox active d-flex justify-content-center align-items-center">
                                                    <p className='mb-0'>38</p>
                                                </div>
                                                <div className="d_sizebox d-flex justify-content-center align-items-center">
                                                    <p className='mb-0'>40</p>
                                                </div>
                                                <div className="d_sizebox d-flex justify-content-center align-items-center">
                                                    <p className='mb-0'>42</p>
                                                </div>
                                                <div className="d_sizebox d-flex justify-content-center align-items-center">
                                                    <p className='mb-0'>44</p>
                                                </div>
                                                <div className="d_sizebox d-flex justify-content-center align-items-center">
                                                    <p className='mb-0'>46</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-12 col-xl-6 d_psdeliver">
                                            <div className="d_qun">Quantity :</div>
                                            <div class="d_dropdownqun">
                                                <button class="d_dropbtnqun" onClick={togglequantity}>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        Select
                                                        <MdKeyboardArrowDown className='ms-2 d_dropicon' />
                                                    </div>
                                                </button>
                                                {isquantityOpen && (
                                                    <div className="d_dropconqun">
                                                        <a href="#home">1</a>
                                                        <a href="#about">2</a>
                                                        <a href="#contact">3</a>
                                                        <a href="#contact">4</a>
                                                        <a href="#contact">5</a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d_delbtn">
                                    <div className="d-flex">
                                        <div className="d_cta d-flex justify-content-center align-items-center me-3">
                                            <a href="" className='d_hearticon'><CiHeart className='' /></a>
                                        </div>
                                        <div className="d_cta  d-flex justify-content-center align-items-center me-3">
                                            <a href="" className='text-decoration-none d_buy text-center'>Buy Now</a>
                                        </div>
                                        <div className="d_cta  d-flex justify-content-center align-items-center">
                                            <a href="" className='text-decoration-none d_addcartbtn text-center d-block'>Add to cart</a>
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
            {/* Personal Details section end */}

            {/* Product Information section Start */}

            <section className='d_proinfo d_p-50'>
                <div className="d_container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d_heading">Product Information</div>
                        </div>
                    </div>
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Product Description</Accordion.Header>
                            <Accordion.Body className="d_prodesc">
                                <div className="d_desc">The peach cotton silk garba special chaniya choli is a vibrant and graceful ensemble, enhanced with sequins, cutadana, beads, mirror, cowrie shells and gota work. The charming choli features a sleeveless pattern, comes with a dupatta. The print and work may slightly vary from the image.</div>
                                <div className="d_digitalphoto">
                                    <p className='mb-0'>Slight colour variation is possible due to digital photography.</p>
                                </div>
                                <div className="prodel">
                                    <div className="d_head">Product Details</div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="d_con">
                                                <p className='mb-0'>Fabric</p>
                                                <div className="d_conhead">Cotton Silk</div>
                                            </div>
                                            <div className="d_con">
                                                <p className='mb-0'>Wash Care</p>
                                                <div className="d_conhead">Dry Clean Only</div>
                                            </div>
                                            <div className="d_con">
                                                <p className='mb-0'>Work</p>
                                                <div className="d_conhead">Cutdana, Sequins, Beads, Mirror, Gota, shells</div>
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <div className="d_con">
                                                <p className='mb-0'>Colour</p>
                                                <div className="d_conhead">Peach</div>
                                            </div>
                                            <div className="d_con">
                                                <p className='mb-0'>Occasion</p>
                                                <div className="d_conhead">Navratri</div>
                                            </div>
                                            <div className="d_con">
                                                <p className='mb-0'>Country Origin</p>
                                                <div className="d_conhead">India</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d_con">
                                        <p className='mb-0'>Manufacturing details</p>
                                        <div className="d_conhead d_add">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Shipping</Accordion.Header>
                            <Accordion.Body className="d_proshipping">
                                <p>Once our system has processed the order that you have placed with us, your products are thoroughly inspected to ensure that they are in pristine condition. If they pass the final round of quality checks, we will pack and hand them over to our reliable logistic partner.</p>
                                <p>Once our system has processed the order that you have placed with us, your products are thoroughly inspected to ensure that they are in pristine condition. If they pass the final round of quality checks, we will pack and hand them over to our reliable logistic partner.</p>
                                <p>Once our system has processed the order that you have placed with us, your products are thoroughly inspected to ensure that they are in pristine condition. If they pass the final round of quality checks, we will pack and hand them over to our reliable logistic partner.</p>
                                <p>Once our system has processed the order that you have placed with us, your products are thoroughly inspected to ensure that they are in pristine condition. If they pass the final round of quality checks, we will pack and hand them over to our reliable logistic partner.</p>
                                <p>Once our system has processed the order that you have placed with us, your products are thoroughly inspected to ensure that they are in pristine condition. If they pass the final round of quality checks, we will pack and hand them over to our reliable logistic partner.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Return/Exchange policy</Accordion.Header>
                            <Accordion.Body className="d_proshipping">
                                <p>For any product, you need to raise the request within 7 days of the product being delivered to you. Within these 7 days, you can thoroughly check the product, and if you do not like it, you can file a return or replacement request as you wish.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque iaculis habitant congue est blandit amet. Tortor in vulputate nulla vitae quam.Lorem ipsum dolor sit amet consectetur. Massa facilisis scelerisque.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Rating & Review</Accordion.Header>
                            <Accordion.Body className="d_review">
                                <div className="row">
                                    <div className="col-12 col-sm-3 text-center mb-3 mb-sm-0">
                                        <div className="d_leftbox h-100 d-flex flex-column justify-content-center">
                                            <div className="d_number">4.5</div>
                                            <div className="d-flex justify-content-center mb-3">
                                                <FaStar className='me-1 d_staricon' />
                                                <FaStar className='me-1 d_staricon' />
                                                <FaStar className='me-1 d_staricon' />
                                                <FaStar className='me-1 d_staricon' />
                                                <FaStar className='me-1 d_staricon' />
                                            </div>
                                            <p className='mb-0'>Product Rating</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-9">
                                        <div className="d_rightbox">
                                            <div class="d-flex align-items-center d_rating">
                                                <div class="progress ">
                                                    <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div class="ms-3">
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                </div>
                                                <div class="ms-3 d_percetage">70%</div>
                                            </div>
                                            <div class="d-flex align-items-center d_rating">
                                                <div class="progress ">
                                                    <div class="progress-bar" role="progressbar" style={{ width: "15%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div class="ms-3">
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_emptystar' />
                                                </div>
                                                <div class="ms-3 d_percetage">15%</div>
                                            </div>
                                            <div class="d-flex align-items-center d_rating">
                                                <div class="progress ">
                                                    <div class="progress-bar" role="progressbar" style={{ width: "10%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div class="ms-3">
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_emptystar' />
                                                    <FaStar className='me-1 d_emptystar' />
                                                </div>
                                                <div class="ms-3 d_percetage">10%</div>
                                            </div>
                                            <div class="d-flex align-items-center d_rating">
                                                <div class="progress ">
                                                    <div class="progress-bar" role="progressbar" style={{ width: "3%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div class="ms-3">
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_emptystar' />
                                                    <FaStar className='me-1 d_emptystar' />
                                                    <FaStar className='me-1 d_emptystar' />
                                                </div>
                                                <div class="ms-3 d_percetage">03%</div>
                                            </div>
                                            <div class="d-flex align-items-center d_rating">
                                                <div class="progress ">
                                                    <div class="progress-bar" role="progressbar" style={{ width: "2%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div class="ms-3">
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_emptystar' />
                                                    <FaStar className='me-1 d_emptystar' />
                                                    <FaStar className='me-1 d_emptystar' />
                                                    <FaStar className='me-1 d_emptystar' />
                                                </div>
                                                <div class="ms-3 d_percetage">02%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d_reviewlist">
                                    <div className="d_head">Reviews</div>
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
                                                    <div className="d_dayago">3 Days ago</div>
                                                </div>
                                                <div className="d-flex mb-lg-3 mb-1">
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                </div>
                                                <div className="d_title">Great Product</div>
                                                <div className="d_desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d_like me-3">
                                                        <AiFillLike className='d_icon me-1' /> Liked
                                                    </div>
                                                    <div className="d_dislike">
                                                        <AiOutlineDislike className='d_icon me-1' /> Dislike
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                    <div className="d_dayago">3 Days ago</div>
                                                </div>
                                                <div className="d-flex mb-lg-3 mb-1">
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                </div>
                                                <div className="d_title">Great Product</div>
                                                <div className="d_desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d_like me-3">
                                                        <AiOutlineLike className='d_icon me-1' /> Liked
                                                    </div>
                                                    <div className="d_dislike">
                                                        <AiFillDislike  className='d_icon me-1' /> Dislike
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                    <div className="d_dayago">3 Days ago</div>
                                                </div>
                                                <div className="d-flex mb-lg-3 mb-1">
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                </div>
                                                <div className="d_title">Great Product</div>
                                                <div className="d_desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</div>
                                                <div className="d-flex mb-2">
                                                    <div className="d_img">
                                                        <img src={require('./../d_img/detailimg1.png')} alt="" />
                                                        <img src={require('./../d_img/detailimg1.png')} alt="" />
                                                        <img src={require('./../d_img/detailimg1.png')} alt="" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d_like me-3">
                                                        <AiOutlineLike className='d_icon me-1' /> Liked
                                                    </div>
                                                    <div className="d_dislike">
                                                        <AiOutlineDislike   className='d_icon me-1' /> Dislike
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                    <div className="d_dayago">3 Days ago</div>
                                                </div>
                                                <div className="d-flex mb-lg-3 mb-1">
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                    <FaStar className='me-1 d_staricon' />
                                                </div>
                                                <div className="d_title">Great Product</div>
                                                <div className="d_desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</div>
                                                <div className="d-flex mb-2">
                                                    <div className="d_img">
                                                        <img src={require('./../d_img/detailimg1.png')} alt="" />
                                                        <img src={require('./../d_img/detailimg1.png')} alt="" />
                                                        <img src={require('./../d_img/detailimg1.png')} alt="" />
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="d_like me-3">
                                                        <AiOutlineLike className='d_icon me-1' /> Liked
                                                    </div>
                                                    <div className="d_dislike">
                                                        <AiOutlineDislike   className='d_icon me-1' /> Dislike
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </section>

            {/* Product Information section End */}

            {/* Frequently bought together section start */}

            <Bought />

            {/* Frequently bought together section end */}

            {/* You may also like this section start */}

            <Like />

            {/* You may also like this section end */}

        </>
    );
};

export default WomenDetails;