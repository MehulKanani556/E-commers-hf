import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './gridBuety.css'
import Map from '../../../Vivek/Component/Map'

const Gridcomponent = () => {

    let data = [
        {
            title: "Blend your beauty",
            image: "blend your beauty.png",
            logo: "iconic logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Your skin tells a story. Make it a good one.",
            image: "Your skin tells a story.png",
            logo: "your skin logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Mosturise like you mean it",
            image: "mosturise.png",
            logo: "mosturise logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Makeup first, skin second",
            image: "mackup first.png",
            logo: "Suger logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Skincare is a journey not a destination",
            image: "skincare is a journy.png",
            logo: "mac logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Flawless skin requires daily commitment",
            image: "flawless skin.png",
            logo: "renee logo.png",
            offer: "Upto 20% OFF"
        },
        {
            title: "Lost in the rhythm of my favorite tunes.",
            image: "walk with confidance.png",
            logo: "maybleen logo.png",
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
