import React from 'react'
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './../css/trending.css'
import './../css/Bought.css'

const Customerlike = () => {

    const filterItems = [
        {
            id: 1,
            image: "itemimg1.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Premium Lehenga choli",
            rating: 4.5,
            description: "Purple lehenga choli in silk",
            colors: [
                { id: 1, color: "#B16AAF", isActive: true },
            ],
            price: 120,
            originalPrice: 140
        },
        {
            id: 2,
            image: "itemimg2.png",
            isBestSeller: false,
            isNewArrial: false,
            name: "Traditional Chaniya choli",
            rating: 4.7,
            description: "Blue prinetd chaniya choli with dupatta",
            colors: [
                { id: 1, color: "#BF002A", isActive: true },
                { id: 2, color: "#6BC89B", isActive: false },
                { id: 3, color: "#C796D8", isActive: false },
                { id: 4, color: "#6B8AC8", isActive: false }
            ],
            price: 250,
            originalPrice: 300
        },
        {
            id: 3,
            image: "itemimg3.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Premium Saree",
            rating: 4.7,
            description: "Mustard yellow cotton silk chaniya choli",
            colors: [
                { id: 1, color: "#FFB804", isActive: true },
                { id: 2, color: "#6BC89B", isActive: false },
                { id: 3, color: "#C796D8", isActive: false },
                { id: 4, color: "#6B8AC8", isActive: false }
            ],
            price: 250,
            originalPrice: 300
        },
        {
            id: 4,
            image: "itemimg4.png",
            isBestSeller: false,
            isNewArrial: true,
            name: "Traditional Chaniya choli",
            rating: 4.7,
            description: "Black cotton silk chaniya choli for navratri",
            colors: [
                { id: 1, color: "#272629", isActive: true },
                { id: 2, color: "#EC1B1B", isActive: false },
                { id: 3, color: "#49C0C0", isActive: false },
                { id: 4, color: "#077E35", isActive: false }
            ],
            price: 250,
            originalPrice: 300
        },
    ];

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

            <section className='d_p-50  d_trend d_like'>
                <div className="d_container">
                    <div className="d_head px-3 d-flex justify-content-between align-items-center">
                        <h4 className='mb-0'>Customer also like this</h4>
                    </div>
                    <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
                        {filterItems.map((item, index) => {
                            console.log(item.length)
                            return (
                                <div key={item.id} className="slider-item">
                                    <div className="d_box">
                                        <div className="d_img">
                                            <img src={require(`./../d_img/${item.image}`)} alt="" />
                                            {item.isBestSeller &&
                                                (<div className="d_seller">Best Seller</div>)}
                                            {item.isNewArrial &&
                                                (<div className="d_arrival">New Arrival</div>)}
                                            <div className="d_trendicon d-flex justify-content-center align-items-center">
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
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </section>

        </>
    )
}

export default Customerlike
