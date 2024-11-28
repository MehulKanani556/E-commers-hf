import React, { useEffect, useRef, useState } from 'react';
import './shoesslider.css';
import OwlCarousel from 'react-owl-carousel';
import { FaAngleLeft, FaAngleRight, FaLongArrowAltLeft } from 'react-icons/fa';
import { MdOutlineArrowBack, MdOutlineArrowLeft, MdOutlineArrowRightAlt } from 'react-icons/md';
import { PiArrowLeftFill, PiArrowRightFill } from 'react-icons/pi';
import { Animated } from "react-animated-css";
import { Button, Col, Row } from 'react-bootstrap';

// Define headphone images as objects with id and image properties
const headphoneimages = [
    { id: 1, image: require('../../assets/headphoneimg1.png') },
    { id: 2, image: require('../../assets/headphoneimg2.png') },
    { id: 3, image: require('../../assets/headphoneimg3.png') },
];

const headphoneContent = [
    {
        heading: "New Era of sounds",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
        heading: "Immersive Audio Experience",
        description: "Dive deep into the music with unparalleled clarity.",
    },
    {
        heading: "A New Dimension of Sound",
        description: "Elevate your auditory senses to a new dimension.",
    }
];



const ShoesSlider = () => {

    const mini1 = useRef(null);
    const mini2 = useRef(null);
    const mini3 = useRef(null);
    const big_img = useRef(null);
    const product_name = useRef(null);
    const price = useRef(null);

    const maxSlides = 5;
    const [currentSlide, setCurrentSlide] = useState(0);

    const name_scroll = product_name.current?.offsetHeight + 10 || 60;
    const scrollAmount = mini1.current?.firstChild?.offsetHeight + 10 || 110;
    const bit_scroolamt = big_img?.firstChild?.offsetHeight + 10 || 800;
    const price_scroll = price.current?.offsetHeight + 10 || 40;

    const handleNextClick = () => {
        if (currentSlide < maxSlides - 1) {
            mini1.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
            mini2.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
            mini3.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });

            big_img.current.scrollBy({ top: bit_scroolamt, behavior: 'smooth' });

            product_name.current.scrollBy({ top: name_scroll, behavior: 'smooth' });
            price.current.scrollBy({ top: price_scroll, behavior: 'smooth' });

            setCurrentSlide(currentSlide + 1);
        } else {
            mini1.current.scrollTo({ top: 0, behavior: 'smooth' });
            mini2.current.scrollTo({ top: 0, behavior: 'smooth' });
            mini3.current.scrollTo({ top: 0, behavior: 'smooth' });
            big_img.current.scrollTo({ top: 0, behavior: 'smooth' });
            product_name.current.scrollTo({ top: 0, behavior: 'smooth' });
            price.current.scrollTo({ top: 0, behavior: 'smooth' });

            setCurrentSlide(0);
        }
    };

    const slider_control = {
        items: 1,
        dots: true,
        loop: false,
        nav: false,
        onDragged: (event) => handleDrag(event),
        onTranslate: (event) => setCarouselIndex(event.item.index),
    };

    const handleDrag = (event) => {
        const currentIndex = event.item.index;
        setCarouselIndex(currentIndex);
    };

    const handleDotClick = (index) => {
        setCarouselIndex(index);
    };

    // watch slider controller

    const containerRef1 = useRef(null);
    const [bgColor, setBgColor] = useState('linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const slides = [
        {
            bgColor: 'linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)',
            image: require('../../assets/watch1.png'),
            heading: 'Exquisite Watches',
            subHeading: 'Choose Luxury, Choose Us',
            description: 'Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch',
            price: '$430.00',
        },
        {
            bgColor: 'linear-gradient(to right, #ADB0B0, #E1E1E1)',
            image: require('../../assets/watch2.png'),
            heading: 'Modern Timepieces',
            subHeading: 'Elevate Your Look, Choose Us',
            description: 'Experience cutting-edge designs with a blend of tradition and innovation in every piece.',
            price: '$550.00',
        },
        {
            bgColor: 'linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)',
            image: require('../../assets/watch3.png'),
            heading: 'Classic Elegance',
            subHeading: 'Timeless Beauty, Choose Us',
            description: 'Cherish the essence of timeless beauty with precision-crafted watches for any occasion.',
            price: '$380.00',
        },
        {
            bgColor: 'linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)',
            image: require('../../assets/watch4.png'),
            heading: 'Luxury Redefined',
            subHeading: 'Exclusive Designs, Choose Us',
            description: 'Indulge in luxury with our exclusive collection designed for connoisseurs.',
            price: '$700.00',
        },
    ];

    const handlechangewatch = (direction, e) => {
        e.preventDefault();
        e.stopPropagation();

        setCarouselIndex(1); // Keep the carousel active

        setCurrentImageIndex((prevIndex) => {
            let newIndex = direction === 'left' ? prevIndex - 1 : prevIndex + 1;
            if (newIndex < 0) newIndex = slides.length - 1;
            if (newIndex >= slides.length) newIndex = 0;
            return newIndex;
        });
    };

    // Headphone slider 

    const [headphonecurrentImage, setHeadphoneCurrentImage] = useState(0);
    const [direction, setDirection] = useState('right');
    const [isAnimating, setIsAnimating] = useState(false);

    // Initial animation effect
    useEffect(() => {
        setIsAnimating(true)
        const timer = setTimeout(() => setIsAnimating(false), 100);
        return () => clearTimeout(timer);
    }, [carouselIndex]);

    const handleHeadphoneChange = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsAnimating(true);
        setCarouselIndex(0);

        // Get the current image's ID
        const currentImageId = headphoneimages[headphonecurrentImage].id;

        if (direction === 'right') {
            const nextImageId = currentImageId + 1;

            if (nextImageId <= headphoneimages.length) {
                const nextImageIndex = headphoneimages.findIndex(img => img.id === nextImageId);
                if (nextImageIndex !== -1) {
                    setHeadphoneCurrentImage(nextImageIndex);

                    if (nextImageIndex === headphoneimages.length - 1) {
                        setDirection('left');
                    }
                }
            }
        } else {
            const prevImageId = currentImageId - 1;

            if (prevImageId >= 1) {
                const prevImageIndex = headphoneimages.findIndex(img => img.id === prevImageId);
                if (prevImageIndex !== -1) {
                    setHeadphoneCurrentImage(prevImageIndex);

                    if (prevImageIndex === 0) {
                        setDirection('right');
                    }
                }
            }
        }
        // End animation after transition time (adjust if needed)
        setTimeout(() => setIsAnimating(false), 100);
    };

    return (
        <React.Fragment>

            <OwlCarousel className="owl-theme" startPosition={carouselIndex} {...slider_control}>
                {/* Headphone slider item */}
                <div className="item VK_owl_item" style={{ display: carouselIndex === 0 ? 'block' : 'none' }}>
                    <div className="VK_slider_bgimage h-100">
                        <div className="d-flex h-100 align-items-center VK_headphone_slider_size flex-sm-row flex-column-reverse">
                            <div>
                                <Animated
                                    animationIn={isAnimating ? (direction === 'right' ? "slideInDown" : "slideInUp") : ""}
                                    animationOut="fadeOut"
                                    isVisible={isAnimating}
                                >
                                    <div>
                                        <h2 className='VK_headphone_heading'>{headphoneContent[headphonecurrentImage]?.heading}</h2>
                                    </div>
                                    <div className='mt-lg-4 mt-sm-3 mt-1'>
                                        <p className='VK_headphone_desc'>
                                            {headphoneContent[headphonecurrentImage]?.description}
                                        </p>
                                    </div>
                                </Animated>
                            </div>
                            <div className='VK_headphone_slider'>
                                <Animated
                                    animationIn={isAnimating ? (direction === 'right' ? "slideInDown" : "slideInUp") : ""}
                                    animationOut="fadeOut"
                                    isVisible={isAnimating}
                                >
                                    <div className='VK_headphone_container overflow d-flex flex-nowrap' >
                                        <div className='v_img'>
                                            <img src={headphoneimages[headphonecurrentImage]?.image} className='w-100 h-100' alt="" />
                                        </div>
                                    </div>
                                </Animated>
                            </div>
                            <div className='VK_headphone_slider_controls'>
                                <button className='VK_headphone_slider_nav' onClick={handleHeadphoneChange}>
                                    {direction === 'right' ? (
                                        <PiArrowRightFill className="icon" />
                                    ) : (
                                        <PiArrowRightFill className="icon" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Watch slider item */}
                <div className="item VK_owl_item" style={{ display: carouselIndex === 1 ? 'block' : 'none' }}>
                    <div className="VK_slider_gradient h-100" style={{ background: slides[currentImageIndex].bgColor }}>
                        <div className="d-flex justify-content-between h-100 align-items-center VK_watch_slider_size flex-sm-row flex-column-reverse">
                            <div>
                                <h2 className='VK_watch_heading'>{slides[currentImageIndex].heading}</h2>
                                <h5 className='text-white VK_watch_sub'>{slides[currentImageIndex].subHeading.split(',')[0]},<span className='text-black ps-2'>{slides[currentImageIndex].subHeading.split(',')[1]}</span></h5>
                                <div className='mt-lg-5 mt-sm-3 mt-1'>
                                    <p className='VK_watch_desc'>
                                        {slides[currentImageIndex].description}
                                    </p>
                                </div>
                                <div className='mt-lg-5 mt-sm-3 mt-1'>
                                    <h2 className='VK_watch_price text-white'>{slides[currentImageIndex].price}</h2>
                                </div>
                                <div className='mt-sm-4 mt-1 pb-3'>
                                    <button className='VK_theme_btn'>Order Now</button>
                                </div>
                            </div>
                            <div className='VK_watch_slider'>
                                <div className='VK_watch_container overflow d-flex flex-nowrap' ref={containerRef1}>
                                    <div className='w-100 h-100'>
                                        <img src={slides[currentImageIndex].image} className='w-100 h-100' alt="" />
                                    </div>
                                </div>
                                <div className='VK_slider_controls'>
                                    <button className='VK_slider_nav' onClick={(e) => handlechangewatch('left', e)}>
                                        <FaAngleLeft className='icon' />
                                    </button>
                                    <button className='VK_slider_nav' onClick={(e) => handlechangewatch('right', e)}>
                                        <FaAngleRight className='icon' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item VK_owl_item'>
                    <div className='V_spring'>
                        <div className="">
                            <p className='V_50 mb-0'>50 % OFF SITEWIDE</p>
                        </div>
                        <div className='d_container h-100'>
                            <Row className='h-100'>
                                <Col lg={4} className='align-self-center p-3'>
                                    <div className='V_rite_of '>
                                        <h1 className='V_rite'> <p className='d-flex justify-content-start'>RITE</p>
                                            <p className='d-flex justify-content-center'>OF</p>
                                            <p className='d-flex justify-content-end'>SPRING</p>
                                        </h1>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="V_bottom d-flex justify-content-between">
                            <p className='V_tank_top'>Tank Top - White</p>
                            <p className='V_shop_arri'>SHOP NEW ARRIVALS</p>
                        </div>
                    </div>
                </div>
                <div className='item VK_owl_item'>
                    <div className='V_vintage_back'>
                        <div className='d_container h-100'>
                            <div className='row m-0 d-flex h-100'>
                                <div className="col-12">

                                    <h1 className='V_vintage_text'>VINTAGE</h1>
                                    <p className='V_vintage_sub_text'>At vero eos et accusamus et iusto odio dignis ducimus qui blanditiis praesentium</p>
                                </div>

                                <div className=''>
                                    <Button className='py-1 px-2 px-sm-4 px-lg-5 text-dark V_vintage_btn'>Buy Now</Button>
                                </div>
                                <div>
                                    <img src={require('../../../Parth/assets/Main Girl.png')} alt="" className='V_main_girl' />
                                    <img src={require('../../../Parth/assets/Shadow.png')} alt="" className='V_shadow_girl' />
                                </div>
                                <p className='V_featured'>FEATURED
                                    COLLECTION</p>
                                <div className='V_both_denim'>
                                    <div className='V_blur V_blur2'>
                                        <div className=''>
                                            <img src={require('../../../Parth/assets/jacket.png')} alt="" className='V_jens' />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className='V_jacket mb-0'>Denim Jacket</p>
                                                <p className='V_jacket mb-0'>$54</p>
                                            </div>
                                            <div className='d-flex '>
                                                <div className='V_dil d-flex align-items-center justify-content-center me-md-2 me-sm-1 me-1'>
                                                    <img src={require('../../../Parth/assets/heart.png')} alt="" className='w-50' />
                                                </div>
                                                <div className='V_theli d-flex align-items-center justify-content-center me-md-2'>
                                                    <img src={require('../../../Parth/assets/shopping-cart 1.png')} alt="" className='w-50' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='V_blur v_blur1'>
                                        <div className=''>
                                            <img src={require('../../../Parth/assets/denim jens.png')} alt="" className='V_jens' />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className='V_jacket mb-0'>Denim Jacket</p>
                                                <p className='V_jacket mb-0'>$54</p>
                                            </div>
                                            <div className='d-flex '>
                                                <div className='V_dil d-flex align-items-center justify-content-center me-2'>
                                                    <img src={require('../../../Parth/assets/heart.png')} alt="" className='w-50' />
                                                </div>
                                                <div className='V_theli d-flex align-items-center justify-content-center'>
                                                    <img src={require('../../../Parth/assets/shopping-cart 1.png')} alt="" className='w-50' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>

            {/* display none */}
            <section className='VK_slider_parent d-none inter'>
                <button onClick={() => { handleNextClick() }} className='position-absolute'>
                    scroll
                </button>

                {/* nike text */}
                <div className="VK_slider_back_txt inter">
                    <h2>
                        NIKE
                    </h2>
                </div>

                {/* nike logo */}
                <div className='VK_slider_nike_logo'>
                    <img src={require('../../assets/nike_logo.png')} className='w-100 h-100' alt="" />
                </div>

                {/* shoes description */}
                <div className='VK_slider_shoes_description ps-md-5'>
                    <div className='VK_shoes_color text-white mb-4'>
                        <div className='VK_slider_name'>
                            <div className='VK_slider_product_name' ref={product_name}>
                                <h3>
                                    Nike Impact 4
                                </h3>
                                <h3>
                                    Nike Air Max 1
                                </h3>
                                <h3>
                                    Nike Impact 4
                                </h3>
                                <h3>
                                    Nike Air Max Solo
                                </h3>
                                <h3>
                                    Nike Air Max INTRLK Lite
                                </h3>
                            </div>
                            <div className='VK_product_price' ref={price}>
                                <h4>
                                    $250.90
                                </h4>
                                <h4>
                                    $195.55
                                </h4>
                                <h4>
                                    $199.99
                                </h4>
                                <h4>
                                    $135.55
                                </h4>
                                <h4>
                                    $213.55
                                </h4>
                            </div>
                        </div>

                        <p className='mb-2 font_18'>
                            Colors
                        </p>
                        <div className='d-flex gap-2 VK_color_size'>
                            <span className='VK_clr_dots' style={{ backgroundColor: "#E6DBCE" }}></span>
                            <span className='VK_clr_dots' style={{ backgroundColor: "#FF2828" }}></span>
                            <span className='VK_clr_dots' style={{ backgroundColor: "#33FB01" }}></span>
                            <span className='VK_clr_dots' style={{ backgroundColor: "#000000" }}></span>
                        </div>
                    </div>
                    <div className='text-white mb-4'>
                        <p className='mb-2 font_18'>
                            Size
                        </p>
                        <div className='d-flex gap-2 VK_color_size'>
                            <span className='VK_slider_size VK_slider_active_size'>
                                6
                            </span>
                            <span className='VK_slider_size'>
                                7
                            </span>
                            <span className='VK_slider_size'>
                                8
                            </span>
                            <span className='VK_slider_size'>
                                9
                            </span>
                        </div>
                    </div>
                    <div>
                        <button className='VK_slider_buy_btn'>
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* shoes image display parent */}
                <div className='VK_shoes_img_par' ref={big_img}>
                    <div className='VK_shoes_img_box'>
                        <img src={require('../../assets/shoes1.png')} className='w-100' alt="" />
                    </div>
                    <div className='VK_shoes_img_box'>
                        <img src={require('../../assets/shoes2.png')} className='w-100' alt="" />
                    </div>
                    <div className='VK_shoes_img_box'>
                        <img src={require('../../assets/shoes3.png')} className='w-100' alt="" />
                    </div>
                    <div className='VK_shoes_img_box'>
                        <img src={require('../../assets/shoes4.png')} className='w-100' alt="" />
                    </div>
                    <div className='VK_shoes_img_box'>
                        <img src={require('../../assets/shoes5.png')} className='w-100' alt="" />
                    </div>
                </div>


                {/* shoes mini side display */}
                <div className='VK_mini_preview'>
                    <div className='VK_mini_grid'>
                        <div className='VK_mimi_prv_div VK_preview_1'>
                            <div className='w-100 h-100 VK_mini_img_box'>
                                <img src={require('../../assets/Rectangle 2.png')} className='VK_bg_preview h-100' alt="" />
                                <div className='VK_mini_img_cont' ref={mini1}>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/shoes1.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/shoes2.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/shoes3.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/shoes4.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/shoes5.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='VK_mimi_prv_div VK_preview_2'>
                            <div className='w-100 h-100 VK_mini_img_box'>
                                <img src={require('../../assets/Rectangle 3.png')} className='VK_bg_preview h-100' alt="" />
                                <div className='VK_mini_img_cont' ref={mini2}>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/pair1.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/pair2.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/pair3.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/pair4.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/pair5.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='VK_mimi_prv_div VK_preview_3'>
                            <div className='w-100 h-100 VK_mini_img_box'>
                                <img src={require('../../assets/Rectangle 4.png')} className='VK_bg_preview h-100' alt="" />
                                <div className='VK_mini_img_cont VK_mini_img1' ref={mini3}>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/gd1.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/gd2.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/gd3.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/gd4.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                    <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                        <img src={require('../../assets/gd5.png')} className='w-100 h-100 object_contain' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment >
    )
}

export default ShoesSlider