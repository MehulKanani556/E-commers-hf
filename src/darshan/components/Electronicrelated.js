import React from 'react'

import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import './../css/trending.css'
import './../css/Bought.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Electronicrelated = () => {

    const filterItems = [
        {
            id: 1,
            image: "itemimg9.png",
            isBestSeller: true,
            isNewArrial: true,
            name: "Apple iPhone15",
            rating: 4.5,
            description: "Blue midnight",
            colors: [
                { id: 1, color: "#B16AAF", isActive: true },
            ],
            price: 120,
            originalPrice: 140
        },
        {
            id: 2,
            image: "itemimg9.png",
            isBestSeller: true,
            isNewArrial: false,
            name: "Apple iPhone15",
            rating: 4.5,
            description: "Blue midnight",
            colors: [
                { id: 1, color: "#B16AAF", isActive: true },
            ],
            price: 120,
            originalPrice: 140
        },
        {
            id: 3,
            image: "itemimg9.png",
            isBestSeller: false,
            isNewArrial: false,
            name: "Apple iPhone15",
            rating: 4.5,
            description: "Blue midnight",
            colors: [
                { id: 1, color: "#B16AAF", isActive: true },
            ],
            price: 120,
            originalPrice: 140
        },
        {
            id: 4,
            image: "itemimg9.png",
            isBestSeller: false,
            isNewArrial: false,
            name: "Apple iPhone15",
            rating: 4.5,
            description: "Blue midnight",
            colors: [
                { id: 1, color: "#B16AAF", isActive: true },
            ],
            price: 120,
            originalPrice: 140
        },
    ];

    const settings = {
        dots: false,
        arrows:true,
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
                arrows:false,
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

            <section className='d_p-50 pb-0 d_trend d_like d_eleitem'>
                <div className="d_container">
                    <div className="d_head px-3 d-flex justify-content-between align-items-center">
                        <h4 className='mb-0'>Related Items</h4>
                    </div>
                    <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                        {filterItems.map((item, index) => {
                            return (
                                <div key={item.id} className="slider-item">
                                    <Link to='/electronicdetails'>
                                    <div className="d_box">
                                        <div className="d_img">
                                            <img src={require(`./../d_img/${item.image}`)} alt="" />
                                            {item.isBestSeller &&
                                                (<div className="d_seller">Best Seller</div>)}
                                            {item.isNewArrial &&
                                                (<div className="d_arrival">New Arrival</div>)}
                                            <div className="d_trendicon d-flex justify-content-center align-items-center d_cur">
                                                <IoMdHeartEmpty className='d_icon ' />
                                            </div>
                                        </div>
                                        <div className="d_content">
                                            <div className='d-flex flex-column h-100'>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d_name">{item.name}</div>
                                                    <div className='d-flex align-items-center'>
                                                        <FaStar className='d_staricon me-1' />
                                                        <div className="d_review">{item.rating}</div>
                                                    </div>
                                                </div>
                                                <div className="d_desc">{item.description}</div>
                                                <div className="d-flex align-items-center justify-content-between mt-auto">
                                                    <div className="d-flex align-items-center">
                                                        {item.colors.map((colorobj, i) => {
                                                            return (
                                                                <div key={colorobj.id} className={`d_color ${colorobj.isActive ? 'active' : ""}`} style={{ backgroundColor: colorobj.color }}></div>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className="d-flex align-items-end">
                                                        <div className="d_price">${item.price}</div>
                                                        <div className="d_disprice ms-1 text-decoration-line-through">${item.originalPrice}</div>
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

export default Electronicrelated
