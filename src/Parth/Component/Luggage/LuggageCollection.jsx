import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Map from '../../../Vivek/Component/Map'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import './../Electronics/Electronic.css'

const Elecroniccollection = () => {

    var data = [
        {
            compnay: "SAFARI",
            name: "Polaris Pro Castle Black Trolley",
            colors: [
                "#2A2A2A",
                "#3C7EE0"
            ],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "safaritrolly.png"
        },
        {
            compnay: "SKYBAGS",
            name: "Klan plus 02 School Backpack",
            colors: [
                "#BF002A", "#6BC89B",  "#C796D8", "#6B8AC8"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "skybags.png"
        },
        {
            compnay: "VIP",
            name: "Croc Unisex PVC Duffle Bag",
            colors: [
                "#6D5E55", "#C796D8", "#6B8AC8"
            ],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "VIP.png"
        },
        {
            compnay: "SAFARI",
            name: "Form Plus 2 32L Grey Laptop Backpack",
            colors: ["#585858", "#000000"],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "safari2.png"
        },
        {
            compnay: "MONOS",
            name: "Metro Backpack",
            colors: [
                "#BF002A", "#6BC89B",  "#C796D8", "#6B8AC8"
            ],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "monos.png"
        },
        {
            compnay: "SAFARI",
            name: "Hue Set of 2 Printed Trolley Bags",
            colors: [
                "#1CA2CB"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "safari3.png"
        },
        {
            compnay: "REMOWA",
            name: "Signature - Flap Backpack Large",
            colors: [
                "#3D3C28", "#000000", "#85520B", "#042708"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "remova.png"
        },
        {
            compnay: "SAFARI",
            name: "Basic Neck Pillow With Washable Cover -Blue",
            colors: [
                "#27365A", "#000000", "#CFCFCF"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "safari4.png"
        },
    ]

    const [electronicProduct, setelectoincproduct] = useState([])

    useEffect(() => {
        setelectoincproduct(data)
    }, [])


    return (
        <React.Fragment>
            <section className='d_p-80'>
                <div className='d_container inter '>
                    <Row className='m-0 mb-4'>
                        <Col className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
                            <h2 className='section_title mb-1 mb-sm-0'>
                                new collection of Bags
                            </h2>
                            <p className='m-0 font_14 primary_color white_space fw-500 inter'>
                                VIEW ALL
                            </p>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        <Map data={electronicProduct}>
                            {(item) => (
                                <div className='col-xl-3 col-lg-4 col-sm-6 my-3 px-sm-3 px-0' >
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
                                                <div className='ms-auto pe-3 mt-2'>
                                                    <button className='border-0 bg-transparent VK_btn_shadow p-0 rounded-circle VK_wishlist_icn'>
                                                        <FaRegHeart />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='VK_card_imgs '>
                                                <img src={require(`../../assets/${item.image}`)} className='w-100 h-100' alt="" />
                                            </div>
                                            <div className='product_desc p-3'>
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
