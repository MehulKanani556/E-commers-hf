import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Map from '../Map'

const Toptoys = () => {

    var data = [
        {
            name: "Building Sets",
            offer: "Up to 20% off",
            image: "toy1.png"
        },
        {
            name: "Scooter & Bikes",
            offer: "Up to 20% off",
            image: "toy2.png"
        },
        {
            name: "Soft Toys",
            offer: "Up to 30% off",
            image: "toy3.png"
        },
        {
            name: "Art & Craft",
            offer: "Up to 20% off",
            image: "toy4.png"
        },
        {
            name: "Action Toys",
            offer: "Up to 20% off",
            image: "toy5.png"
        },
        {
            name: "Mattel Uno",
            offer: "Up to 20% off",
            image: "toy6.png"
        },
    ]

    const [toys, settoys] = useState([])


    useEffect(() => {
        settoys(data)
    }, [])

    return (
        <React.Fragment>
            <section className='py-5'>
                <div className='d_container inter p-0'>
                    <Row className='m-0 mb-4'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <h2 className='section_title m-0'>
                                TOY & GAMES
                            </h2>
                            <p className='m-0 font_14 primary_color fw-500 inter'>
                                View More
                            </p>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        <Map data={toys}>
                            {(item) => (
                                <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6" key={item.name}>
                                    <div className="product-item">
                                        <div className='electronc_img'>
                                            <img
                                                src={require(`../../assets/${item.image}`)}
                                                className='w-100 h-100 object_cover'
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className='Ele_description mt-2'>
                                            <h4 className='font_16 pt-1 mb-1'>{item.name}</h4>
                                            <p className='fw-bold'>{item.offer}</p>
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

export default Toptoys
