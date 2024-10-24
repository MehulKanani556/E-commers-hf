import React, { useEffect, useState } from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './wishlist.css';
import '../common.css';
import { Col, Row } from 'react-bootstrap';
import { FaHeart, FaStar } from 'react-icons/fa6';
import Map from '../Map';

const Wishlist = () => {

    let data = [
        {
            name: "Traditional Chaniya choli",
            description: "Cotton silk multi color chaniya choli",
            price: 120,
            old_price: 140,
            rating: 4.5,
            image: "wishlist1.png",
            color: [
                "#FFFFFF"
            ]
        },
        {
            name: "Traditional Chaniya choli",
            description: "Cotton silk multi color chaniya choli",
            price: 120,
            old_price: 140,
            rating: 4.5,
            image: "wishlist2.png",
            color: [
                "#006F98",
                "#6BC89B",
                "#C796D8",
                "#6B8AC8"
            ]
        },
        {
            name: "Traditional Chaniya choli",
            description: "Cotton silk multi color chaniya choli",
            price: 120,
            old_price: 140,
            rating: 4.5,
            image: "wishlist3.png",
            color: [
                "#333031"
            ]
        },
        {
            name: "Traditional Chaniya choli",
            description: "Cotton silk multi color chaniya choli",
            price: 120,
            old_price: 140,
            rating: 4.5,
            image: "wishlist4.png",
            color: [
                "#FF5C75",
                "#6BC89B",
                "#C796D8",
                "#6B8AC8"
            ]
        },
    ]

    let [wishlistdata, setwishlistdata] = useState([])



    useEffect(() => {
        setwishlistdata(data);
    }, [])


    return (
        <React.Fragment>

            {/* header */}
            <Header />


            {/* empty wishlist */}
            <div className='VK_empty_wishlist d-flex justify-content-center align-items-center d-none'>
                <div className='text-center'>
                    <img src={require('../../assets/empty wishlist.png')} alt="" />
                    <p className='mb-2 fw-600'>
                        Your wishlist is empty!
                    </p>
                    <p className='font_14'>
                        Explore more and shortlist some items.
                    </p>
                    <div>
                        <button className='VK_theme_btn'>
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>



            {/* wishlist */}
            <section className='py-5'>
                <div className='d_container'>
                    <Row>
                        <Col>
                            <div className='VK_wishlist'>
                                <div>
                                    <h4 className=''>
                                        Wishlist
                                    </h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Map data={wishlistdata}>
                            {(item) => (
                                <Col xl={3} lg={4} sm={6} className='my-3'>
                                    <div className=''>
                                        <div className='VK_wishlist_parent'>
                                            <div className='VK_wishlist_img'>
                                                <img src={require(`../../assets/${item.image}`)} className='w-100 h-100 object_cover object_top' alt="" />
                                            </div>
                                            <div className='VK_wishlist_bt'>
                                                <button className='VK_wishlist_btn'>
                                                    <FaHeart className='text-danger vk_IN' />
                                                </button>
                                            </div>
                                        </div>
                                        <div className='VK_wislist_desc mt-2'>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <div>
                                                    <h5 className='m-0 VK_wishlist_cart_tit'>
                                                        {item.name}
                                                    </h5>
                                                </div>
                                                <div className='VK_revire_desc d-inline-flex'>
                                                    <span className='text-warning d-inline-block'>
                                                        <FaStar className='VK_icns' />
                                                    </span>
                                                    <span className='font_14 d-inline-block'>
                                                        {item.rating}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='mb-2 font_14 fw-500'>
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div className='d-flex align-items-center gap-2'>
                                                        {
                                                            item.color.map((el, ind) => {
                                                                return (
                                                                    <span key={ind} className='VK_wishlist_color_span d-inline-block' style={{ backgroundColor: el }}></span>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className='d-flex align-items-end'>
                                                        <p className='m-0 fw-600 text-black'>
                                                            ${item.price}
                                                        </p>
                                                        <p className='m-0 light_color font_14 ps-1'>
                                                            <strike>
                                                                ${item.old_price}
                                                            </strike>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )}
                        </Map>
                    </Row>
                </div>
            </section>

            {/* Footer */}
            < Footer />

        </React.Fragment >
    )
}

export default Wishlist
