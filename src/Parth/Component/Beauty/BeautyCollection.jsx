import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Map from '../../../Vivek/Component/Map'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import './BeautyCollection.css'

const Elecroniccollection = () => {

    var data = [
        {
            compnay: "RENEE",
            name: "Everyday Matte Lipstic",
            colors: [
                "#F8EE72", "#000000",
            ],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "Renee.png"
        },
        {
            compnay: "SUGAR",
            name: "Ace Of Face Foundation Stick-07 Vanilla Latte ",
            colors: [
                "#000000", "#DFBCA3"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "Sugar.png"
        },
        {
            compnay: "ICONIC",
            name: "Flawless Finish Duo Bundle",
            colors: [
                "#000000", "#DFBCA3"
            ],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "iconic.png"
        },
        {
            compnay: "MAC",
            name: "Connect In Colour Eye Shadow Palette: Rose",
            colors: ["#000000", "#ED9AD1"],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "Mac.png"
        },
        {
            compnay: "FACESCANADA",
            name: "Perfect Blush",
            colors: [
                "#F59D96", "#F3C0F8"
            ],
            rating: 4.5,
            bestseller: true,
            price: 120,
            old_price: 140,
            image: "Facescanada.png"
        },
        {
            compnay: "COLORBAR",
            name: "Luxe Arteffects Nail Lacquer",
            colors: [
                "#C6C7C6", "#9FBF9F", "#BCEFEF"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "Colorbar.png"
        },
        {
            compnay: "RENEE",
            name: "Eau De Parfum Bloom ",
            colors: [
                "#410F29", "#4EBABA", "#EDC285"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "ReneePerfum.png"
        },
        {
            compnay: "MAC",
            name: "Locked Kiss 24hr Lipstick",
            colors: [
                "#A5535D", "#DC3D3D", "#BB7423"
            ],
            rating: 4.5,
            bestseller: false,
            price: 120,
            old_price: 140,
            image: "Maclipstic.png"
        },
    ]

    const [electronicProduct, setelectoincproduct] = useState([])

    useEffect(() => {
        setelectoincproduct(data)
    }, [])


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
                                <div className='col-xl-3 col-md-4 col-sm-6 my-3 px-4'>
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
                                                <div className='ms-auto pe-3 mt-lg-3 mt-2'>
                                                    <button className='border-0 bg-transparent VK_btn_shadow p-0 rounded-circle VK_wishlist_icn'>
                                                        <FaRegHeart />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='VK_card_imgs'>
                                                <img src={require(`../../assets/${item.image}`)} className='w-100 h-100 object_contain' alt="" />
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
