import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Map from '../Map';

const Electronicsessiental = () => {

    let data = [
        {
            name: "Smarts Watches",
            offer: "Up to 20% off",
            image: "ele1.png"
        },
        {
            name: "Projector",
            offer: "Starting ₹6999",
            image: "ele2.png"
        },
        {
            name: "Printer",
            offer: "Up to 30% off",
            image: "ele3.png"
        },
        {
            name: "Wireless headphones",
            offer: "Grab Now",
            image: "ele4.png"
        },
        {
            name: "Refrigerator",
            offer: "Up to 50% off",
            image: "ele5.png"
        },
        {
            name: "Gaming Laptop",
            offer: "Up to 25% off",
            image: "ele6.png"
        },
    ]

    const [electroins, setelectroins] = useState([]);

    useEffect(() => {
        setelectroins(data);
    }, [])

    return (
        <React.Fragment>
            <section className='py-5'>
                <div className='d_container inter p-0'>
                    <Row className='m-0 mb-4'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <h2 className='section_title m-0'>Electronic Accessories</h2>
                            <p className='m-0 font_14 primary_color fw-500 inter'>
                                VIEW ALL
                            </p>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        <Map data={electroins}>
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

export default Electronicsessiental
