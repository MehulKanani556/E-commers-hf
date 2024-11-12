import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Map from '../../../Vivek/Component/Map'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import './SportCollection.css'

const Elecroniccollection = () => {

    var data = [
        {
            compnay: "Run In Pegausus 41",
            name: "Nike pegausus running shoes for men",
            colors: [
                "#959499", "#6BC89B", "#C796D8", "#6B8AC8"
            ],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "run in.png"
        },
        {
            compnay: "Adidas running wear",
            name: "Daily run 3 stripes leggings",
            colors: [
                "#BF002A", "#6BC89B", "#C796D8", "#6B8AC8"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "adidas running.png"
        },
        {
            compnay: "Nike cortez",
            name: "Nike cortez textile collection",
            colors: [
                "#353535", "#6BC89B", "#C796D8", "#6B8AC8"
            ],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "nike corte.png"
        },
        {
            compnay: "Adidas sportswear",
            name: "Adizero running singlet for men",
            colors: ["#E4BE76", "#EC1B1B", "#49C0C0", "#077E35"],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "addidas.png"
        },
        {
            compnay: "Badminton Kit",
            name: "BAdminton racquets & kit",
            colors: [
                "#FFFFFF"
            ],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "badminton.png"
        },
        {
            compnay: "Football",
            name: "Football & accessories",
            colors: [
                "#FFFFFF", "#6BC89B", "#C796D8", "#6B8AC8"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "football.png"
        },
        {
            compnay: "Football Shoes",
            name: "Customized shoes for football",
            colors: [
                "#A0B0C0"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "football23.png"
        },
        {
            compnay: "Puma cricket kit",
            name: "Puma cricket kit with customization",
            colors: [
               
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "cricket.png"
        },
    ]

    const [electronicProduct, setelectoincproduct] = useState([])

    useEffect(() => {
        setelectoincproduct(data)
    }, []);


    return (
        <React.Fragment>
            <section className='VK_sec_padding'>
                <div className='d_container inter p-0'>
                    <Row className='m-0 mb-4'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <h2 className='section_title m-0'>
                                NEW COLLECTION OF ELECTRONICS
                            </h2>
                            <p className='m-0 font_14 primary_color white_space fw-500 inter'>
                                VIEW ALL
                            </p>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        <Map data={electronicProduct}>
                            {(item) => (
                                <div className='col-xl-3 col-md-4 col-sm-6 my-3 px-4' >
                                    <div className='VK_shadow VK_ele_card_per'>
                                        <div>
                                            <div className='VK_best-seller d-flex'>
                                                {
                                                    item.bestseller ? (
                                                        <div>
                                                            <span className='VK_sellter_tag'>
                                                                Best Seller
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        null
                                                    )
                                                }
                                                <div className='ms-auto pe-3 mt-1'>
                                                    <button className='border-0 bg-transparent VK_btn_shadow p-0 rounded-circle VK_wishlist_icn'>
                                                        <FaRegHeart />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='VK_card_imgs'>
                                                <img src={require(`../../assets/${item.image}`)} className='w-100 h-100' alt="" />
                                            </div>
                                            <div className='product_desc p-3 '>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <div>
                                                        <h5 className='VK_ele_product_comp fw-600 text-black'>
                                                            {item.compnay}
                                                        </h5>
                                                    </div>
                                                    <div>
                                                        <span className='text-warning pe-2'>
                                                            <FaStar className='icn' />
                                                        </span>
                                                        <span>
                                                            {item.rating}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className=''>
                                                    <p className='VK_product_name'>
                                                        {item.name}
                                                    </p>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div className='d-flex gap-1'>
                                                        {
                                                            item.colors.map((el, indx) => {
                                                                return (
                                                                    <span className='VK_product_col_dot' style={{ backgroundColor: el }} key={indx}></span>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className='d-flex align-items-end'>
                                                        <p className='fw-bold font_18 m-0 pe-1'>
                                                            ${item.price}
                                                        </p>
                                                        <strike className='light_color'>
                                                            ${item.old_price}
                                                        </strike>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Map>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Elecroniccollection
