import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Map from '../Map'

const Bestsellers = () => {

    let data = [
        {
            name: "Ethnic Picks",
            offer: "Up to 30% off",
            image: "seller1.png"
        },
        {
            name: "Casual Collation ",
            offer: "Up to 30% off",
            image: "seller2.png"
        },
        {
            name: "Sports wear",
            offer: "Up to 20% off",
            image: "seller3.png"
        },
        {
            name: "Jewellery",
            offer: "Up to 15% off",
            image: "seller4.png"
        },
        {
            name: "Bags & Luggage ",
            offer: "Up to 30% off",
            image: "seller5.png"
        },
        {
            name: "Party Wear",
            offer: "Up to 30% off",
            image: "seller6.jfif"
        },
        {
            name: "Men’s ethnic wear",
            offer: "Up to 30% off",
            image: "seller7.png"
        },
        {
            name: "Festival Home Decor ",
            offer: "Up to 30% off",
            image: "seller8.png"
        },
    ]

    const [seller, setseller] = useState([])

    useEffect(() => {
        setseller(data)
    }, [])

    return (
        <React.Fragment>
            <div className='VK_sec_padding'>
                <div className='d_container inter'>
                    <Row className='m-0 mb-4'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <h2 className='section_title m-0'>
                                BEST SELLERS
                            </h2>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        <Map data={seller}>
                            {(item) => (
                                <div className="col-xxl-3 col-lg-4 col-sm-6 my-3" key={item.name}>
                                    <div className="product-item">
                                        <div className='best_seller_img'>
                                            <img
                                                src={require(`../../assets/${item.image}`)}
                                                className='w-100 h-100 object_cover'
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className='Ele_description mt-2'>
                                            <h4 className='font_16 pt-1 mb-1'>{item.name}</h4>
                                            <p className='fw-bold font_18'>{item.offer}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Map>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bestsellers
