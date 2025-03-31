import React from 'react'
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './../css/trending.css'
import './../css/Bought.css'
import { Link } from 'react-router-dom';

const Recentlyviewed = ({ data, bestSellerIds, newArrivalIds }) => {

    const BaseUrl = process.env.REACT_APP_BASEURL;

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    };

    const CustomPrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <IoIosArrowBack className="custom-arrow" />
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <IoIosArrowForward className="custom-arrow" />
            </div>
        );
    };

    return (
        <>

            <section className='d_p-50 pb-0 d_trend d_like'>
                <div className="d_container">
                    <div className="d_head px-3 d-flex justify-content-between align-items-center">
                        <h4 className='mb-0'>Recently Viewed items</h4>
                    </div>
                    <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                        {data.map((item) => {
                            const discountAmount = (item.productVariantData[0].originalPrice * item.productVariantData[0].discountPrice) / 100;
                            return (
                                <div key={item._id} className="slider-item">
                                      <Link to={`/womendetails/${item._id}`}>
                                        <div className="d_box">
                                            <div className="d_img">
                                                <img src={`${BaseUrl}/${item.productVariantData[0].images[0]}`} alt="" />
                                                {bestSellerIds.includes(item._id) && (<div className="d_seller">Best Seller</div>)}
                                                {newArrivalIds.includes(item._id) && (<div className="d_arrival">New Arrival</div>)}
                                                <div className="d_trendicon d-flex justify-content-center align-items-center d_cur">
                                                    <IoMdHeartEmpty className='d_icon ' />
                                                </div>
                                            </div>
                                            <div className="d_content">
                                                <div className='d-flex flex-column h-100'>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d_name">{item.categoriesData[0].categoryName}</div>
                                                        <div className='d-flex align-items-center'>
                                                            <FaStar className='d_staricon me-1' />
                                                            <div className="d_review">{parseFloat(item.ratingData[0]?.rating) || 0}</div>
                                                        </div>
                                                    </div>
                                                    <div className="d_desc">{item.productName}</div>
                                                    <div className="d-flex align-items-center justify-content-between mt-auto">
                                                        <div className="d-flex align-items-center">
                                                            {item.productVariantData[0].colorName.split(',').map((color, i) => (
                                                                <div key={i} className="d_color" style={{ backgroundColor: color }}></div>
                                                            ))}
                                                        </div>
                                                        <div className="d-flex align-items-end">
                                                            <div className="d_price">${(item.productVariantData[0].originalPrice - discountAmount)}</div>
                                                            <div className="d_disprice ms-1 text-decoration-line-through">${item.productVariantData[0].originalPrice}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </section>

        </>
    )
}

export default Recentlyviewed
