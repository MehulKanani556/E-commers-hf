import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './gridSports.css'
import Map from '../../../Vivek/Component/Map'

const Gridcomponent = () => {

    let data = [
        {
            title: "Astrox 100 ZZ",
            image: "yonex img.png",
            logo: "yonex logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Ice Hockey",
            image: "ice img.png",
            logo: "ice logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Experience Luxury Every Day",
            image: "experience img.png",
            logo: "experience logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Stylish sports apparel for you",
            image: "asics img.png",
            logo: "asics logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Elegance in every stroke",
            image: "columbia img.png",
            logo: "Columbia logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Accessorize Your Life",
            image: "converse img.png",
            logo: "Converse logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Walk with Confidence",
            image: "slide img.png",
            logo: "nike logo.png",
            offer: "Upto 20% OFF"
        },
    ]

    let cnt = 1

    let [gridview, setgridview] = useState([])

    useEffect(() => {
        setgridview(data)
    }, []);

    return (
        <React.Fragment>
            <section className='VK_sec_padding'>
                <div className='d_container'>
                    <Row className='m-0 mb-4'>
                        <Col className='p-0'>
                            <h2 className='section_title text-uppercase m-0'>
                                Explore Popular Brands
                            </h2>
                        </Col>
                    </Row>
                    <Row className='m-0'>
                        <Col className='p-0'>
                            <div>
                                <div class="parent">
                                    <Map data={gridview}>
                                        {(item) => (
                                            <div class={`div${cnt++} VK_grid_parent`}>
                                                <img src={require(`../../assets/${item.image}`)} className='w-100 h-100 object_center' alt="" />
                                                <div className='VK_grid_child'>
                                                    <div className='h-100 d-flex flex-column'>
                                                        <div className='d-flex'>
                                                            <div className='VK_grid_logo text-center'>
                                                                <img src={require(`../../assets/${item.logo}`)} className='object_contain' alt="" />
                                                                <p className='m-0 text-white font_12 mt-2'>
                                                                    {item.offer}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className='mt-auto'>
                                                            <h4 className='VK_pro_heading'>
                                                                {item.title}
                                                            </h4>
                                                            <div>
                                                                <button className='VK_pro_button'>
                                                                    Go to Collection
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Map>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Gridcomponent
